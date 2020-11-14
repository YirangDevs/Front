import React, { useEffect } from "react"
import TopBar from '../manage/TopBar';
import "../../css/readAllNotice.css";
import Content from "./Content";
import run from "../../init/start"
// RAN
const Container = () => {
    useEffect(() => {
        run()
    })

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