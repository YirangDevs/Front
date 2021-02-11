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
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [adminPosts, setAdminPosts] = useState([]);
    const [regionsPosts, setRegionsPosts] = useState([]);
    const [idArray, setIdArray] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const postsPerPage = 10


    useEffect(()=> {
        getAllUsers().then((data)=>{
            setUsers(data.userAuthorities)
            console.log(data.userAuthorities)
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
    
    
    const updateRegionsPosts = useCallback(()=>{
        let data = users
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
        .map((i)=>{
                return{
                    regions : i.regions
                }            
        })
        
        console.log(data)
        console.log(data[0])
        //console.log(data[0].regions)
        //console.log(data[0].length)
        

        setRegionsPosts(data)

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

    const sendIdArray = useCallback(()=>{
        let data = users
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
        .map((i)=>{
            return{
                userId : i.userId,
                regions : i.regions
            }
        })
        setIdArray(data)
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
    useCallback(()=>{
        sendIdArray()
    }, [sendIdArray])

    useEffect(() => {
        updatePosts()
    }, [users, updatePosts])
    useEffect(()=>{
        updateAdminPosts()
    }, [users, updateAdminPosts])
    useEffect(() => {
        updateRegionsPosts()
    }, [users, updateRegionsPosts])
    useEffect(()=>{
        sendIdArray()
    }, [users, sendIdArray])



    const regionOnClick = (e, data) => {
        console.log(data.regions)
        if(data.regions!=="-"){
            setRegionArray(data.regions)
            setRegionModal(true)
        }        
    }
    const authorityOnClick = (e, data) => {
        setAuthorityModal(true)
        
        const user = users.filter((i)=>i.userId===data.userId)[0]
        setSelectedUser(user)

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

                //users={users}
                posts={posts}
                adminPosts={adminPosts}
                regionsPosts={regionsPosts}
                idArray={idArray}
                selectedUser={selectedUser}
            >
            </UserAuthorityContent>
        </Container>
        
        </>
    )
}

export default ContentContainer