import React from 'react'


const urgentButton = () => {

    const onClick_urgent = () => {
        document.querySelector(".nomain__nor--value-read").style.backgroundColor = "rgba(204, 212, 224, 0.57)"
        document.querySelector(".main__location--value-read").style.backgroundColor = "rgba(204, 212, 224, 0.57)"
        document.querySelector(".nomain__dov--value-read").style.backgroundColor = "rgba(204, 212, 224, 0.57)"
        document.querySelector(".nomain__tov--value-read").style.backgroundColor = "rgba(204, 212, 224, 0.57)"
        document.querySelector(".nomain__dod--value-read").style.backgroundColor = "rgba(204, 212, 224, 0.57)"
        document.querySelector(".contents__text-read").style.backgroundColor = "rgba(204, 212, 224, 0.57)"
    }
    return (
        <>
            <>
                <div className="urgent container__urgentButton-read" >
                    <div className="urgentButton" onClick={onClick_urgent}>
                        <span role="img" aria-label="create">🚨</span>급구 게시물 올리기<span role="img" aria-label="create">🚨</span>
                    </div>
                </div>

            </>
        </>
    )
}

export default urgentButton;