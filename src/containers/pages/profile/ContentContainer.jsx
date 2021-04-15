/**
 * @author : chaeeun
 * @Date : 2021-02-23 19:59:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-15 08:40:21
 */



import React, { useEffect, useState } from 'react'
import ProfileContent from "../../../components/organisms/profile/Content"
import NotificationPool from '../../redux/components/NotificationPool'

import getMyInfo from "../../../service/api/get/get_my_info"
import deleteMyInfo from "../../../service/api/delete/delete_myInfo"
import LogoutProcess from '../../../service/transaction/logout_process'

//프로필 사진
import getMyImg from "../../../service/api/get/get_my_img"
import getMyImgType from "../../../service/api/get/get_my_img_type"
import editMyImgType from "../../../service/api/put/edit_my_img_type"
import postCustomImg from "../../../service/api/post/post_custom_img"
//닉네임
import editMyInfoUserName from "../../../service/api/put/edit_my_info_username"
//이름
import editMyInfoRealName from "../../../service/api/put/edit_my_info_realname"
//전화번호
import editMyInfoPhone from "../../../service/api/put/edit_my_info_phone"
//성별
import editMyInfoSex from "../../../service/api/put/edit_my_info_sex"
//이메일
import getEmailValidation from "../../../service/api/get/get_check_validated_email"
import postSendCertificationEmail from "../../../service/api/post/post_certification_email"
import postVerifyCertificationEmail from "../../../service/api/post/post_verify_certification_email"
import EditMyEmail from '../../../service/api/put/edit_My_email'

//관심지역
import editMyInfoFirstRegion from "../../../service/api/put/edit_my_info_firstRegion"
import editMyInfoSecondRegion from "../../../service/api/put/edit_my_info_secondRegion"

//이메일수신동의여부
import editMyInfoNotification from "../../../service/api/put/edit_my_info_notification"


//username = 닉네임
//realname = 실명


