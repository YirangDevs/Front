import React from 'react'

const DoneButton = (props) => {

    const data = JSON.stringify({ "id": 10, "title": props.title, "content": props.content, "region": props.region, "nor": props.nor, "dov": props.dov, "tov": props.tov });

    const POSTdata = (data) => {
        fetch("http://localhost:9000/notices/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data,
        }).then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
    }


    const isValue = (props) => {
        if (props.title === undefined || props.content === undefined || props.nor === undefined || props.dov === undefined || props.tov === undefined || props.dod === undefined || props.region === undefined) {
            console.log(props);
            alert('내용을 모두 입력하세요');

            return false;
        } return true;


    }

    const onClick = async (event) => {
        //여기서 fetch ( method : post)

        if (isValue(props) === true) {
            POSTdata(data)
            console.log(props.title)
            props.SUBMIT()
        }
    }



    return (
        <>
            <div className="done container__done">
                <button className="done__btn" onClick={onClick}>게시글 작성 완료</button>
            </div>
        </>
    )
}

export default DoneButton;