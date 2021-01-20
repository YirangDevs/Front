import React, {useState} from "react"
import styled from "styled-components"
import Modal from "../../../components/atoms/Modal"
import UserAuthorityContent from "../../../components/organisms/userauthority/index"
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
    const [modal, setModal] = useState(false);

    const regionOnClick = (e) => {
        const region = e.target.innerText
        if(region!=="-"){
            setRegionArray(region.split(","))
            setModal(true)
        }
    }
    const modalClose = () =>{
        setModal(false)
    }
    return (
        <>
        <Container>
            <UserAuthorityContent
                regionOnClick={regionOnClick}   
            >
            </UserAuthorityContent>
        </Container>
        <Modal title="지역 할당" visible={modal} onClose = {modalClose}closable={true} size={12} children={<CheckBox defaultChecked={regionArray} options={regionOptions}/>}/>
        </>
    )
}

export default ContentContainer