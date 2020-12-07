import React from "react"
import Index from "../atoms/SelectBox"

const VolunteerRegionForm = (props) => {

    const onChange = (e) => {
        const value = e.target.value;
        props.INPUT_SENIORS({
            senior:{
                region: value
            }
        })
    }

    return(
    <>
    {/*}
        <div className="item">
            <select className="select-region" value={props.region} onChange={onChange}>
                <option value="all">봉사지역</option>
                <option value="수성구">수성구</option>
                <option value="중구">중구</option>
                <option value="동구">동구</option>
                <option value="서구">서구</option>
                <option value="남구">남구</option>
                <option value="북구">북구</option>
            </select>
        </div>
    */}
    <div className="item">
    <Index width="95%" height="2.3rem" defaultValue={props.region} options = {["전체","수성구","중구","동구","서구","남구","북구","달서구"]}></Index>
    </div>
    
    </>
    )
}

export default VolunteerRegionForm