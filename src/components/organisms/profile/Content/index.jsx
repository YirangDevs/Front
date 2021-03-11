/*
 * @Author: chaeeun 
 * @Date: 2021-02-24 16:20:36 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-25 10:43:15
 */


import React from "react"
//import MypageNav from "../../../molecules/MypageNav"


const ProfileContent = ({
    //redux
    username,
    email,
    role,
    //contentContainer
    userProfile,
    editFunction
}) => {

    return (
        <>
            <div>{userProfile.userName}</div>
        </>
    )
}

export default ProfileContent;