import React, {useEffect, useState} from "react"
import styled from "styled-components"
import Content from "../../components/organisms/create/Content"

import store from "../../store/store"
import action from "../../store/actions/action"
import data from "../../business/service/fetch_notice"
import postSeniorsToServer from "../../business/service/post_seniors_to_server"

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
`

const ContentContainer = () => {

    const [bufferNotice, setBufferNotice] = useState({})

    useEffect(()=>{
        const region=store.getState().transferSeniorToNotice_reducer.region
        setBufferNotice((state)=>({...state, region: region}))
        const nor=store.getState().transferSeniorToNotice_reducer.needs
        setBufferNotice((state)=>({...state, nor: nor}))
        const dov=store.getState().transferSeniorToNotice_reducer.date
        setBufferNotice((state)=>({...state, dov: dov}))

        
    }, [])
    

    const titleOnChange = (e) => {
        const title=e.target.value
        setBufferNotice((state)=>({...state, title:title}))
    }
    const timeOnChange = (e) => {
        const tov=e.target.value
        setBufferNotice((state)=>({...state, tov: tov}))
    }
    const deadlineOnChange = (e) => {
        const dod=e.target.value
        setBufferNotice((state)=>({...state, dod: dod}))
    }
    const contentOnChange = (e) => {
        const content=e.target.value
        setBufferNotice((state)=>({...state, content: content}))
    }

    const uploadOnClick = (e) => {
        data.createNotice({
            activityRegisterRequestDto:{
                content: bufferNotice.content,
                dod: bufferNotice.dod,
                dov: bufferNotice.dov,
                nor: bufferNotice.nor,
                region: bufferNotice.region,
                tov: bufferNotice.tov+":00"
            },
            title: bufferNotice.title
        }).then(res=>{
            if(res.status==201){
                const excelData=store.getState().transferSeniorToNotice_reducer.excelData
                postSeniorsToServer(excelData).then(res=>console.log(res))
            }
            
        })
        
    }

    return (
        <>
            <Container>
                <Content      
                    // title={title}

                    titleOnChange={titleOnChange}
                    timeOnChange={timeOnChange}
                    deadlineOnChange={deadlineOnChange}
                    contentOnChange={contentOnChange}
                    
                    uploadOnClick={uploadOnClick}
                >
                </Content>
            </Container>
        </>
    )
}

export default ContentContainer