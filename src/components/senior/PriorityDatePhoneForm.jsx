import React from "react"
import phone from "../../img/phone.png"
import SelectBox from "../atoms/SelectBox";
import TextBox from "../atoms/TextBox";

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
            {/* <select className="form__order" name="priority" value={props.priority} onChange={onChange}>
                <option value="none">우선순위</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> */}
            <SelectBox width="20%" height="2.2rem" name="priority" defaultValue={props.priority} onChange={onChange} options={["우선순위", "1", "2", "3", "4", "5"]}></SelectBox>
            <p className="date-text">봉사날짜 : </p>
            <input type="date" name="date" onChange={onChange} value={props.date} className="form__date"/>
            <img src={phone} className="phone" alt="phone"/>
            <p className="phone-text">전화번호 : </p>
            {/* <input type="text" name="phone" maxLength="13" value={props.phone} onChange={onChange} className="form__phone" placeholder="- 기호를 제외하고 기입"/> */}
            <TextBox width="35%" height="2.2rem" onChange={onChange} defaultValue={props.phone} placeholder="- 기호를 제외하고 기입"></TextBox>
        </div>
    </>
    )
}

export default PriorityDatePhoneForm