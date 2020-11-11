import React from "react"

const DetailAddressForm = (props) => {
    const onChange = (e) => {
        const value=e.target.value;
        props.INPUT_SENIORS({
            senior:{
                address: value
            }
        })
    }

    return(
    <>
        <div className="item">
            <input type="text" onChange={onChange} value={props.address} className="detail-address" placeholder="상세 주소를 입력해주세요."/>
        </div>
    </>
    )
}

export default DetailAddressForm