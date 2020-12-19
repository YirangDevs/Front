import React, {useEffect, useState} from "react"
import styled from "styled-components"
import Content from "../../components/organisms/create/Content"

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

    const titleOnChange = (e) => {
        const title=e.target.value
        setBufferNotice((state)=>({...state, title:title}))
    }
    const regionOnChange = (e) => {
        const region=e.target.value
        setBufferNotice((state)=>({...state, region: region}))
    }
    const needsOnChange = (e) => {
        const needs=e.target.value
        setBufferNotice((state)=>({...state, needs: needs}))
    }
    const dateOnChange = (e) => {
        const date=e.target.value
        setBufferNotice((state)=>({...state, date: date}))
    }
    const timeOnChange = (e) => {
        const time=e.target.value
        setBufferNotice((state)=>({...state, time: time}))
    }
    const deadlineOnChange = (e) => {
        const deadline=e.target.value
        console.log(deadline)
        setBufferNotice((state)=>({...state, deadline: deadline}))
    }

    const uploadOnClick = (e) => {
        console.log(bufferNotice)
    }

    return (
        <>
            <Container>
                <Content                    
                    titleOnChange={titleOnChange}
                    regionOnChange={regionOnChange}
                    needsOnChange={needsOnChange}
                    dateOnChange={dateOnChange}
                    timeOnChange={timeOnChange}
                    deadlineOnChange={deadlineOnChange}
                    
                    uploadOnClick={uploadOnClick}
                >
                </Content>
            </Container>
        </>
    )
}

export default ContentContainer