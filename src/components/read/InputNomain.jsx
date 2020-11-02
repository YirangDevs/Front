import React from 'react'


const InputNomain = (props) => {




    return (
        <>
            <div className="nomain input__nomain-read">
                {/*nor : 필요한 인원수 */}
                <div className="main__location--name-read">장소</div>
                <div className="main__location--value-read" >{props.region} </div>
                {/*dov : 봉사날짜 */}
                <div className="nomain__dov--name-read">봉사 날짜</div>
                <div className="nomain__dov--value-read" >{props.dov}</div>
                {/* tov : 봉사시간  */}
                <div className="nomain__tov--name-read">봉사 시작 시간</div>
                <div className="nomain__tov--value-read" name='tov' >{props.tov}</div>
                {/* dod : 마감날짜  */}
                <div className="nomain__dod--name-read">신청 마감 날짜</div>
                <div className="nomain__dod--value-read">{props.dod}</div>
            </div>
        </>
    )

}

export default InputNomain;