import React, { useState, useEffect } from 'react';
import fetchAllData from '../../business/service/fetchAllData';
import fetchRegion from "../../business/service/fetchRegion";
import Posts from './Posts';
import Pagination from "./Pagination";
import SelectBox from "../atoms/SelectBox"
import TableBox from "../atoms/TableBox"

const RList = ({INPUT_SENIORS}) => {
    const [seniors, setSeniors] = useState([]);
    const [region, setRegion] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = seniors.slice(indexOfFirstPost, indexOfLastPost);
    const filteredPosts = currentPosts.map((i)=>{
        let  data = i
        delete data.id
        delete data.address
        return data
    })

    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        fetchAllData();
        
    }, [])

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
                    setSeniors(resolve);
                })
                .catch((e) => setSeniors([]));
        }
        setRegion(e.target.value);
    }
    


    return (
        <>
            <SelectBox width="20%" height="2rem"defaultValue={region} onChange={selectRegion} options={["전체","수성구","중구","동구","서구","남구","북구","달서구"]}/>
            <TableBox headList={["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위"]} bodyList={filteredPosts} primaryKey={"name"} onClick={(e)=>console.log(e.currentTarget)}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={seniors.length} paginate={paginate}/>
        </>
    )


}

export default RList;