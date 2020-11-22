import React from 'react'
import fetchData from "../../business/service/fetch_notice"
//import YAT from "../service/yat"

const DoneButton = (props) => {

    const data = JSON.stringify({
        "title": props.Title,
        "activityRegisterRequestDto": {
            "content": props.Content, "region": props.Region, "nor": parseInt(props.Nor),
            "dov": props.Dov, "tov": props.Tov, "dod": props.Dod
        }

    });

    const updateNotice = (data) => {
        fetchData.updateNotice(props.Id, data)
            .then(response => console.log(response))

    }


    const isValue = (props) => {
        if (props.Title === undefined || props.Content === undefined || props.Nor === undefined || props.Dov === undefined || props.Tov === undefined || props.Dod === undefined || props.Region === undefined) {
            console.log(props);
            alert('내용을 모두 입력하세요');

            return false;
        } return true;


    }


    const onClick = () => {
        if (isValue(props) === true) {
            console.log(props.Tov)
            updateNotice(data);
            window.history.back();
        }
    }



    return (
        <>
            <div className="done container__done">
                <div className="done__btn" onClick={onClick}>게시글 수정 완료</div>
            </div>
        </>
    )
}

export default DoneButton;