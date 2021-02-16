import React, {useState, useEffect, useCallback} from "react"
import styled from "styled-components"
import getAllUsers from "../../../service/api/get/get_all_users"
import UserAuthorityContent from "../../../components/organisms/userauthority/Content/index"
import changeUserToAdmin from "../../../service/api/post/change_user_to_admin"
import editUserAdminRegion from "../../../service/api/put/edit_user_admin_region"
import changeAdminToUser from "../../../service/api/delete/change_admin_to_user"

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
    const [userId, setUserId] = useState();
    const [userRegions, setUserRegions] = useState([]);
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
    
    
    const updateRegionsPosts = useCallback(()=>{
        let data = users
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
        .map((i)=>{
                return{
                    regions : i.regions? i.regions.slice(0,2):null
                }            
        })
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
        if(data.regions){ //관할 구역이 존재한다면?
            setUserId(data.userId)
            setRegionArray(data.regions)
            setRegionModal(true)
            setUserRegions(data.regions)
        }        
    }
    const authorityOnClick = (e, data) => {
        setAuthorityModal(true)
        setUserId(data.userId)
        const user = users.filter((i)=>i.userId===data.userId)[0]
        setSelectedUser(user)

        //console.log(selectedUser)

    }

    const authorityChange = () => {
        if(selectedUser.authority=="봉사자"){
            changeUserToAdmin(userId).then(()=>{
                //setAuthorityModal(false)
                window.location.reload()
            }).catch(error=>console.log(error))
        }else{
            changeAdminToUser(userId).then(()=>{
                //setAuthorityModal(false)
                window.location.reload()
            }).catch(error=>console.log(error))
        }
        
    }

    const authorityRegionChange = () => {
        editUserAdminRegion(userId, userRegions).then(()=>{
            window.location.reload()
        }).catch(error=>console.log(error))
    }

    const getMyAuthority = (e) => {
        if(e.target.value!="전체"){
            const certainAuthority = users.filter((i)=>i.authority==e.target.value)
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
            setPosts(certainAuthority)
        }else{
            updatePosts()
        }
    }
    const regionOnCheck = (e) => {
        console.log(e.target.value)
        regionArray.push(e.target.value)
    }

    const modalClose = () =>{
        setUserId(null);
        setUserRegions([]);
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
                getMyAuthority={getMyAuthority}
                regionOnCheck={regionOnCheck}


                regionModal={regionModal}
                regionArray={regionArray}
                regionOptions={regionOptions}
                authorityModal={authorityModal}

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