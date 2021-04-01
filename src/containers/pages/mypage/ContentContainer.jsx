/**
 * @author : chaeeun
 * @Date : 2021-02-16 17:03:55
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-01 23:53:31
 */

import React, { useEffect, useState } from 'react'
import MyPageContent from "../../redux/components/Mypage"
import getMyApplicants from "../../../service/api/get/get_my_applicants"
import getNotice from "../../../service/api/get/get_notice"
import deleteCancelApply from "../../../service/api/delete/delete_cancel_apply"

const ContentContainer = () => {

    const [selectedNotice, setSelectedNotice] = useState({})

    const [currentApplicants, setCurrentApplicant] = useState([])
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
                    let certainDate;
                    const dateArr = settingDate(lists.dtov).split("-")
                    certainDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2])
                    if (certainDate < new Date()) {
                        setCurrentApplicant((state) => ([...state,
                        {
                            date: settingDate(lists.dtov),
                            region: lists.region,
                            result: lists.matchingState,
                            applyDate: settingDate(lists.dtoa),
                            applyId: lists.applyId
                        }]))
                        //console.log(i.date)
                        console.log("cer<Today")
                    }
                    if (certainDate > new Date()) {
                        setPastApplicant((state) => ([...state, {
                            date: settingDate(lists.dtov),
                            region: lists.region,
                            // type: lists.type,
                            type: "말벗봉사",
                            applyDate: settingDate(lists.dtoa),
                        }]))

                        console.log("cer<Today")
                    }

                })


            })
            .catch((err) => { console.log(err) })
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






    // SECTION  manage Applicants

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
                            let certainDate;
                            const dateArr = settingDate(lists.dtov).split("-")
                            certainDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2])
                            if (certainDate < new Date()) {
                                setCurrentApplicant((state) => ([...state,
                                {
                                    date: settingDate(lists.dtov),
                                    region: lists.region,
                                    result: lists.matchingState,
                                    applyDate: settingDate(lists.dtoa),
                                    applyId: lists.applyId
                                }]))
                                //console.log(i.date)
                                console.log("cer<Today")
                            }
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
            >
            </MyPageContent>
        </>
    )

}

export default ContentContainer