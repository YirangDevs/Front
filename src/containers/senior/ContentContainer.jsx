import React, { useState, useEffect } from "react"
import Content from "../../components/organisms/senior/Content"
import fetchAllData from "../../business/service/fetchAllData"
import fetchRegion from "../../business/service/fetchRegion"
import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const ContentContainer = () => {

    const [currentSenior, setCurrentSenior] = useState({})
    const [seniors, setSeniors] = useState([]);
    const [region, setRegion] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [posts, setPosts] = useState([])
    const [bufferSenior, setBufferSenior] = useState({});
    const [button, setButton] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchAllData()
            .then((data) => {
                setSeniors(data)
            })
            .catch((e) => setSeniors([]));

    }, [])
    
    useEffect(()=>{
        updatePosts()
    }, [seniors])

    useEffect(()=>{
        updatePosts()
    }, [currentPage])



    const updatePosts = () =>{
        let data = seniors
                    .slice((currentPage-1) * postsPerPage, currentPage * postsPerPage )
                    .map((i)=>{

                        let  data = i
                        delete data.id
                        delete data.address
                        return data
                    })
        setPosts(data)
    }

    const selectRegion = (e) => {
        if (e.target.value === "전체") {
            fetchAllData()
                .then((resolve) => {

                    setSeniors(resolve);
                })
                .catch((e) => setSeniors([]));
        } else {
            let region = e.target.value;
            fetchRegion(region)
                .then((resolve) => {
                    console.log(resolve)
                    setSeniors(resolve);
                })
                .catch((e) => setSeniors([]));
        }
        setRegion(e.target.value);
        setCurrentPage(1)
    }
    const selectPage = (e) => {
        setCurrentPage(e.target.innerText)
    };

    const selectSenior = (e) => {
        const primaryKey = e.target.parentNode.children[3].innerText //phoneNum
        const senior = seniors.filter((i)=>i.phone==primaryKey)[0]
        setCurrentSenior(senior)
    }

    const nameOnChange = (e) => {
        const name=e.target.value
        setBufferSenior((state)=>({...state, name}))
    }
    const genderOnChange = (e) => {
        const gender=e.target.value
        setBufferSenior((state)=>({...state, gender}))
    }
    const typeOnChange = (e) => {
        const type=e.target.value
        setBufferSenior((state)=>({...state, type}))
    }
    const priorityOnChange = (e) => {
        const priority=e.target.value
        setBufferSenior((state)=>({...state, priority}))
    }
    const dateOnChange = (e) => {
        const date=e.target.value
        setBufferSenior((state)=>({...state, date}))
    }
    const phoneOnChange = (e) => {
        const phone=e.target.value
        setBufferSenior((state)=>({...state, phone}))
    }
    const regionOnChange = (e) => {
        const region=e.target.value
        setBufferSenior((state)=>({...state, region}))
    }
    const addressOnChange = (e) => {
        const address=e.target.value
        setBufferSenior((state)=>({...state, address}))
    }
    const addButton = () => {
        setButton(true)
    }
    const editDeleteButton = () => {
        setButton(false)
    }
    const uploadOnClick = (e) => {
        e.target.parentNode.children[0].click()
    }
    const uploadFile = () => {
        setModal(true);
    }

    return (
        <>
        <Container>
            <Content 
                currentSenior={currentSenior} 
                region={region}
                posts={posts}

                selectRegion={selectRegion}
                selectPage={selectPage}
                selectSenior={selectSenior}

                nameOnChange={nameOnChange}
                genderOnChange={genderOnChange}
                typeOnChange={typeOnChange}
                priorityOnChange={priorityOnChange}
                dateOnChange={dateOnChange}
                phoneOnChange={phoneOnChange}
                regionOnChange={regionOnChange}
                addressOnChange={addressOnChange}
                
                uploadOnClick={uploadOnClick}
                addButton={addButton}
                editDeleteButton={editDeleteButton}
                uploadFile={uploadFile}
                button={button}
            ></Content>
            </Container>
        </>
    )
}

export default ContentContainer