import React from "react"

const NameGenderForm = () => (
    <>
        <div className="item">
                <p className="name-text">이름 : </p><input type="text" className="form__name" placeholder="홍길동"/>
                <label className="gender-radio"><input type="radio" name="gender" value="male" checked="defaultChecked"/><span>남성</span></label>
                <label className="gender-radio"><input type="radio" name="gender" value="female"/><span>여성</span></label>
        </div>
    </>
)

export default NameGenderForm