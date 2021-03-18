/**
 * @author : chaeeun
 * @Date : 2021-02-23 19:59:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-17 15:51:13
 */


import React, {useCallback, useEffect, useState} from 'react'
import ProfileContent from "../../redux/pages/profile/Content"
import getMyInfo from "../../../service/api/get/get_my_info"
import DefaultImg from "../../../img/ProfileDefaultImg.png"
import editMyInfo from "../../../service/api/put/edit_My_info"
import getCheckValidatedEmail from "../../../service/api/get/get_check_validated_email"
import postSendCertificationEmail from "../../../service/api/post/post_certification_email"
import postVerifyCertificationEmail from "../../../service/api/post/post_verify_certification_email"
import deleteMyInfo from "../../../service/api/delete/delete_myInfo"
import NotificationPool from '../../redux/components/NotificationPool'
import LogoutProcess from '../../../service/transaction/logout_process'

//username = 닉네임
//realname = 실명
const ContentContainer = ({
    username,
    imgUrl,
    role,
    email,
    SET_USER,
}) => {


    const [userProfile, setUserProfile] = useState({
        username: "",
        realname: "",
        phone: "",
        email: "",
        verified: "",
        sex: "",
        imgUrl: "",
        role: "",
        firstRegion: "",
        secondRegion: ''
    })

    //certificationNumbers 메일인증번호
    const [isAuthNum, setAuthNum] = useState('')


    const regionOptions = ["선호지역", "수성구", "중구", "동구", "서구", "남구", "북구", "달서구"]



    const firstRegionOptions = regionOptions.filter(regions => regions !== userProfile.secondRegion)
    const SecondRegionOptions = regionOptions.filter(regions => regions !== userProfile.firstRegion)

    //userProfile에  정보넣기
    const getProps = useCallback(() => {
        //console.log(role)
        setUserProfile((state) => ({
            ...state,
            username: username,
            role: role,
            checkedEmail: email,
        }))
    }, [email, username, role])


    useEffect(() => {
        SET_USER({
            user: {
                email: userProfile.email,
                username: userProfile.username
            }
        })
    }, [SET_USER, userProfile.email, userProfile.username])


    useEffect(() => {

        getMyInfo()
            .then((res) => {
                console.log('userInfo')
                console.log(res)
                for (let data in res) {
                    setUserProfile((state) => ({ ...state, [data]: res[data] }))
                }
            })
            .catch(error => console.log(error))
        getProps()
    }, [getProps])



    useEffect(() => {
        getCheckValidatedEmail()
            .then((res) => {
                console.log("vaildatedEmail")
                console.log(res)
                setUserProfile((state) => ({ ...state, verified: res.validation }))
            })
    }, [])





    /**
         * @description updateMyInfo RequestDto
         *  * @request 
         * @body editData{email , firstRegion , phone ,
         *   realname , secondRegion, sex , username}
         */
    const editData = JSON.stringify({
        "email": userProfile.email || "",
        "phone": userProfile.phone || "",
        "username": userProfile.username || "",
        "firstRegion": userProfile.firstRegion || null,
        "realname": userProfile.realname || 'UNKNOWN',
        "secondRegion": userProfile.secondRegion || null,
        "sex": userProfile.sex || 'UNKNOWN',

    })

    const editCompleted = (property) => {
        console.log(userProfile)
        editMyInfo(property, editData)
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }



    // 인증메일전송
    const sendAuthEmail = () => {
        postSendCertificationEmail()
            .then((res) => {
                console.log("이메일 전송")
                console.log(res)
            })
            .catch(error => console.log(error))
    }


    //인증번호확인
    /**
          * @description verifyCertificationEmail RequestDto
          *  * @request 
          * @body authNumData{ certificationNumbers}
          */
    const authNumData = JSON.stringify({
        "certificationNumbers": isAuthNum
    })

    const VerifyAuthNum = () => {
        postVerifyCertificationEmail()
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }



    const settingSex = (sex) => {
        if (sex === '여성') return 'FEMALE';
        if (sex === '남성') return 'MALE';
    }

    const editAuthNum = (e) => {
        const authNum = e.target.value
        return setAuthNum(authNum)
    }



    //userProfile 수정하기
    let editProfileFunction = {
        username: (e) => {
            console.log(e.target.value)
            const username = e.target.value;
            return setUserProfile((state) => ({ ...state, username: username }))

        },
        realname: (e) => {
            console.log(e.target.value)
            const realname = e.target.value;
            return setUserProfile((state) => ({ ...state, realname: realname }))
        },
        email: (e) => {
            console.log(e.target.value)
            const email = e.target.value;
            return setUserProfile((state) => ({ ...state, email: email }))
        },
        phone: (e) => {
            console.log(e.target.value)
            const phone = e.target.value;
            return setUserProfile((state) => ({ ...state, phone: phone }))
        },
        sex: (e) => {
            console.log(e.target.value)
            let sex = e.target.value;
            return setUserProfile((state) => ({ ...state, sex: settingSex(sex) }))
        },
        imgUrl: (e) => {
            console.log(e.target.value)
            return setUserProfile((state) => ({ ...state, imgUrl: imgUrl }))
        },
        defaultImg: (e) => {
            console.log(e.target.value)
            return setUserProfile((state) => ({ ...state, imgUrl: DefaultImg }))
        },
        firstRegion: (e) => {
            console.log(e.target.value)
            const firstRegion = e.target.value
            return (setUserProfile((state) => ({ ...state, firstRegion: firstRegion }))

            )
        },
        secondRegion: (e) => {
            console.log(e.target.value)
            const secondRegion = e.target.value
            return setUserProfile((state) => ({ ...state, secondRegion: secondRegion }))
        },
    }




    //true : 닉네임수정(input) 하는 코드  false :  이름변경(block) 코드
    const [isEditNickNameForm, setEditNickNameForm] = useState(false);

    //true : 이름 수정(input) 하는 코드  false :  이름변경(block) 코드
    const [isEditRealNameForm, setEditRealNameForm] = useState(false);
    //true : 이메일 수정(input) 하는 코드 false :  이메일변경 코드
    const [isEditEmailForm, setEditEmailForm] = useState(false);
    //true: 인증번호 임력 (input) 허는 코드 false :인증취소 
    const [isInputAuthNum, setInputAuthNum] = useState(false);
    //true : 전화번호 수정 (input) false : 전화번호 변경 코드
    const [isEditPhoneForm, setEditPhoneForm] = useState(false);
    //true : 성별 수정 (input) false : 성별 변경 코드
    const [isEditSexForm, setEditSexForm] = useState(false)

    const editNickNameForm = {
        show() {
            setEditNickNameForm(true)
        },
        close() {
            setEditNickNameForm(false)
            editCompleted('닉네임')
        }
    }

    const editRealNameForm = {
        show() {
            setEditRealNameForm(true)
        },
        close() {
            setEditRealNameForm(false)
            editCompleted('이름')
        }
    }
    const editPhoneForm = {
        show() {
            setEditPhoneForm(true)
        },
        close() {
            setEditPhoneForm(false)
            editCompleted('전화번호')
        }
    }
    const editSexForm = {
        show() {
            setEditSexForm(true)
        },
        close() {
            confirmModal.close()
            setEditSexForm(false)
            editCompleted('성별')
        }
    }

    const editEmailForm = {
        show() {
            setEditEmailForm(true)
        },
        close() {
            setEditEmailForm(false)
            inputAuthNumForm.close()
        }
    }

    const inputAuthNumForm = {
        show() {
            setMinutes(parseInt(5))
            setSeconds(parseInt(1))
            sendAuthEmail()
            setInputAuthNum(true)
        },
        close() {
            setInputAuthNum(false)
            setMinutes(parseInt(5))
            setSeconds(parseInt(1))
        }
    }




    //성별 재체크 모달 
    const [isSexConfirmVisible, setSexConfirmVisible] = useState(false)
    const confirmModal = {
        show() {
            setSexConfirmVisible(true)
        },
        close() {
            setSexConfirmVisible(false)
        }
    }



    const [minutes, setMinutes] = useState(parseInt(5));
    const [seconds, setSeconds] = useState(parseInt(1));



    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [isInputAuthNum, minutes, seconds])


    const [isDeleteConfirmVisible, setDeleteConfirmVisible] = useState(false)
    const deleteConfirmModal = {
        show() {
            setDeleteConfirmVisible(true)
        },
        close() {
            setDeleteConfirmVisible(false)
        }
    }

    const DeleteCompleted = () => {
        deleteMyInfo()
            .then((res) => {
                console.log(res)
                console.log('탈퇴완료')
                NotificationPool.api.add({
                    title: "탈퇴완료",
                    content: '성공적으로 탈퇴되었습니다.',
                    status: "error"
                })
                LogoutProcess()


            })

            .catch((err) => console.log('err'))
    }




    return (
        <>
            <ProfileContent
                minutes={minutes}
                seconds={seconds}
                userProfile={userProfile}
                editProfileFunction={editProfileFunction}
                isEditNickNameForm={isEditNickNameForm}
                editNickNameForm={editNickNameForm}
                isEditRealNameForm={isEditRealNameForm}
                editRealNameForm={editRealNameForm}
                isEditEmailForm={isEditEmailForm}
                editEmailForm={editEmailForm}
                isEditSexForm={isEditSexForm}
                editSexForm={editSexForm}
                firstRegionOptions={firstRegionOptions}
                secondRegionOptions={SecondRegionOptions}
                isEditPhoneForm={isEditPhoneForm}
                editPhoneForm={editPhoneForm}
                isInputAuthNum={isInputAuthNum}
                inputAuthNumForm={inputAuthNumForm}
                isAuthNum={isAuthNum}
                editAuthNum={editAuthNum}
                editCompleted={editCompleted}

                isSexConfirmVisible={isSexConfirmVisible}
                confirmModal={confirmModal}

                DeleteCompleted={DeleteCompleted}
                isDeleteConfirmVisible={isDeleteConfirmVisible}
                deleteConfirmModal={deleteConfirmModal}
            ></ProfileContent>
        </>
    )

}

export default ContentContainer;