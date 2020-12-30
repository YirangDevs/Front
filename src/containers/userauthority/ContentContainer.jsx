import React from "react"
import styled from "styled-components"
import UserAuthorityContent from "../../pages/UserAuthority/UserAuthorityContent"

import ReactTooltip from "react-tooltip"

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const regionOnClick = () => {
    
}

const ContentContainer = () => {
    return (
        <Container>
            <UserAuthorityContent
                regionOnClick={regionOnClick}   
            >
            </UserAuthorityContent>
        </Container>
    )
}

export default ContentContainer