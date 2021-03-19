/**
 * @author : chaeeun
 * @Date : 2021-02-23 19:59:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-20 06:47:08
 */


import React, { useEffect, useState } from 'react'
import ProfileContent from "../../redux/pages/profile/Content"
import getMyInfo from "../../../service/api/get/get_my_info"
import DefaultImg from "../../../img/ProfileDefaultImg.png"

import getCheckValidatedEmail from "../../../service/api/get/get_check_validated_email"
import postSendCertificationEmail from "../../../service/api/post/post_certification_email"
import postVerifyCertificationEmail from "../../../service/api/post/post_verify_certification_email"
import deleteMyInfo from "../../../service/api/delete/delete_myInfo"
import NotificationPool from '../../redux/components/NotificationPool'
import LogoutProcess from '../../../service/transaction/logout_process'
import EditMyEmail from '../../../service/api/put/edit_My_email'
import GetMyImgType from "../../../service/api/get/get_my_img_type"

import editMyInfo from "../../../service/api/put/edit_My_info"
import editMyInfoUserName from "../../../service/api/put/edit_my_info_username"
import editMyInfoFirstRegion from "../../../service/api/put/edit_my_info_firstRegion"
import editMyInfoPhone from "../../../service/api/put/edit_my_info_phone"
import editMyInfoSecondRegion from "../../../service/api/put/edit_my_info_sex"
import editMyInfoSex from "../../../service/api/put/edit_my_info_sex"
import editMyInfoRealName from "../../../service/api/put/edit_my_info_realname"

import editMyImgType from "../../../service/api/put/edit_my_img_type"
import getMyImg from "../../../service/api/get/get_my_img"
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
        firstRegion: "",
        secondRegion: '',
        imgType: "",
        isReceivingEmail: ""
    })

    //certificationNumbers 메일인증번호
    const [isAuthNum, setAuthNum] = useState('')


    const regionOptions = ["선호지역", "수성구", "중구", "동구", "서구", "남구", "북구", "달서구"]



    const firstRegionOptions = regionOptions.filter(regions => regions !== userProfile.secondRegion)
    const SecondRegionOptions = regionOptions.filter(regions => regions !== userProfile.firstRegion)


    useEffect(() => {
        SET_USER({
            user: {
                username: userProfile.username,
                email: userProfile.email,
                emailValidation: userProfile.verified,
                firstRegion: userProfile.firstRegion,
                secondRegion: userProfile.secondRegion
            }
        })
    }, [userProfile.username, userProfile.email, userProfile.verified, userProfile.firstRegion, userProfile.secondRegion])


    useEffect(() => {

        getMyInfo()
            .then((res) => {
                console.log('userInfo')
                console.log(res)

                setUserProfile((state) => ({ ...state, ...res }))

            })
            .catch(error => console.log(error))

        GetMyImgType()
            .then((res) => {
                console.log("img_type")
                console.log(res)
                setUserProfile((state) => ({ ...state, ...res }))
            })
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



        editMyInfo(property, BodyData.editData)
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }


    let editApis = {
        firstRegion: () => {
            editMyInfoFirstRegion(JSON.stringify({
                "firstRegion": userProfile.firstRegion
            }))
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },

        phone: () => {
            editMyInfoPhone(JSON.stringify({
                "phone": userProfile.phone
            }))
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },



        realname: () => {
            editMyInfoRealName(JSON.stringify({
                "realname": userProfile.realname
            }))
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },
        SecondRegion: () => {
            editMyInfoSecondRegion(JSON.stringify({
                "secondRegion": userProfile.secondRegion
            }))
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },
        Sex: () => {
            editMyInfoSex(JSON.stringify({
                "sex": userProfile.sex
            }))
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },
        username: () => {
            editMyInfoUserName(JSON.stringify({
                "username": userProfile.username
            }))
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },

    }




    // 인증메일전송 통신
    const sendAuthEmail = () => {
        EditMyEmail(userProfile.email, BodyData.emailData)
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
            console.log(e.target.files[0])
            return setUserProfile((state) => ({ ...state, imgUrl: e.target.files[0] }))
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
            editApis.username()
        }
    }

    const editRealNameForm = {
        show() {
            setEditRealNameForm(true)
        },
        close() {
            setEditRealNameForm(false)
            editApis.realname()
        }
    }

    const editPhoneForm = {
        show() {
            setEditPhoneForm(true)
        },
        close() {
            setEditPhoneForm(false)
            editApis.phone()
        }
    }

    const editSexForm = {
        show() {
            setEditSexForm(true)
        },
        close() {
            confirmModal.close()
            setEditSexForm(false)
            editApis.sex()
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
                    console.log('userInfo')
                    console.log(res)
                    for (let data in res) {
                        setUserProfile((state) => ({ ...state, [data]: res[data] }))
                    }
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





    // ///// 이미지 업로드 ////////////////



    const selectImageOnclick = (e) => {

        let imgFile = e.target.files[0]

        let reader = new FileReader();
        reader.readAsDataURL(imgFile);
        reader.onload = () => {
            setUserProfile((state) => ({ ...state, imgUrl: reader.result }))
        }




    }
    const uploadImageOnclick = () => {
        editMyImgType(JSON.stringify({
            "imgType": "CUSTOM"
        }))
            .then((res) => {
                console.log(res)

                setUserProfile((state) => ({ ...state, imgType: 'CUSTOM' }))
            })
            .catch((err) => {
                console.log(err)

            })

    }
    const kakaoImageOnclick = () => {
        editMyImgType(JSON.stringify({
            "imgType": "KAKAO"
        }))
            .then((res) => {
                console.log(res)
                setUserProfile((state) => ({ ...state, imgType: 'KAKAO' }))
                getMyImg()
                    .then((res) => {
                        console.log(res)
                        setUserProfile((state) => ({ ...state, imgUrl: res.imgUrl }))
                    })
            })

            .catch((err) => { console.log(err) })
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


                selectImageOnclick={selectImageOnclick}
                uploadImageOnclick={uploadImageOnclick}
                kakaoImageOnclick={kakaoImageOnclick}


            ></ProfileContent>
        </>
    )

}

export default ContentContainer;