import React from "react"
import styled from "styled-components"
//import GuideButton from "../atoms/GuideButton/index"
import Button from "../atoms/Button/index"
import {useHistory} from "react-router-dom";


const GuideButtonWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
    
`

const GuideButtonGroup = () => {
    const history = useHistory()
    return(
        <>
            <GuideButtonWrapper>
                <Button value="피봉사자 데이터 업로드" onClick={()=>history.push("/Index")}>

                </Button>


                <Button value="봉사 공고글 관리" onClick={()=>history.push("/manage")}>

                </Button>
                <Button value="매칭 결과 확인">

                </Button>
            </GuideButtonWrapper>

        </>
    )
}

export default GuideButtonGroup