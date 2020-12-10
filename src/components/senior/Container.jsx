import React from "react"
import TopBar from "./TopBar"
import Content from "./Content"
//import "../../senior.css"
import "../../index.css"

const Container = () => {
    return (<>
        <div className="container">
            <TopBar></TopBar>
            <Content></Content>
        </div>
    </>)
    
}

export default Container;