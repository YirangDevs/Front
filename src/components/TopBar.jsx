import React from "react"

const TopBar = () => {

    const bar_click = (e) => {
        document.querySelector(".side__nav__wrapper").style.display = "block"
        document.querySelector(".side__nav").style.width = "45%"
    }

    return (
    <>
        <div className="top__bar__wrapper">
            <div className="top__bar">
                <i className="fas fa-bars top__bar__bar" onClick={bar_click}></i>
                <div className="top__bar__logo">
                    YIRANG
                </div>
            </div>
            
        </div>
    </>
    )
}

export default TopBar