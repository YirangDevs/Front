import React from "react"
import phone from "../../img/phone.png"

const PriorityDatePhoneForm = () => (
    <>
        <div className="item">
            <select className="form__order">
                <option value="none">우선순위</option>
                <option value="first">1</option>
                <option value="second">2</option>
                <option value="third">3</option>
                <option value="forth">4</option>
                <option value="fifth">5</option>
            </select>
            <p className="date-text">봉사날짜 : </p><input type="date" className="form__date" value="2020-09-01"/>
            <img src={phone} className="phone" alt="phone"/>
            <p className="phone-text">전화번호 : </p><input type="text" className="form__phone" placeholder="- 기호를 제외하고 기입"/>
        </div>
    </>
)

export default PriorityDatePhoneForm