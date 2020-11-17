import React from "react"
import styled from "styled-components"
import GuideButton from "../atoms/GuideButton"


const GuideButtonWrapper = styled.div`
    
`

const GuideButtonGroup = () => {
    return(
        <>
            <GuideButton value="피봉사자 데이터 업로드"/>
            <GuideButton value="봉사 공고글 관리"/>
            <GuideButton value="매칭 결과 확인"/>
        </>
    )
}

export default GuideButtonGroup