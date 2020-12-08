import React from "react"

const TopBar = () => {

    const bar_click = (e) => {
        document.querySelector(".side-nav__wrapper").style.display = "block"
        document.querySelector(".side-nav").style.width = "45%"
    }

    return (
    <>
        
            <div className="top-bar container__top-bar">
                <i className="fas fa-bars top-bar__bar" onClick={bar_click}></i>
                <div className="top-bar__logo">
                    YIRANG
                </div>
            </div>
            
        
    </>
    )
}

export default TopBar