import React from "react"
import TopBar from "./TopBar"
import MainImg from "./MainImg"
import Content from "../../containers/home/Content"
import SideNav from "../../containers/home/SideNav"
import run from "../../init/start"
import { useEffect } from "react"

const Container = () => {
    useEffect(()=>{
        run()
    })
    
    return (<>
        <div className="container">
            <SideNav></SideNav>
            <TopBar></TopBar>
            <MainImg></MainImg>
            <Content></Content>
        </div>
    </>)
    
}

export default Container;