import React from 'react'
import _ from "../../config/env"
//import YAT from "../service/yat"

const DoneButton = (props, history) => {

    const data = JSON.stringify({
        "title": props.title,
        "activityRegisterRequestDto": {
            "content": props.content, "region": props.region, "nor": parseInt(props.nor),
            "dov": props.dov, "tov": props.tov + ":00", "dod": props.dod
        }

    });

    const POSTdata = (data) => {
        fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("YAT"),
            },
            body: data,
        }).then(response => response.text())
            .then(response => {props.SUBMIT() })
            .catch(error => console.log('error', error))

    }


    const isValue = (props) => {
        if (props.title === undefined || props.content === undefined || props.nor === undefined || props.dov === undefined || props.tov === undefined || props.dod === undefined || props.region === undefined) {
            console.log(props);
            alert('내용을 모두 입력하세요');

            return false;
        } return true;


    }


    const onClick = () => {
        //여기서 fetch ( method : post)

        if (isValue(props) === true) {

            POSTdata(data)

            props.SUBMIT()
            console.log("create success")
            window.history.back();
            //window.close()


            //history.push('/manage')
        }
    }

        ;

    return (
        <>
            <div className="done container__done">

                <div className="done__btn" onClick={onClick}>게시글 작성 완료</div>
            </div>
        </>
    )
}

export default DoneButton;