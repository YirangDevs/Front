import React from "react"
import TopBar from '../manage/TopBar';
import Main from "./Main"
import Content from "./Content"
// RAN
const Container = () => {
    return (
        <>
            <div className="container_Ran">
                <TopBar></TopBar>

                <Content></Content>

            </div>
        </>
    )

}

export default Container;