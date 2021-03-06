import React, {useEffect, useState} from "react"
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
        //채은이가 고칠 코드(create에서 빈칸이 있으면 넘어가지 않도록 하기)
        if(bufferNotice.content!==undefined&&bufferNotice.dod!==undefined&&bufferNotice.tov!==undefined&&bufferNotice.title){
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
            }).then(
                history.push("/")
            ).catch(error=>console.log(error))
        }else{
            alert("채워지지 않은 칸이 존재합니다. 모든 칸을 채워주세요.")
        }
        
        
    }

    return (
        <>
            <CreateContent
                title={bufferNotice.title}
                region={bufferNotice.region}
                nor={bufferNotice.nor}
                date={bufferNotice.dov}
                time={bufferNotice.tov}
                deadline={bufferNotice.dod}
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