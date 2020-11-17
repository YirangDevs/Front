//container
import React from "react"
import { Link } from "react-router-dom"
const TopBar = () => {

    return (
        <>
            <div className="container__top-bar--manage">
                <Link to='/'>
                    <div className="top-bar__logo--manage">YIRANG</div>
                </Link>
            </div>
        </>
    )

}

export default TopBar