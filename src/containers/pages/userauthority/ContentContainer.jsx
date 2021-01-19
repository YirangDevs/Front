import React from "react"
import styled from "styled-components"
import UserAuthorityContent from "../../../components/organisms/userauthority/index"

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const regionOnClick = (e) => {
    console.log(e.target.innerText)
    
    const region = e.target.innerText
    const regionArray=region.split(",")
    
    console.log(regionArray)
    

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