const ContentContainer = ({
    role,
    email,
    firstRegion,
    imgUrl,
    phone,
    realname,
    secondRegion,
    sex,
    username,
    emailValidation,
    SET_USER
}) => {

    //userProfile 
    const [userProfile, setUserProfile] = useState({
        //redux 값
        role: role,
        email: email,
        firstRegion: firstRegion,
        imgUrl: imgUrl,
        isReceivingEmail: "",
        phone: phone,
        realname: realname,
        secondRegion: secondRegion,
        sex: sex,
        username: username,
        emailValidation: emailValidation,
        imgType: "",
    })




    /**
     * @description  유저 정보 초기 세팅   */
    useEffect(() => {
        getMyInfo()
            .then((res) => {
                console.log('userInfo1')
                console.log(res)

                setUserProfile((state) => ({
                    ...state,
                    ...res,
                    firstRegion: res.firstRegion === null ? "" : res.firstRegion,
                    secondRegion: res.secondRegion === null ? "" : res.secondRegion
                }))
            })
            .catch(error => console.log(error))

        getMyImgType()
            .then((res) => {
                console.log("img_type")
                console.log(res)
                setUserProfile((state) => ({ ...state, ...res }))
            })


        getEmailValidation()
            .then((res) => {
                console.log("vaildatedEmail")
                console.log(res)
                setUserProfile((state) => ({ ...state, emailValidation: res.validation }))
            })
    }, [])

    /**
     * @description redux 유저 정보 세팅   */
    useEffect(() => {
        SET_USER({
            user: {
                username: userProfile.username,
                email: userProfile.email,
                emailValidation: userProfile.emailValidation,
                firstRegion: userProfile.firstRegion,
                secondRegion: userProfile.secondRegion,
                imgUrl: userProfile.imgUrl
            }
        })
    }, [userProfile.username, userProfile.email, userProfile.emailValidation, userProfile.firstRegion, userProfile.secondRegion, userProfile.imgUrl, SET_USER])

    /**
   * @description sex value Setting  */
    const settingSex = (sexData) => {
        if (sexData === "여성") return "FEMALE"
        if (sexData === "남성") return "MALE"
        return sexData
    }
    /**
* @description IsReceivingEmail value Setting  */
    const settingIsReceivingEmail = (YoNData) => {
        if (YoNData === "수신") return "YES"
        if (YoNData === "비수신") return "NO"
    }


    /**
     * @description 프로필수정   FUNCTION  */
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
        validation: (YoN) => {
            const validation = YoN
            return setUserProfile((state) => ({ ...state, emailValidation: validation }))
        },
        isReceivingEmail: (e) => {
            console.log(e.target.value)
            let isReceivingEmail = e.target.value
            return setUserProfile((state) => ({ ...state, isReceivingEmail: settingIsReceivingEmail(isReceivingEmail) }))
        }
    }



    /**
    @description 프로필 수정 관련 apis
    @method PUT
    @detail  put apis  */
    let editApis = {
        firstRegion: (firstRegionData) => {
            editMyInfoFirstRegion(JSON.stringify({
                "firstRegion": firstRegionData
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
        secondRegion: (secondRegionData) => {
            editMyInfoSecondRegion(JSON.stringify({
                "secondRegion": secondRegionData
            }))
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },
        sex: () => {
            console.log(userProfile.sex)
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
        isReceivingEmail: () => {
            //TODO  isReceivingEmail 통신 구현    

            editMyInfoNotification(JSON.stringify({
                "notifiable": userProfile.isReceivingEmail
            }))
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },

    }


    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @description 탈퇴하기  CODE  */

    //true : 성별변경 확인 modal false : 성별 변경  modal  닫기
    const [isDeleteConfirmVisible, setDeleteConfirmVisible] = useState(false)

    const confirmDeleteModal = {
        show: () => setDeleteConfirmVisible(true),
        close: () => setDeleteConfirmVisible(false)
    }

    /**
    @description 탈퇴하기  모달 show
    @function buttonOnclick
    @btnValue  탈퇴하기
    @detail  탈퇴하기 confirmModal show*/
    const deleteOnClick = (e) => confirmDeleteModal.show()



    /**
    @description  탈퇴하기재확인모달 확인
    @function buttonOnclick
    @btnValue 확인
    @method DELETE
    @detail  탈퇴하기[DELETE] -> 로그아웃*/
    const okDeleteConfirmOnclick = () => {
        deleteMyInfo()
            .then((res) => {
                console.log(res)
                console.log('탈퇴완료')
                NotificationPool.api.add({
                    title: "탈퇴완료",
                    content: '성공적으로 탈퇴되었습니다.',
                    status: "error"
                })
                confirmDeleteModal.close()
                LogoutProcess()
            })
            .catch((err) => console.log(err))
    }

    /**
    @description  탈퇴하기재확인모달 취소
    @function buttonOnclick
    @btnValue 취소 
    @detail  delete modal 닫기 */
    const cancelDeleteConfirmOnclick = () => confirmDeleteModal.close()



    //////////////////////////////////////////////////////////////////////////////////
    /**
    * @description 프로필사진 관련  CODE  */
    //true : 커스텀이미지 저장하기 + 이미지 올리기  form 열기   false :  커스텀이미지 저장하기 + 이미지 올리기 form 닫기 
    const [isCustomImgPostForm, setCustomImgPostForm] = useState(false);

    const [formDataValue, setFormDataValue] = useState("")

    const customImgPostForm = {
        show: () => setCustomImgPostForm(true),
        close: () => setCustomImgPostForm(false)
    }

    /**
    @description 로컬에서 선택한 이미지를 업로드하기 
    @function FileBoxOnclick
    @btnValue 이미지 업로드
    @detail  업로드할 사진 선택 -> set formData  -> 미리보기 보여주기  */
    const uploadImgOnclick = (e) => {
        const imgFile = e.target.files[0]
        const imgFormData = new FormData();
        imgFormData.append('customImg', imgFile);
        console.log(imgFormData.has('customImg'));
        setFormDataValue(imgFormData)
        let reader = new FileReader();
        reader.readAsDataURL(imgFile);
        reader.onload = () => {
            setUserProfile((state) => ({ ...state, imgUrl: reader.result }))
            console.log(imgUrl)

            if (isCustomImgPostForm === false)
                return customImgPostForm.show()

        }
    }

    /**
    @description  업로드한 이미지를 저장하기
    @function buttonOnclick
    @btnValue 사진 저장
    @detail  type custom 으로 변경[PUT] ->  img [POST] 하기  */
    const postImgOnclick = () => {
        console.log(formDataValue.has('customImg'))
        editMyImgType(JSON.stringify({
            "imgType": "CUSTOM"
        }))
            .then(async (res) => {
                console.log(res)
                setUserProfile((state) => ({ ...state, imgType: 'CUSTOM' }))
                await postCustomImg(formDataValue)
                    .then((res) => {
                        console.log(res)
                        if (isCustomImgPostForm === true)
                            return customImgPostForm.close()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch(async (err) => {
                console.log(err)
                if (isCustomImgPostForm === true)
                    return customImgPostForm.close()
            })
    }



    /**
    @description 카카오톡 프로필 사진으로  프로필 사진 변경
    @function buttonOnclick
    @btnValue 카카오톡 사진으로
    @detail  type kakao 으로 변경 [PUT]->  img [GET] 하기(바로 카카오톡 사진으로 업뎃해주기 위해서)  */
    const kakaoImgOnclick = () => {
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
                        NotificationPool.api.add({
                            title: "프로필 사진 수정 완료.",
                            content: '카카오톡 사진으로 프로필사진이 변경되었습니다.',
                            status: "success"
                        })
                        customImgPostForm.close()
                    })
            })
            .catch((err) => { console.log(err) })
    }

    //////////////////////////////////////////////////////////////////////////////////
    /**
    @description 닉네임 관련  CODE  */

    //true : 닉네임 변경하는 form   false :  닉네임 변경하는 form 닫기 
    const [isEditNickNameForm, setEditNickNameForm] = useState(false);

    //닉네임 form handler
    const editNickNameForm = {
        show: () => setEditNickNameForm(true),
        close: () => setEditNickNameForm(false)
    }

    /**
    @description 닉네임을 변경하는 form open 
    @function buttonOnclick
    @btnValue  닉네임 변경
    @detail  닉네임변경 form 열기 */
    const editNicknameOnclick = () => editNickNameForm.show()


    /**
    @description  닉네임 변경후 저장하기
    @function buttonOnclick
    @btnValue 닉네임 저장
    @detail  닉네임 [POST] 하기  -> form close 하기*/
    const postNicknameOnclick = () => {
        editApis.username()
        editNickNameForm.close()
    }


    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @description 이름 관련  CODE  */

    //true : 이름 변경하는 form   false :  이름 변경하는 form 닫기 
    const [isEditRealNameForm, setEditRealNameForm] = useState(false);

    //이름 form handler
    const editRealNameForm = {
        show: () => setEditRealNameForm(true),
        close: () => setEditRealNameForm(false)
    }

    /**
    @description 이름 변경하는 form open 
    @function buttonOnclick
    @btnValue  이름 변경
    @detail  이름변경 form 열기 */
    const editRealNameOnclick = () => editRealNameForm.show()


    /**
    @description  이름 변경후 저장하기
    @function buttonOnclick
    @btnValue 이름 저장
    @detail  이름 [POST] 하기  -> form close 하기*/
    const postRealNameOnclick = () => {
        editApis.realname()
        editRealNameForm.close()
    }


    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @description 전화번호 관련  CODE  */

    //true : 전화번호 변경하는 form   false :  전화번호 변경하는 form 닫기 
    const [isEditPhoneForm, setEditPhoneForm] = useState(false);

    //전화번호 form handler
    const editPhoneForm = {
        show: () => setEditPhoneForm(true),
        close: () => setEditPhoneForm(false)
    }

    /**
    @description 전화번호 변경하는 form open 
    @function buttonOnclick
    @btnValue  전화번호 변경
     @detail  전화번호변경 form 열기 */
    const editPhoneOnclick = () => editPhoneForm.show()


    /**
    @description  전화번호 변경후 저장하기
    @function buttonOnclick
    @btnValue 전화번호 저장
    @detail  전화번호 [POST] 하기  -> form close 하기*/
    const postPhoneOnclick = () => {
        editApis.phone()
        editPhoneForm.close()
    }


    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @description 성별 관련  CODE  */

    //true : 성별 변경하는 form   false :  성별 변경하는 form 닫기 
    const [isEditSexForm, setEditSexForm] = useState(false);
    //true : 성별변경 확인 modal false : 성별 변경  modal  닫기
    const [isSexConfirmVisible, setSexConfirmVisible] = useState(false)

    //성별 form handler
    const editSexForm = {
        show: () => setEditSexForm(true),
        close: () => setEditSexForm(false)
    }

    const confirmSexModal = {
        show: () => setSexConfirmVisible(true),
        close: () => setSexConfirmVisible(false)
    }
    /**
    @description 성별 변경하는 form open 
    @function buttonOnclick
    @btnValue  성별 기입
     @detail  성별변경 form 열기 */
    const editSexOnclick = () => editSexForm.show()

    /**
    @description  성별 저장할지 한번더 묻는 modal Show
    @function buttonOnclick
    @btnValue 성별저장
    @detail   sex modal 열기 */
    const postSexOnclick = () => {
        confirmSexModal.show()
    }

    /**
    @description  성별 선택후 저장
    @function buttonOnclick
    @btnValue 확인
    @detail  성별  [POST] 하기 -> sex modal 닫기 -> sex form 닫기*/
    const okSexConfirmOnclick = () => {
        editApis.sex()
        confirmSexModal.close()
        editSexForm.close()
    }

    /**
    @description 모달닫기
    @function buttonOnclick
    @btnValue 취소 
    @detail  sex modal 닫기 */
    const cancelSexConfirmOnclick = () => {
        confirmSexModal.close()
    }


    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @description 이메일 관련  CODE  */

    //true : 이메일 변경하는 form  열기  false :  이메일 변경하는 form 닫기 
    const [isEditEmailForm, setEditEmailForm] = useState(false);
    //true : 인증번호 입력하는 form  열기  false :  인증번호 입력하는 form 닫기 
    const [isInputAuthNumForm, setInputAuthNumForm] = useState(false);

    //인증번호 
    const [authNum, setAuthNum] = useState("")
    const editAuthNum = (e) => setAuthNum(e.target.value)


    // 인증 시간 세팅 
    const [minutes, setMinutes] = useState(parseInt(0));
    const [seconds, setSeconds] = useState(parseInt(0));

    //인증 시간 countdown
    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0)
                    return clearInterval(countdown);
                setMinutes(parseInt(minutes) - 1);
                setSeconds(59);
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds])




    //이메일 수정 form handler
    const editEmailForm = {
        show: () => setEditEmailForm(true),
        close: () => setEditEmailForm(false)
    }

    //인증번호 form handler
    const inputAuthNumForm = {
        show: () => setInputAuthNumForm(true),
        close: () => setInputAuthNumForm(false)
    }

    /**
    @description FORM{이메일 수정 하는 input + 인증번호 발송}
    @function buttonOnclick
    @btnValue  인증하기
     @detail  이메일 수정 form 열기 */
    const authEmailOnclick = () => editEmailForm.show()

    /**
    @description  이메일  관련 FORM 닫기
    @function buttonOnclick
    @btnValue 인증 취소
    @detail   이메일 수정 form 닫기 -> 이메일 인증 form 닫기 -> 인증제한시간 (0분) 
                    -> [GET] 내정보 받아와서 email 받아오기 (email 재세팅) -> 인증됨 NO로 setUserProfile  */
    const authEmailCancelOnclick = () => {

        getMyInfo()
            .then((res) => {
                console.log(res)
                setUserProfile((state) => ({ ...state, email: res.email }))
            })
        editEmailForm.close()
        inputAuthNumForm.close()
        setMinutes(parseInt(0))
        setSeconds(parseInt(0))
    }


    //이메일 수정 & 인증 번호 전송 통신
    /**
    @description  이메일 수정통신 &인증 번호 전송 통신 
    @method POST 
    @resOK  ok :  이메일 인증 Form 열기 -> 이메일 전송 [POST]
    @resERR err :  인증시간 초기화(0분) */
    const postAuthNum = () => {
        EditMyEmail(email, JSON.stringify({
            "email": email
        }))
            .then((res) => {
                inputAuthNumForm.show()
                postSendCertificationEmail()
                    .then((res) => {
                        console.log("이메일전송")
                        console.log(res)
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => {
                console.log(err)
                console.log("인증메일 전송 실패")
                setMinutes(parseInt(0))
                setSeconds(parseInt(0))
            })


    }


    /**
    @description  이메일 수정완료 후 인증번호 발송 / 인증번호 재발송 
    @function buttonOnclick
    @btnValue 인증번호발송 / 재발송
    @detail  인증시간설정(5분) -> 메일 수정 [POST](성공시 인증번호입력 form 열기)-> 인증메일 전송 [POST] */
    const postAuthNumOnclick = () => {
        setMinutes(parseInt(5))
        postAuthNum()
        setAuthNum("")
    }

    /**
    @description  인증 번호 확인하는 통신
    @method POST
    @resOK  ok :  인증완료 ->인증됨 YES -> 인증번호 초기화
    @resERR err :  인증번호 초기화 */
    const postCheckAuthNum = () => {
        console.log(authNum)
        postVerifyCertificationEmail(JSON.stringify({
            "certificationNumbers": authNum
        }))
            .then((res) => {

                NotificationPool.api.add({
                    title: "이메일 인증이 완료되었습니다!",
                    content: `인증된 이메일 주소는 '${userProfile.email}' 입니다.`,
                    status: "success"
                })
                editProfileFunction.validation("YES");

                setAuthNum("");
                editEmailForm.close();
                inputAuthNumForm.close();
                setMinutes(parseInt(0))
                setSeconds(parseInt(0))

            })
            .catch((err) => {
                console.log("인증번호 에러")
                console.log(err)
                setAuthNum("")
            })

    }

    /**
    @description  인증번호 맞는지 확인
    @function buttonOnclick
    @btnValue 인증번호확인
    @detail   인증번호확인 [POST] -> 인증됨 YES로 setUserProfile -> 인증번호 입력 form 닫기
                    -> 이메일 수정 form 닫기 ->이메일 인증번호 set false */
    const checkAuthNumOnclick = () => {
        postCheckAuthNum()
        setAuthNum("")

    }


    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @description 관심지역 관련  CODE  */

    const regionOptions = ["선호지역", "수성구", "중구", "동구", "서구", "남구", "북구", "달서구"]



    const firstRegionOptions = regionOptions.filter(regions => regions !== userProfile.secondRegion)
    const SecondRegionOptions = regionOptions.filter(regions => regions !== userProfile.firstRegion)

    /**
    @description  1순위 관심지역 설정 & 수정
    @function onChange
      @detail  초기값 설정 : firstRegion -> [PUT] 1순위 관심지역 수정  */
    const firstRegionOnchange = (e) => {
        editProfileFunction.firstRegion(e)
        editApis.firstRegion(e.target.value)
    }



    /**
    @description  2순위 관심지역 설정 & 수정
    @function onChange
      @detail  초기값 설정 : secondRegion -> [PUT] 2순위 관심지역 수정  */
    const secondRegionOnchange = (e) => {
        editProfileFunction.secondRegion(e)
        editApis.secondRegion(e.target.value)
    }



    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @description 홍보성이메일 수신 동의 여부 관련  CODE  */


    /**
    @description 수신여부 선택후 저장
    @function radioBoxOnClick
    @detail  수신여부 수정 후 -> 수신여부 [PUT]*/
    const isReceivingEmailOnclick = (e) => {
        editProfileFunction.isReceivingEmail(e)
        editApis.isReceivingEmail()

    }




    return (
        <>
            <ProfileContent
                userProfile={userProfile} // 유저정보
                editProfileFunction={editProfileFunction} // userProfile 수정함수들

                isDeleteConfirmVisible={isDeleteConfirmVisible} // 탈퇴하기 modal 
                confirmDeleteModal={confirmDeleteModal} // 탈퇴하기 modal handler
                deleteOnClick={deleteOnClick}// 탈퇴하기  모달 show
                okDeleteConfirmOnclick={okDeleteConfirmOnclick} //  탈퇴하기재확인모달 확인
                cancelDeleteConfirmOnclick={cancelDeleteConfirmOnclick} //탈퇴하기재확인모달 확인

                isCustomImgPostForm={isCustomImgPostForm} //  //true : 커스텀이미지 저장하기 + 이미지 올리기  form 열기   false :  커스텀이미지 저장하기 + 이미지 올리기 form 닫기 
                uploadImgOnclick={uploadImgOnclick} // 로컬에서 선택한 이미지를 업로드하기 
                postImgOnclick={postImgOnclick} //업로드한 이미지를 저장하기
                kakaoImgOnclick={kakaoImgOnclick} //카카오톡 프로필 사진으로  프로필 사진 변경

                isEditNickNameForm={isEditNickNameForm}//true : 닉네임 변경하는 form   false :  닉네임 변경하는 form 닫기
                editNicknameOnclick={editNicknameOnclick} // 닉네임을 변경하는 form open 
                postNicknameOnclick={postNicknameOnclick} //닉네임 변경후 저장하기

                isEditRealNameForm={isEditRealNameForm} //true : 이름 변경하는 form   false :  이름 변경하는 form 닫기 
                editRealNameOnclick={editRealNameOnclick} //이름 변경하는 form open 
                postRealNameOnclick={postRealNameOnclick} //이름 변경후 저장하기

                isEditPhoneForm={isEditPhoneForm}    //true : 전화번호 변경하는 form   false :  전화번호 변경하는 form 닫기 
                editPhoneOnclick={editPhoneOnclick}  //전화번호 변경하는 form open 
                postPhoneOnclick={postPhoneOnclick} //전화번호 변경후 저장하기

                isEditSexForm={isEditSexForm} ////true : 성별 변경하는 form   false :  성별 변경하는 form 닫기
                isSexConfirmVisible={isSexConfirmVisible} //true : 성별변경 확인 modal false : 성별 변경  modal  닫기
                editSexOnclick={editSexOnclick} //성별 변경하는 form open 
                postSexOnclick={postSexOnclick} //성별 저장할지 한번더 묻는 modal Show
                okSexConfirmOnclick={okSexConfirmOnclick}//성별 선택후 저장(모달 ok)
                cancelSexConfirmOnclick={cancelSexConfirmOnclick}//(모달 close)
                confirmSexModal={confirmSexModal} // sex모달 handler

                isEditEmailForm={isEditEmailForm}  //true : 이메일 변경하는 form  열기  false :  이메일 변경하는 form 닫기 
                isInputAuthNumForm={isInputAuthNumForm} //    //true : 인증번호 입력하는 form  열기  false :  인증번호 입력하는 form 닫기 
                authEmailOnclick={authEmailOnclick} //FORM{이메일 수정 하는 input + 인증번호 발송}
                authEmailCancelOnclick={authEmailCancelOnclick} // 이메일  관련 FORM 닫기
                editAuthNum={editAuthNum} // 인증번호 입력
                postAuthNumOnclick={postAuthNumOnclick}  //이메일 수정완료 후 인증번호 발송 / 인증번호 재발송 
                checkAuthNumOnclick={checkAuthNumOnclick}//인증번호 맞는지 확인
                minutes={minutes}
                seconds={seconds}
                authNum={authNum} // 인증번호

                firstRegionOnchange={firstRegionOnchange} //1순위 관심지역 설정 & 수정
                secondRegionOnchange={secondRegionOnchange} //2순위 관심지역 설정 & 수정
                firstRegionOptions={firstRegionOptions}
                SecondRegionOptions={SecondRegionOptions}

                isReceivingEmailOnclick={isReceivingEmailOnclick} //수신여부 선택후 저장
            ></ProfileContent>
        </>
    )

}

export default ContentContainer;