import React from "react"


const SideNav = () => {

    const wrapper_click = (e) => {
        document.querySelector(".side__nav__wrapper").style.display = "none"
        document.querySelector(".side__nav").style.width = "0"
    }
    
    return (
    <>
    <div className="side__nav"></div>
    <div className="side__nav__wrapper" onClick={wrapper_click}></div>
    
    </>
    )
}

export default SideNav