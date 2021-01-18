import React from "react"
import styled from "styled-components"
import TopBar from "../../components/organisms/Header"
import ContentContainer from "../../containers/pages/userauthority/ContentContainer"

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