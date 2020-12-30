import React from "react"
import styled from "styled-components"
import TopBar from "../../components/molecules/TobBar/index"
import ContentContainer from "../../containers/userauthority/ContentContainer"

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
`

const UserAuthority = () => {
    return (
        <>
            <TopBar />
            <ContentWrapper>
            <ContentContainer/>
            </ContentWrapper>
        </>
    )
}

export default UserAuthority