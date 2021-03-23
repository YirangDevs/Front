/**
 * @author : chaeeun
 * @Date : 2021-02-23 19:59:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-23 20:17:27
 */


import React, { useEffect, useState } from 'react'
import ProfileContent from "../../../components/organisms/profiletest/Content"
import NotificationPool from '../../redux/components/NotificationPool'

//유저관련
import getMyInfo from "../../../service/api/get/get_my_info"
import deleteMyInfo from "../../../service/api/delete/delete_myInfo"
import LogoutProcess from '../../../service/transaction/logout_process'

//프로필 사진
import DefaultImg from "../../../img/ProfileDefaultImg.png"
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
import editMyInfo from "../../../service/api/put/edit_My_info"
import editMyInfoFirstRegion from "../../../service/api/put/edit_my_info_firstRegion"
import editMyInfoSecondRegion from "../../../service/api/put/edit_my_info_sex"
import { MdPhoneBluetoothSpeaker } from 'react-icons/md'



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

    //userValue 
    const [userValue, setUserValue] = useState({
        //redux 값
        role: { role },
        //GET userInfo
        email: "",
        firstRegion: "",
        imgUrl: "",
        isReceivingEmail: "",
        phone: "",
        realname: "",
        secondRegion: '',
        sex: "",
        username: "",
        //GET EmailValidation
        validation: "",
        // GET MyImgType
        imgType: "",

    })
    const { role, email, firstRegion, imgUrl, isReceivingEmail, phone, realname, secondRegion,
        sex, username, validation, imgType, } = userValue;


    /**
     * @description  유저 정보 초기 세팅   */
    useEffect(() => {
        getMyInfo()
            .then((res) => {
                console.log('userInfo')
                console.log(res)
                setUserValue((state) => ({ ...state, ...res }))
            })
            .catch(error => console.log(error))

        getMyImgType()
            .then((res) => {
                console.log("img_type")
                console.log(res)
                setUserValue((state) => ({ ...state, ...res }))
            })

        getEmailValidation()
            .then((res) => {
                console.log("vaildatedEmail")
                console.log(res)
                setUserValue((state) => ({ ...state, ...res }))
            })
    }, [])

    /**
     * @description redux 유저 정보 세팅   */
    useEffect(() => {
        SET_USER({
            user: {
                username: username,
                email: email,
                emailValidation: validation,
                firstRegion: firstRegion,
                secondRegion: secondRegion
            }
        })
    }, [username, email, validation, firstRegion, secondRegion])




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



    /**
    @description 프로필 수정 관련 apis
    @function editApis
    @detail  put apis  */
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
        secondRegion: () => {
            editMyInfoSecondRegion(JSON.stringify({
                "secondRegion": userProfile.secondRegion
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

    }




    //////////////////////////////////////////////////////////////////////////////////
    /**
 * @description 프로필사진 관련  CODE  */


    const [formDataValue, setFormDataValue] = useState("")


    /**
    @description 로컬에서 선택한 이미지를 업로드하기 
    @function buttonOnclick
    @btnValue 이미지 업로드
    @detail  업로드할 사진 선택 -> set formData  -> 미리보기 보여주기  */

    const uploadImgOnclick = (e) => {
        const imgFile = e.target.files[0]
        const imgFormData = new FormData();
        imgFormData.append('customImg', imgFile);
        console.log(imgFormData.has('customImg'));
        setFormDataValue(imgFormData)

        let reader = new FileReader();
        reader.onload = () => {
            setUserValue((state) => ({ ...state, imgUrl: reader.result }))
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
                setUserValue((state) => ({ ...state, imgType: 'CUSTOM' }))

                await postCustomImg(formDataValue)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch(async (err) => {
                console.log(err)
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
                setUserValue((state) => ({ ...state, imgType: 'KAKAO' }))
                getMyImg()
                    .then((res) => {
                        console.log(res)
                        setUserValue((state) => ({ ...state, imgUrl: res.imgUrl }))
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
    const OkSexConfirmOnclick = () => {
        editApis.sex()
        confirmSexModal.close()
        editSexForm.close()
    }

    /**
    @description  성별 저장할지 한번더 묻는 modal Show
    @function buttonOnclick
    @btnValue 취소 
    @detail  sex modal 닫기 */
    const CancelSexConfirmOnclick = () => {
        confirmSexModal.close()
    }


    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @description 이메일 관련  CODE  */

    //true : 이메일 변경하는 form  열기  false :  이메일 변경하는 form 닫기 
    const [isEditEmailForm, setEditEmailForm] = useState(false);
    //true : 인증번호 입력하는 form  열기  false :  인증번호 입력하는 form 닫기 
    const [isInputAuthNumForm, setInputAuthNumForm] = useState(false);

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
     @detail  이메일 변경 form 열기 */
    const editEmailOnclick = () => editEmailForm.show()

    /**
    @description  이메일  관련 FORM 닫기
    @function buttonOnclick
    @btnValue 인증 취소
    @detail   이메일 변경 form 닫기 -> 이메일 인증 form 닫기 -> 시간초기화  */
    const postSexOnclick = () => {
        confirmSexModal.show()
    }

    /**
    @description  성별 선택후 저장
    @function buttonOnclick
    @btnValue 인증번호발송
    @detail  시간초기화 -> 인증메일 전송 api  */
    const OkSexConfirmOnclick = () => {
        editApis.sex()
        confirmSexModal.close()
        editSexForm.close()
    }

    /**
    @description  성별 저장할지 한번더 묻는 modal Show
    @function buttonOnclick
    @btnValue 취소 
    @detail  sex modal 닫기 */
    const CancelSexConfirmOnclick = () => {
        confirmSexModal.close()
    }
























    return (
        <>
            <ProfileContent

            ></ProfileContent>
        </>
    )

}

export default ContentContainer;