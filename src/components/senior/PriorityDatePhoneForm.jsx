import React from "react"
import phone from "../../img/phone.png"

const PriorityDatePhoneForm = (props) => {

    const onChange = (e) => {
        const value=e.target.value;
        const type=e.target.name;
      
        props.INPUT_SENIORS({
            senior:{
                [type]: value
            }
        })
        
  }


    return(
    <>
        <div className="item">
            <select className="form__order" name="priority" value={props.priority} onChange={onChange}>
                <option value="none">우선순위</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p className="date-text">봉사날짜 : </p>
            <input type="date" name="date" onChange={onChange} value={props.date} className="form__date"/>
            <img src={phone} className="phone" alt="phone"/>
            <p className="phone-text">전화번호 : </p>
            <input type="text" name="phone" maxLength="13" value={props.phone} onChange={onChange} className="form__phone" placeholder="- 기호를 제외하고 기입"/>
        </div>
    </>
    )
}

export default PriorityDatePhoneForm