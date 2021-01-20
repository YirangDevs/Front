
import React from "react"
import TopBar from "./TopBar"
import MainImg from "./MainImg"
import Content from "../../containers/pages/home/Content"
import SideNav from "../../containers/pages/home/SideNav"
import Star from "../../containers/pages/home/Star"
import run from "../../init/start"
import { useEffect } from "react"

const Container = () => {
    useEffect(() => {
        run()
    })

    return (<>
        <div className="container">
            <SideNav></SideNav>
            <TopBar></TopBar>
            <Star></Star>
            <MainImg></MainImg>
            <Content></Content>

        </div>
    </>)

}

export default Container;
