/**
 * @author : chaeeun
 * @Date : 2021-02-23 19:59:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-07 05:27:26
 */


import React, { useEffect, useState } from 'react'
import ProfileContent from "../../../components/organisms/profile/Content/index"
import getMyInfo from "../../../service/api/get/get_my_info"
import DefaultImg from "../../../img/ProfileDefaultImg.png"
import editMyInfo from "../../../service/api/put/edit_My_info"

//username = 닉네임
//realname = 실명
const ContentContainer = ({
    username,
    imgUrl,
    role,
    email,
}) => {


    const [userProfile, setUserProfile] = useState({
        username: "",
        realname: "",
        phone: "",
        email: "",
        checkedEmail: "",
        sex: "",
        imgUrl: "",
        role: "",
        firstRegion: "",
        secondRegion: ''
    })



    const regionOptions = ["선호지역", "수성구", "중구", "동구", "서구", "남구", "북구", "달서구"]

    const firstRegionOptions = regionOptions.filter(regions => regions !== userProfile.secondRegion)
    const SecondRegionOptions = regionOptions.filter(regions => regions !== userProfile.firstRegion)



    useEffect(() => {

        getMyInfo()
            .then((res) => {
                console.log('1')
                console.log(res)
                for (let data in res) {
                    setUserProfile((state) => ({ ...state, [data]: res[data] }))
                }
            })
            .catch(error => console.log(error))
        getProps()
    }, [])


    //userProfile에  정보넣기 
    const getProps = () => {
        console.log(role)
        setUserProfile((state) => ({
            ...state,
            username: username,
            imgUrl: imgUrl,
            role: role,
            checkedEmail: email,
        }))
    }


    const editData = JSON.stringify({
        "email": "naver@naver.com",
        "phone": userProfile.phone || "",
        "username": userProfile.username || ""

    })

    const editCompleted = (property) => {
        editMyInfo(property, editData)
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }


    //userProfile 수정하기
    let editProfileFunction = {
        username: (e) => {
            console.log(e.target.value)
            const property = '닉네임';
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
            const sex = e.target.value;
            return setUserProfile((state) => ({ ...state, sex: sex }))
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
            return setUserProfile((state) => ({ ...state, firstRegion: firstRegion }))
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
        }
    }

    const editEmailForm = {
        show() {
            setEditEmailForm(true)
        },
        close() {
            setEditEmailForm(false)
        }
    }

    const inputAuthNumForm = {
        show() {
            setInputAuthNum(true)
        },
        close() {
            setInputAuthNum(false)
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

    const [isAuthNum, setAuthNum] = useState('')

    const editAuthNum = (e) => {
        const authNum = e.target.value
        return setAuthNum((state) => ({ ...state, authNum }))
    }
    return (
        <>
            <ProfileContent
                userProfile={userProfile}
                editProfileFunction={editProfileFunction}
                isEditNickNameForm={isEditNickNameForm}
                editNickNameForm={editNickNameForm}
                isEditRealNameForm={isEditRealNameForm}
                editRealNameForm={editRealNameForm}
                isEditEmailForm={isEditEmailForm}
                editEmailForm={editEmailForm}
                firstRegionOptions={firstRegionOptions}
                secondRegionOptions={SecondRegionOptions}
                isEditPhoneForm={isEditPhoneForm}
                editPhoneForm={editPhoneForm}
                isInputAuthNum={isInputAuthNum}
                inputAuthNumForm={inputAuthNumForm}
                isAuthNum={isAuthNum}
                editAuthNum={editAuthNum}
                editCompleted={editCompleted}
            ></ProfileContent>
        </>
    )

}

export default ContentContainer;