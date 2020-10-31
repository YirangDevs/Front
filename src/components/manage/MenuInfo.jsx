import React from 'react'


const MenuInfo = () => {
    return (
        <>
            <div className="info menu__info">
                <div className="info__title">안녕하세요 망나뇽님</div>
                <div className="info__card">
                    <div className="info__card--key">MODE</div>
                    <div className="info__card--value">"관리자" 모드</div>
                </div>
                <div className="info__card">
                    <div className="info__card--key">LOGIN</div>
                    <div className="info__card--value" onClick="{handleClick}">LOGOUT</div>
                </div>
            </div>
        </>
    )
}

export default MenuInfo;