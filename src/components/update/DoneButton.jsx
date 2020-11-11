import React from 'react'
import _ from "../../config/env"
//import YAT from "../service/yat"

const DoneButton = (props) => {

    const data = JSON.stringify({
        "title": props.Title,
        "activityRegisterRequestDto": {
            "content": props.Content, "region": props.Region, "nor": parseInt(props.Nor),
            "dov": props.Dov, "tov": props.Tov, "dod": props.Dod
        }

    });

    const PUTdata = (data) => {
        fetch(_.HOST_URL + ":8080/v1/apis/manage/notices/" + Number(props.Id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("YAT"),
            },
            body: data,
        }).then(response => response.text())
            .then(response => { props.SUBMIT(); console.log("update success") })
            .then(result => { console.log(result); })
            .catch(error => console.log('error', error))

    }


    const isValue = (props) => {
        if (props.Title === undefined || props.Content === undefined || props.Nor === undefined || props.Dov === undefined || props.Tov === undefined || props.Dod === undefined || props.Region === undefined) {
            console.log(props);
            alert('내용을 모두 입력하세요');

            return false;
        } return true;


    }


    const onClick = () => {
        //여기서 fetch ( method : post)

        if (isValue(props) === true) {
            console.log(props.Tov)
            PUTdata(data)

            //props.SUBMIT()

            window.history.back();
        }
    }



    return (
        <>
            <div className="done container__done">

                <div className="done__btn" onClick={onClick}><span role="img" aria-label="update">🚧</span>게시글 수정 완료<span role="img" aria-label="update">🚧</span></div>
            </div>
        </>
    )
}

export default DoneButton;