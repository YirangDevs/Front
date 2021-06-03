/**
 * @author : chaeeun
 * @Date : 2021-02-16 17:03:55
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-05-27 18:38:37
 */

import React, { useEffect, useState } from 'react'
import MyPageContent from "../../redux/pages/mypage/Content"
import getMyApplicants from "../../../service/api/get/get_my_applicants"
import getNotice from "../../../service/api/get/get_activity"
import deleteCancelApply from "../../../service/api/delete/delete_cancel_apply"
import NotificationPool from "../../../containers/redux/components/NotificationPool"
import getMyMatchingRecords from '../../../service/api/get/get_my_matching_records'

const ContentContainer = () => {

    //봉사 선택한거 보여주는거 
    const [selectedNotice, setSelectedNotice] = useState({})
    //신청봉사 
    const [currentApplicants, setCurrentApplicant] = useState([])
    //과거봉사
    const [pastApplicants, setPastApplicant] = useState([])

    /**
     * @description 신청 봉사 세팅  */
    useEffect(() => {
        getMyApplicants()
            .then((res) => {
                console.log(res)
                console.log(res.Applicants)
                console.log(res.Applicants.length)

                res.Applicants.forEach((lists) => {
                    console.log(lists)

                    setCurrentApplicant((state) => ([...state,
                    {
                        date: settingDate(lists.dtov),
                        region: lists.region,
                        result: lists.matchingState,
                        applyDate: settingDate(lists.dtoa),
                        type: (lists.serviceType === "WORK" ? "노력봉사" : "말벗봉사"),
                        applyId: lists.applyId,
                        activityId: lists.activityId
                    }]))



                })
            })
            .catch((err) => { console.log(err) })


        getMyMatchingRecords()
            .then((res) => {
                console.log("과거기록")
                console.log(res)
                res.matchingRecordDtoList.forEach((lists) => {
                    setPastApplicant((state) => ([...state, {
                        serviceDate: settingDate(lists.dtov),
                        region: lists.region,
                        type: (lists.serviceType === "WORK" ? "노력봉사" : "말벗봉사"),
                        matchingDate: settingMatchingDate(lists.dtom),
                    }]))

                })
            })
            .catch((err) => console.log(err))
    }, [])






    /**
   * @description Dtoa -> Date value Setting  */
    const settingDate = (getData) => {
        const DateTime = getData
        const DoaToa = DateTime.split(" ")
        const Date = DoaToa[0];
        return Date;
    }
    /**
   * @description  Dtoa ->Time value Setting  */
    const settingTime = (getData) => {
        const DateTime = getData
        const DoaToa = DateTime.split(" ")
        const Time = DoaToa[1];
        return Time;
    }
    /**
      * @description Dtom -> Date value Setting  */
    const settingMatchingDate = (getData) => {
        const DateTime = getData
        const DomTom = DateTime.split(" ")
        const Date = DomTom[0];
        return Date;
    }





    // SECTION  신청봉사 내역

    //true : 선택 게시물  modal 열기 false : 선택 게시물  모달   modal  닫기
    const [isSelectedNoticeVisible, setSelectedNoticeVisible] = useState(false)

    const selectedNoticeModal = {
        show: () => setSelectedNoticeVisible(true),
        close: () => setSelectedNoticeVisible(false)
    }


    /**
   @description ,신청된 공고글을 보여주는 btn
   @function buttonOnclick
   @btnValue 공고글 보기
   */
    const viewNoticeOnclick = (applyId) => {
        selectedNoticeModal.show()
        getNotice(applyId) //applyId
            .then((res) => {
                console.log(res)
                setSelectedNotice((state) => ({ ...state, ...res }))
            })
    }


    //true : 신청취소 확인 modal false : 신청취소  modal  닫기
    const [isApplyCancelConfirmVisible, setApplyCancelConfirmVisible] = useState(false)

    const confirmApplyCancelModal = {
        show: () => setApplyCancelConfirmVisible(true),
        close: () => setApplyCancelConfirmVisible(false)
    }



    /**
   @description  신청 취소하기  (재확인함)
   @function buttonOnclick
   @btnValue 신청취소
   @detail  확인 한번 더하기 
   */
    const cancelApplyOnclick = (applyId) => {
        setSelectedNotice((state) => ({ ...state, applyId: applyId }))
        confirmApplyCancelModal.show()
    }

    /**
       @description  신청 취소하기
       @function buttonOnclick
       @btnValue 확인
       @detail  신청  [DELETE] 하기 -> applyCancel modal 닫기 */
    const okCancelConfirmOnclick = () => {
        deleteCancelApply(selectedNotice.applyId)
            .then((res) => {
                console.log(res);
                getMyApplicants()
                    .then((res) => {
                        console.log(res)
                        console.log(res.Applicants)
                        console.log(res.Applicants.length)

                        // TODO 주석처리
                        setCurrentApplicant([])

                        res.Applicants.forEach((lists) => {
                            console.log(lists)
                            setCurrentApplicant((state) => ([...state,
                            {
                                date: settingDate(lists.dtov),
                                region: lists.region,
                                result: lists.matchingState,
                                applyDate: settingDate(lists.dtoa),
                                applyId: lists.applyId
                            }]))
                            console.log("cer<Today")
                        })
                    })
                    .catch((err) => { console.log(err) })

                confirmApplyCancelModal.close()
            })
            .catch((err) => { console.log(err) })
    }

    /**
    @description 신청 모달닫기
    @function buttonOnclick
    @btnValue 취소 
    @detail  applyCancel modal 닫기 */
    const cancelCancelConfirmOnclick = () => {
        confirmApplyCancelModal.close()
    }


    //true : 전체 신청 보기 modal false : 전체 신청 보기  modal  닫기
    const [isApplyViewAllVisible, setApplyViewAllVisible] = useState(false)

    const confirmApplyViewAllModal = {
        show: () => setApplyViewAllVisible(true),
        close: () => setApplyViewAllVisible(false)
    }


    /**
    @description 전체 신청 보기 btn
    @function buttonOnclick
    @btnValue 전체 신청 보기
    @detail  전체 신청 보여주는 modal 열기
    */
    const viewAllApplyOnclick = () => {
        confirmApplyViewAllModal.show()
    }
    // !SECTION  신청봉사 내역




    // SECTION  봉사 기록 조회

    //필터로걸러진 봉사
    const [filterApplicants, setFilterApplicants] = useState([])

    //true : 전체 기록 보기 modal false : 전체 기록 보기  modal  닫기

    //TODO 이거 form짜고 false 로  
    const [isPastViewAllVisible, setPastViewAllVisible] = useState(false)

    const PastViewAllModal = {
        show: () => setPastViewAllVisible(true),
        close: () => setPastViewAllVisible(false)
    }

    /**
    @description 전체 기록 보기 btn
    @function buttonOnclick
    @btnValue 전체 기록 보기
    @detail  전체 기록 보여주는 modal 열기
    */
    const viewAllPastOnclick = () => {
        PastViewAllModal.show()
    }


    // SECTION  필터
    const [isPastViewFilterVisible, setPastViewFilterVisible] = useState(false)

    const PastViewFilterModal = {
        show: () => setPastViewFilterVisible(true),
        close: () => setPastViewFilterVisible(false)
    }

    const [filterDate, setFilterDate] = useState({
        firstDate: null,
        secondDate: null
    })

    /**
            @description First Date onChange
            @function FirstDateSelector
            @detail  첫번째 날짜 
            */
    const filterFirstDateOnchange = (e) => {
        console.log("1")

        console.log(e.target.value)
        const date = e.target.value
        setFilterDate((state) => ({ ...state, firstDate: date }))
        console.log(filterDate)
    }

    /**
    @description Second Date onChange
    @function SecondDateSelector
    @detail  두번쨰 날짜 
    */
    const filterSecondDateOnchange = (e) => {
        console.log("2")

        console.log(e.target.value)
        const date = e.target.value
        setFilterDate((state) => ({ ...state, secondDate: date }))
        console.log(filterDate)
    }





    //type filter 봉사 종류  필터
    const [filterType, setFilterType] = useState([])

    /**
        @description type onChange
        @function checkBoxType
        @checkBoxOption 노력봉사 , 말벗봉사
        @detail  checkbox 통해서 filterType 채우기
        */
    const FilterTypeOnchange = (e) => {
        console.log(e.target.checked)
        console.log(e.target.value)
        const checkedType = e.target.value
        if (e.target.checked) {
            return setFilterType((state) => ([...state, checkedType]))
        }
        if (!e.target.checked) {
            console.log("나가리")
            return setFilterType(filterType.filter(types => types !== checkedType))
            // return setFilterType([])
        }
    }



    /**
    @description 필터로 조회하기
    @function buttonOnclick
    @btnValue 조회하기
    @detail  필터값다 있는지 확인 -> 필터 로 추출 */
    const viewPassFilterOnclick = () => {
        if (filterDate.firstDate && filterDate.secondDate && (filterType.length !== 0)) {
            (filterType.length === 1) ?
                setFilterApplicants(pastApplicants.filter(past =>
                    filterDate.firstDate <= past.serviceDate &&
                    past.serviceDate <= filterDate.secondDate &&
                    past.type === filterType[0])
                )
                :
                setFilterApplicants(
                    pastApplicants.filter(past =>
                        filterDate.firstDate <= past.serviceDate && past.serviceDate <= filterDate.secondDate)
                )
            return PastViewFilterModal.show()
        }

        NotificationPool.api.add({
            title: "필터가 다 채워져있지 않습니다.",
            content: `필터를 다시 확인해주세요`,
            status: "error"
        })
    }


    // !SECTION  필터



    // !SECTION  봉사 기록 조회






    return (
        <>
            <MyPageContent

                currentApplicants={currentApplicants}
                pastApplicants={pastApplicants}
                selectedNotice={selectedNotice}
                settingDate={settingDate}
                settingTime={settingTime}

                isSelectedNoticeVisible={isSelectedNoticeVisible}
                selectedNoticeModal={selectedNoticeModal}


                isApplyCancelConfirmVisible={isApplyCancelConfirmVisible}
                confirmApplyCancelModal={confirmApplyCancelModal}
                viewNoticeOnclick={viewNoticeOnclick}
                cancelApplyOnclick={cancelApplyOnclick}
                okCancelConfirmOnclick={okCancelConfirmOnclick}
                cancelCancelConfirmOnclick={cancelCancelConfirmOnclick}

                isApplyViewAllVisible={isApplyViewAllVisible}
                confirmApplyViewAllModal={confirmApplyViewAllModal}
                viewAllApplyOnclick={viewAllApplyOnclick}

                isPastViewFilterVisible={isPastViewFilterVisible}
                PastViewFilterModal={PastViewFilterModal}
                filterApplicants={filterApplicants}
                isPastViewAllVisible={isPastViewAllVisible}
                PastViewAllModal={PastViewAllModal}
                viewAllPastOnclick={viewAllPastOnclick}

                filterDate={filterDate}
                filterFirstDateOnchange={filterFirstDateOnchange}
                filterSecondDateOnchange={filterSecondDateOnchange}
                filterType={filterType}
                FilterTypeOnchange={FilterTypeOnchange}

                viewPassFilterOnclick={viewPassFilterOnclick}


            >
            </MyPageContent>
        </>
    )

}

export default ContentContainer