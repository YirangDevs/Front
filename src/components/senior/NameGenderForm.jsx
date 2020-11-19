import React from "react"
import TextBox from "../atoms/TextBox"

const NameGenderForm = (props) => {

    const onChange = (e) => {
        const value = e.target.value;
        props.INPUT_SENIORS({
            senior:{
                name: value
            }
        })
    }
    const onClick = (e) => {
        const value = e.target.value;
        props.INPUT_SENIORS({
            senior:{
                sex: value
            }
        })
    }
    return(
        <>
        <div className="item">
                <p className="name-text">이름 : </p>
                {/* <input type="text" onChange={onChange} value={props.name} className="form__name" placeholder="이름 입력"/> */}
                <TextBox width="40%" height="2.2rem" onChange={onChange} defaultValue={props.name} placeholder="이름 입력"></TextBox>
                <label className="gender-radio"><input type="radio" onClick={onClick} name="gender" value="male" checked={props.sex==="male"}/><span>남성</span></label>
                <label className="gender-radio"><input type="radio" onClick={onClick} name="gender" value="female" checked={props.sex==="female"}/><span>여성</span></label>
        </div>
    </>
    )
}

export default NameGenderForm