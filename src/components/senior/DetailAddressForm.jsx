import React from "react"
import TextBox from "../atoms/TextBox";

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
            {/* <input type="text" onChange={onChange} value={props.address} className="detail-address" placeholder="상세 주소를 입력해주세요."/> */}
            <TextBox width="90%" height="2.3rem" onChange={onChange} defaultValue={props.address} placeholder="상세 주소를 입력해주세요."></TextBox>
        </div>
    </>
    )
}

export default DetailAddressForm