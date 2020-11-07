import React from 'react'


const InputNomain = ({ SET_CONFIG }) => {

    const onChange = (mainValue) => {
        const value = mainValue.target.value;
        const type = mainValue.target.name;
        console.log([type], value);




        SET_CONFIG({
            notice: {
                [type]: value
            }
        })
    }

    function getToday() {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        return year + "-" + month + "-" + day;
    }



    return (
        <>
            <div className="nomain input__nomain">
                {/*nor : 필요한 인원수 */}
                <div className="nomain__nor--name">필요 인원 수</div>
                <input type="number" className="nomain__nor--value" min="1" name='nor' onChange={onChange} placeholder="필요인원 수를 입력하세요" />
                {/*dov : 봉사날짜 */}
                <div className="nomain__dov--name">봉사 날짜</div>
                <input type="date" min={getToday()} className="nomain__dov--value" name='dov' onChange={onChange} />
                {/* tov : 봉사시간  */}
                <div className="nomain__tov--name">봉사 시작 시간</div>
                <input type="time" className="nomain__tov--value" name='tov' onChange={onChange} />
                {/* dod : 마감날짜  */}
                <div className="nomain__dod--name">신청 마감 날짜</div>
                <input type="date" min={getToday()} className="nomain__dod--value" name='dod' onChange={onChange} />
            </div>
        </>
    )

}

export default InputNomain;