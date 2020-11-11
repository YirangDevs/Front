import React, { useState, useEffect } from 'react';
import fetchAllData from '../../business/service/fetchAllData';
import fetchRegion from "../../business/service/fetchRegion";
import Posts from './Posts';
import Pagination from "./Pagination";

const RList = () => {
    const [seniors, setSeniors] = useState(null);
    const [error, setError] = useState(null);
    const [region, setRegion] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    useEffect(() => {
        fetchAllData(setSeniors, setError);
        
    }, [])

    if (error) return console.log('에러가 발생하였습니다')
    if (!seniors) return null;

    const selectRegion = (e) => {
        if (e.target.value==="all") {
            fetchAllData(setSeniors, setError);
        }else {
            fetchRegion(setSeniors, setError, e);
        }
        setRegion(e.target.value);
    }
    
    //console.log(seniors)
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = seniors.slice(indexOfFirstPost, indexOfLastPost);
    
    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    


    return (
        <>  
        <select className="select-region__dropdown" defaultValue={region} onChange={selectRegion}>
            <option value="all">전체</option>
            <option value="수성구">수성구</option>
            <option value="중구">중구</option>
            <option value="동구">동구</option>
            <option value="서구">서구</option>
            <option value="남구">남구</option>
            <option value="북구">북구</option>
        </select>
        <Posts posts={currentPosts}></Posts>
        <Pagination postsPerPage={postsPerPage} totalPosts={seniors.length} paginate={paginate}/>
        </>
    )


}

export default RList;