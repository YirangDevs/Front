import React, {useEffect, useState} from "react"
import styled from "styled-components"
import CreateContent from "../../../components/organisms/create/Content/"
import {useHistory} from "react-router-dom"
import store from "../../../store/store"
import postSeniors from "../../../service/api/post/post_seniors"
import postNotice from "../../../service/api/post/post_notice";

const ContentContainer = () => {

    const history = useHistory()

    const [bufferNotice, setBufferNotice] = useState({})

    useEffect(()=>{
        const region=store.getState().transferSeniorToNotice_reducer.region
        setBufferNotice((state)=>({...state, region: region}))
        const nor=store.getState().transferSeniorToNotice_reducer.nor
        setBufferNotice((state)=>({...state, nor: nor}))
        const dov=store.getState().transferSeniorToNotice_reducer.dov
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
        if(bufferNotice.content!=undefined&&bufferNotice.dod!=undefined&&bufferNotice.tov!=undefined&&bufferNotice.title){
            postNotice({
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
                const excelData=store.getState().transferSeniorToNotice_reducer.excelData
                postSeniors(excelData).catch(err=>console.log(err))
            }).catch(error=>console.log(error))
        }else{
            alert("채워지지 않은 칸이 존재합니다. 모든 칸을 채워주세요.")
        }
        
        
    }

    return (
        <>
            <CreateContent
                titleOnChange={titleOnChange}
                timeOnChange={timeOnChange}
                deadlineOnChange={deadlineOnChange}
                contentOnChange={contentOnChange}

                uploadOnClick={uploadOnClick}
            >
            </CreateContent>
        </>
    )
}

export default ContentContainer