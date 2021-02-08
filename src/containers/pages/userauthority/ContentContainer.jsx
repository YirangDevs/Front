import React, {useState, useEffect, useCallback} from "react"
import styled from "styled-components"
import getAllUsers from "../../../service/api/get/get_all_users"
import UserAuthorityContent from "../../../components/organisms/userauthority/Content/index"

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
    const [users, setUsers] = useState([]);
    const [regionModal, setRegionModal] = useState(false);
    const [authorityModal, setAuthorityModal] = useState(false);
    const [authorityModalText, setAuthorityModalText] = useState();
    const [authorityTargetText, setAuthorityTargetText] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [adminPosts, setAdminPosts] = useState([]);
    const [regionsPosts, setRegionsPosts] = useState([]);
    const postsPerPage = 10


    useEffect(()=> {
        getAllUsers().then((data)=>{
            setUsers(data.userAuthorities)
        }).catch(err=>console.log(err))
    }, [])

    const updatePosts = useCallback(()=>{
        let data = users
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
        .map((i)=>{
            return{
                authority : i.authority,
                name : i.userName,
                sex : i.sex,
                phone : i.phone,
                email : i.email
            }
        })
        setPosts(data)
    }, [currentPage, users])
    const updateAdminPosts = useCallback(()=>{
        let data = users
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
        .map((i)=>{
            return{
                authority : i.authority
            }
        })
        setAdminPosts(data)
    }, [currentPage, users])
    const updateRegionsPosts = useCallback(()=>{
        let data = users
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
        .map((i)=>{
            return{
                regions : i.regions
            }
        })
        setRegionsPosts(data)
    }, [currentPage, users])
    useCallback(() => {
        updatePosts()
    }, [updatePosts])
    useCallback(()=>{
        updateAdminPosts()
    }, [updateAdminPosts])
    useCallback(() => {
        updateRegionsPosts()
    }, [updateRegionsPosts])
    useEffect(() => {
        updatePosts()
    }, [users, updatePosts])
    useEffect(()=>{
        updateAdminPosts()
    }, [users, updateAdminPosts])
    useEffect(() => {
        updateRegionsPosts()
    }, [users, updateRegionsPosts])



    const regionOnClick = (e) => {
        const region = e.target.innerText
        console.log(users)
        if(region!=="-"){
            setRegionArray(region)
            setRegionModal(true)
        }
    }
    const authorityOnClick = (e) => {
        const myAuth = e.target.innerText
        setAuthorityModal(true)
        setAuthorityModalText(myAuth)
        
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1])
        //..클릭하면 이름 가져오고시퍼염.....ㅠㅠㅠ 세상에 seniors 어케 짠겨...
        if(myAuth=="관리자"){setAuthorityTargetText("봉사자")}
        if(myAuth=="봉사자"){setAuthorityTargetText("관리자")}

        
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
                authorityModalText={authorityModalText}
                authorityTargetText={authorityTargetText}

                //users={users}
                posts={posts}
                adminPosts={adminPosts}
                regionsPosts={regionsPosts}
            >
            </UserAuthorityContent>
        </Container>
        
        </>
    )
}

export default ContentContainer