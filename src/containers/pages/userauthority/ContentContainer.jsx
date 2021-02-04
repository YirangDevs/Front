import React, {useState} from "react"
import styled from "styled-components"
import UserAuthorityContent from "../../../components/organisms/userauthority/Content/index"
import CheckBox from "../../../components/atoms/CheckBox"

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const regionOptions = ["수성구", "중구", "동구", "서구", "남구", "북구", "달서구"]


const ContentContainer = () => {
    const [regionArray, setRegionArray] = useState([]);
    const [regionModal, setRegionModal] = useState(false);
    const [authorityModal, setAuthorityModal] = useState(false);

    const regionOnClick = (e) => {
        const region = e.target.innerText
        if(region!=="-"){
            setRegionArray(region.split(","))
            setRegionModal(true)
        }
    }
    const authorityOnClick = () => {
        setAuthorityModal(true)
    }
    const authorityChange = () => {
        //need api message to change the user authority
    }
    const authorityRegionChange = () => {
        //need api message to change the user region authority
    }
    const modalClose = () =>{
        setRegionModal(false)
        setAuthorityModal(false)
    }
    return (
        <>
        <Container>
            <UserAuthorityContent
                regionOnClick={regionOnClick}
                authorityOnClick={authorityOnClick}
                modalClose={modalClose}
                authorityRegionChange={authorityRegionChange}
                authorityChange={authorityChange}


                regionModal={regionModal}
                regionArray={regionArray}
                regionOptions={regionOptions}
                authorityModal={authorityModal}
            >
            </UserAuthorityContent>
        </Container>
        
        </>
    )
}

export default ContentContainer