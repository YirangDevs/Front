import React, { useState, useEffect } from 'react';
import fetchAllData from "../../business/service/fetchAllData";
import fetchRegion from "../../business/service/fetchRegion";
import Pagination from "../../components/senior/Pagination";
import SelectBox from "../../components/atoms/SelectBox"
import TableBox from "../../components/atoms/TableBox"

const TableViewContainer = () => {
    const [seniors, setSeniors] = useState([]);
    const [region, setRegion] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [currentSenior, setCurrentSenior] = useState({})
    const [posts, setPosts] = useState([])

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
    const selectPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const selectSenior = (e) => {
        const primaryKey = e.target.parentNode.children[3].innerText //phoneNum
        const senior = seniors.filter((i)=>i.phone==primaryKey)[0]
        setCurrentSenior(senior)
    }





    return (
        <>

            <SelectBox width="20%" height="2rem"defaultValue={region} onChange={selectRegion} options={["전체","수성구","중구","동구","서구","남구","북구","달서구"]}/>
            <TableBox headList={["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위"]} bodyList={posts} primaryKey={"name"} onClick={(e)=>selectSenior(e)}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={seniors.length} paginate={selectPage}/>
        </>
    )


}

export default TableViewContainer;