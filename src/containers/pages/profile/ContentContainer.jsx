/**
 * @author : chaeeun
 * @Date : 2021-02-23 19:59:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-18 18:39:50
 */


import React, {useEffect, useState} from 'react'
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
import editMyEmail from '../../../service/api/put/edit_My_email'

//username = 닉네임
//realname = 실명
const ContentContainer = ({
    username,
    role,
    email,
    emailValidation,
    firstRegion,
    secondRegion,
    imgUrl,
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
        firstRegion: firstRegion,
        secondRegion: secondRegion
    })

    //certificationNumbers 메일인증번호
    const [isAuthNum, setAuthNum] = useState('')


    const regionOptions = ["선호지역", "수성구", "중구", "동구", "서구", "남구", "북구", "달서구"]



    const firstRegionOptions = regionOptions.filter(regions => regions !== userProfile.secondRegion)
    const SecondRegionOptions = regionOptions.filter(regions => regions !== userProfile.firstRegion)

    useEffect(() => {
        console.log(userProfile.email, userProfile.username, userProfile.firstRegion, userProfile.secondRegion, userProfile.verified)
        SET_USER({
            user: {
                username: userProfile.username,
                email: userProfile.email,
                emailValidation: userProfile.verified,
                firstRegion: userProfile.firstRegion,
                secondRegion: userProfile.secondRegion
            }
        })
    }, [SET_USER, userProfile.email, userProfile.username, userProfile.firstRegion, userProfile.secondRegion, userProfile.verified])


    useEffect(() => {

        getMyInfo()
            .then((res) => {
                console.log('userInfo1')
                console.log(res)
                setUserProfile((state) => ({ ...state, ...res }))
                // for (let data in res) {
                // }
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        getCheckValidatedEmail()
            .then((res) => {
                console.log("vaildatedEmail")
                console.log(res)
                setUserProfile((state) => ({ ...state, verified: res.validation }))
            })
    }, [])

    let BodyData = {

        /**
             * @description updateMyInfo RequestDto
             *  * @request 
             * @body editData{email , firstRegion , phone ,
             *   realname , secondRegion, sex , username}
             */
        editData: JSON.stringify({
            "email": userProfile.email || "",
            "phone": userProfile.phone || "",
            "username": userProfile.username || "",
            "firstRegion": firstRegion || null,
            "realname": userProfile.realname || 'UNKNOWN',
            "secondRegion": secondRegion || null,
            "sex": userProfile.sex || 'UNKNOWN',

        }),

        emailData: JSON.stringify({
            "email": userProfile.email
        }),

        //인증번호확인
        /**
              * @description verifyCertificationEmail RequestDto
              *  * @request 
              * @body authNumData{ certificationNumbers}
              */
        authNumData: JSON.stringify({
            "certificationNumbers": `${isAuthNum}`
        }),
    }


    // 수정통신
    const editCompleted = (property) => {
        console.log(userProfile)
        editMyInfo(property, BodyData.editData)
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        editMyInfo("희망지역", BodyData.editData)
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error))
    },[firstRegion, secondRegion] )



    // 인증메일전송 통신
    const sendAuthEmail = () => {
        editMyEmail(userProfile.email, BodyData.emailData)
            .then((res) => {
                console.log(res)
                setInputAuthNum(true)
                console.log(userProfile)
                postSendCertificationEmail()
                    .then((res) => {
                        console.log("이메일 전송")
                        console.log(res)
                    })
                    .catch(error => console.log(error))

            })
            .catch(err => {
                console.log(err)
                console.log('인증메일 전송 실패')
                setMinutes(parseInt(0))
                setSeconds(parseInt(0))
            })

    }


    //인증번화확인 통신
    const VerifyAuthNum = () => {
        console.log(isAuthNum)
        postVerifyCertificationEmail(BodyData.authNumData)
            .then(() => {

                NotificationPool.api.add({
                    title: "이메일 인증이 완료되었습니다!",
                    content: `인증된 이메일 주소는 '${userProfile.email}' 입니다.`,
                    status: "success"
                })

                setAuthNum("")

                editProfileFunction.verified('YES');


                editEmailForm.close()
                setInputAuthNum(false)

            })
            .catch((err) => {
                console.log("인증 번호 에러 ")
                console.log(err)
                setAuthNum("")

            })
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
        verified: (YoN) => {

            const verified = YoN
            return setUserProfile((state) => ({ ...state, verified: verified }))
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
            setInputAuthNum(false)
            setMinutes(parseInt(0))
            setSeconds(parseInt(0))
            //변경 취소시 email 다시받아오기 
            getMyInfo()
                .then((res) => {
                    console.log('userInfo2')
                    console.log(res)
                    setUserProfile((state) => ({ ...state,...res }))
                    // for (let data in res) {
                    // }
                })
                .catch(error => console.log(error))

            getCheckValidatedEmail()
                .then((res) => {
                    console.log("vaildatedEmail")
                    console.log(res)
                    setUserProfile((state) => ({ ...state, verified: res.validation }))
                })
        }
    }

    const inputAuthNumForm = {
        show() {
            setMinutes(parseInt(5))
            setSeconds(parseInt(1))
            sendAuthEmail()

        },
        close() {

            VerifyAuthNum()

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



    const [minutes, setMinutes] = useState(parseInt(0));
    const [seconds, setSeconds] = useState(parseInt(0));



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
    }, [minutes, seconds])





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

            .catch((err) => console.log(err))
    }


    //onChange하면 바로 fetch보내고싶다,, 
    const firstRegionOnchange = (e) => {


        (userProfile.firstRegion === e.target.value) ?
            console.log('fetch')
            :
            editProfileFunction.firstRegion(e)


    }




    return (
        <>
            <ProfileContent
                role={role}
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

                firstRegionOnchange={firstRegionOnchange}


            ></ProfileContent>
        </>
    )

}

export default ContentContainer;