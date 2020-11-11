import React from 'react'

const InputMain = (props) => {





    return (
        <>
            <div className="main input__main">
                <div className="main__title--name-read">제목</div>
                <div className="main__title--value-read">{props.title}</div>
                <div className="nomain__nor--name-read">필요 인원 수 / 신청한 인원 수 </div>
                <div className="nomain__nor--value-read"> {props.nor} / {props.noa}</div>

            </div>
        </>
    )

}

export default InputMain;