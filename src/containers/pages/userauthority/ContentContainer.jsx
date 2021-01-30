import React, {useState} from "react"
import styled from "styled-components"
import Modal from "../../../components/atoms/Modal"
import UserAuthorityContent from "../../../components/organisms/userauthority/Content/index"
import CheckBox from "../../../components/atoms/CheckBox"
import AuthorityAdminModal from "../../../components/organisms/userauthority/AuthorityAdminModal"
import AuthorityRegionModal from "../../../components/organisms/userauthority/AuthorityRegionModal"

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
    const [authorityAdminModal, setAuthorityAdminModal] = useState(false);

    const regionOnClick = (e) => {
        const region = e.target.innerText
        if(region!=="-"){
            setRegionArray(region.split(","))
            setRegionModal(true)
        }
    }
    const authorityOnClick = () => {
        setAuthorityAdminModal(true)
    }
    const authorityChange = () => {
        //need api message to change the user authority
    }
    const authorityRegionChange = () => {
        //need api message to change the user region authority
    }
    const modalClose = () =>{
        setRegionModal(false)
        setAuthorityAdminModal(false)
    }
    return (
        <>
        <Container>
            <UserAuthorityContent
                regionOnClick={regionOnClick}
                authorityOnClick={authorityOnClick}
            >
            </UserAuthorityContent>
        </Container>
        <Modal title="지역 할당" visible={regionModal} onClose = {modalClose} size={12} children={<AuthorityRegionModal modalClose={modalClose} authorityOnClick={authorityRegionChange} regionArray={regionArray} regionOptions={regionOptions}/>}/>
        <Modal title="권한 할당" visible={authorityAdminModal} size={12} children={<AuthorityAdminModal authorityOnClick={authorityChange} modalClose={modalClose}/>}/>
        </>
    )
}

export default ContentContainer