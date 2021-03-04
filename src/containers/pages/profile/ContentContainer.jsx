/**
 * @author : chaeeun
 * @Date : 2021-02-23 19:59:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-04 03:43:48
 */


import React, { useEffect, useState } from 'react'
import ProfileContent from "../../../components/organisms/profile/Content/index"
import getMyInfo from "../../../service/api/get/get_my_info"
import DefaultImg from "../../../img/ProfileDefaultImg.png"

//username = 닉네임
//realname = 실명
const ContentContainer = ({
    username,
    imgUrl,
    role,
    email,
}) => {


    const [listTotalNum, setListTotalNum] = useState("0"); // 전체 리스트 갯수

    const [userProfile, setUserProfile] = useState({
        username: "",
        realname: "",
        phone: "",
        email: "",
        checkedEmail: "",
        sex: "",
        imgUrl: "",
        role: "",
        firstRegion: "중구",
        secondRegion: '수성구'
    })



    const regionOptions = ["수성구", "중구", "동구", "서구", "남구", "북구", "달서구"]

    const firstRegionOptions = regionOptions.filter(regions => regions !== userProfile.secondRegion)
    const SecondRegionOptions = regionOptions.filter(regions => regions !== userProfile.firstRegion)

    useEffect(() => {

        getMyInfo()
            .then((res) => {
                console.log(res)
                for (let data in res) {
                    setUserProfile((state) => ({ ...state, [data]: res[data] }))
                }
            })
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
            checkedEmail: email
        }))
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

    //true : 이름 수정(input) 하는 코드  false :  이름변경(block) 코드
    const [isEditNameForm, setEditNameForm] = useState(false);
    //true : 이메일 수정(input) 하는 코드 false :  이메일변경 코드
    const [isEditEmailForm, setEditEmailForm] = useState(false);

    const editNameForm = {
        show() {
            setEditNameForm(true)
        },
        close() {
            setEditNameForm(false)
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


    return (
        <>
            <ProfileContent
                userProfile={userProfile}
                regionOptions={regionOptions}
                editProfileFunction={editProfileFunction}
                isEditNameForm={isEditNameForm}
                editNameForm={editNameForm}
                isEditEmailForm={isEditEmailForm}
                editEmailForm={editEmailForm}
                firstRegionOptions={firstRegionOptions}
                secondRegionOptions={SecondRegionOptions}
            ></ProfileContent>
        </>
    )

}

export default ContentContainer;