import React from "react"
import ACTION from "../../store/actions/action"
import store from "../../store/store"

const renderSenior = (senior, props) => {
    const getInfo = (e) => {
        var trs=document.getElementsByTagName("tr");
        var indexValue = props+1
  
        console.log(trs[indexValue].children[0].innerText)
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {id : trs[indexValue].children[0].innerText}}));
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {name : trs[indexValue].children[1].innerText}}));
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {sex : trs[indexValue].children[2].innerText==="남"?"male":"female"}}));
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {region : trs[indexValue].children[3].innerText}}));
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {phone : trs[indexValue].children[4].innerText}}));
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {type : trs[indexValue].children[5].innerText==="재가봉사"?"work":"talk"}}));
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {date : trs[indexValue].children[6].innerText}}));
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {priority : trs[indexValue].children[7].innerText}}));
        store.dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC({senior : {address : trs[indexValue].children[8].innerText}}));

        store.dispatch(ACTION.SET_BUTTON__ACTION_FUNC({button:false}));
    }
    
    return(
        <tr key={senior.id}>
            <td id="hiddenField">{senior.id}</td>
            <td className="primaryKey" id={senior.id} onClick={getInfo}>
                {senior.name}
            </td>
            <td>{senior.sex}</td>
            <td>{senior.region}</td>
            <td>{senior.phone}</td>
            <td>{senior.type}</td>
            <td>{senior.date}</td>
            <td>{senior.priority}</td>
            <td id="hiddenField">{senior.address}</td>
        </tr>
       
    )
}

export default renderSenior