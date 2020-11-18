import React, { useState } from 'react'
import _ from "../../config/env"
import { Button, TextField } from "@material-ui/core"

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';





const UrgentTitle = () => {

    //이모지 체크 변수 
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
    })


    //긴급공고글 제목 설정 변수 
    const [titleValue, setValue] = useState(" ")
    //긴급공고글 제목 저장하는 함수 
    const setTitle = (e) => {
        setValue(e.target.value);
    }

    //모달배경클릭시 제목 -> null , 돌아가기 
    const urgentWrapper_Click = () => {
        // 모달 배경 클릭시 
        document.querySelector(".container__urgent").style.display = "none"
        document.querySelector(".urgent_wrapper").style.display = "none"
        if (titleValue) {
            console.log(titleValue)
            setValue(" ");
        }
        setState({ ...state, checkedA: false, checkedB: false });

    }
    //이모지 체크시 변수 => true 
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(event.target.checked)
        console.log("checkedA " + state.checkedA)
        console.log("checkedB " + state.checkedB)
    };

    //POST할 data
    const bothUrgent = JSON.stringify({
        "title": "🔥🚨" + titleValue
    });
    const AUrgent = JSON.stringify({
        "title": "🔥" + titleValue
    });
    const BUrgent = JSON.stringify({
        "title": "🚨" + titleValue
    });

    //POST
    const urgentPost = (data) => {
        console.log(localStorage.getItem("SELECT_ID"))
        fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(localStorage.getItem("SELECT_ID")) + "/urgent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("YAT"),
            },
            body: data,
        }).then(response => response.text())
            .then(response => {
                console.log("urgentSuccess");
                setValue(" ");
                urgentWrapper_Click()
                window.opener.location.reload(true);

            })
            .then(result => { console.log(result); })
            .catch(error => console.log('error', error))

    }

    // post button 
    const urgnetButton = () => {
        if (titleValue === " ") {
            alert("title를 입력하세요")
        }
        else if (titleValue) {
            if (state.checkedA === true && state.checkedB === true) {
                urgentPost(bothUrgent);

            }
            else if (state.checkedA) {
                urgentPost(AUrgent);
            }
            else if (state.checkedB) {
                urgentPost(BUrgent);
            }
            else {
                alert("최소 하나 이상의 이모지를 선택해 주세요")
            }

        }

    }

    return (
        <>
            <div className="urgent_wrapper" onClick={urgentWrapper_Click}></div>
            <div className="urgent container__urgent">
                <div className="urgent__emoji">
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                            label="🔥 "
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="🚨"
                        />
                    </FormGroup>
                </div>
                <div className="urgent__input-title">
                    {/* <input type="text" className="urgent__input-title--value" placeholder="새로운 제목을 입력하세요"></input>  */}
                    <TextField value={titleValue} onChange={setTitle} className="urgent__input-title--value"
                        label="새로운 제목을 입력해 주세요" variant="outlined" />
                </div>
                <div className="urgent__submit-button">
                    {/* <div className="urgentButton__submit"> <span role="img" aria-label="urgent">🚨</span>
                    급구 게시물 올리기 <span role="img" aria-label="urgent">🚨</span> </div> */}
                    <Button color="secondary" size="large" className="urgentButton__submit" onClick={urgnetButton}>
                        <span role="img" aria-label="urgent">🚨</span>
                    급구 게시물 올리기 <span role="img" aria-label="urgent">🚨</span>
                    </Button>
                </div>
            </div>
        </>
    )

}


export default UrgentTitle;

