/**
 * @author : chaeeun
 * @Date : 2021-02-23 19:59:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-25 10:43:41
 */


import React, { useState } from 'react'
import ProfileContent from "../../redux/components/Profile"

//username = 닉네임
//realname = 실명
const ContentContainer = () => {


    const [listTotalNum, setListTotalNum] = useState("0"); // 전체 리스트 갯수

    const [userProfile, setUserProfile] = useState({
        userName: "",
        realName: "",
        phoneNumber: "",
        sex: "",
        imgUrl: "",
        firstRegion: "",
        secondRegion: "",
    })

    //userProfile 수정하기
    let editProfileFunction = {
        userName: (e) => {
            console.log(e.target.value)
            const userName = e.target.value;
            return setUserProfile((state) => ({ ...state, userName: userName }))
        },
        realName: (e) => {
            console.log(e.target.value)
            const realName = e.target.value;
            return setUserProfile((state) => ({ ...state, realName: realName }))
        },
        phoneNumber: (e) => {
            console.log(e.target.value)
            const phoneNumber = e.target.value;
            return setUserProfile((state) => ({ ...state, phoneNumber: phoneNumber }))
        },
        sex: (e) => {
            console.log(e.target.value)
            const sex = e.target.value;
            return setUserProfile((state) => ({ ...state, sex: sex }))
        },
        imgUrl: (e) => {
            console.log(e.target.value)
            const imgUrl = e.target.value;
            return setUserProfile((state) => ({ ...state, imgUrl: imgUrl }))
        },
        firstRegion: (e) => {
            console.log(e.target.value)
            const firstRegion = e.target.value;
            return setUserProfile((state) => ({ ...state, firstRegion: firstRegion }))
        },
        secondRegion: (e) => {
            console.log(e.target.value)
            const secondRegion = e.target.value;
            return setUserProfile((state) => ({ ...state, secondRegion: secondRegion }))
        },
    }

    return (
        <>
            <ProfileContent
                userProfile={userProfile}
                editFunction={editProfileFunction}

            ></ProfileContent>
        </>
    )

}

export default ContentContainer;