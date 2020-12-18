import SeniorContent from "../../pages/Seniors/SeniorContent"
import React, {useState, useEffect, useCallback} from "react"
import {useHistory} from "react-router-dom"
import fetchAllData from "../../business/service/fetchAllData"
import fetchRegion from "../../business/service/fetchRegion"
import styled from "styled-components"
import XLSX from "xlsx";
import deleteSeniorFromServer from "../../business/service/delete_senior_from_server";
import editSeniorFromServer from "../../business/service/edit_senior_from_server";
import postSeniorToServer from "../../business/service/post_senior_to_server"
import postSeniorsToServer from "../../business/service/post_seniors_to_server";
import store from "../../store/store"
import action from "../../store/actions/action"

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const SeniorContentContainer = () => {
    const [currentSenior, setCurrentSenior] = useState({
        id : 0,
        name: "",
        sex : "",
        region : "",
        phone : "",
        type : "",
        date: "",
        priority : 0,
        needs : ""
    })
    const [seniors, setSeniors] = useState([]);
    const [region, setRegion] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([])
    const [bufferSenior, setBufferSenior] = useState({});
    const [button, setButton] = useState(true);
    const [modal, setModal] = useState(false);
    const [excelData, setExcelData] = useState([]);
    const history = useHistory();
    const postsPerPage = 10
    
    const [needsTotal, setNeedsTotal] = useState(0)


    useEffect(() => {
        fetchAllData()
            .then((data) => {
                setSeniors(data)

            })
            .catch((e) => setSeniors([]));

    }, [])
    
    
    useEffect(()=>{
        currentSenior.id? setButton(false) : setButton(true)
    },[currentSenior])


    const updatePosts = useCallback(() =>{
        let data = seniors
                    .slice((currentPage-1) * postsPerPage, currentPage * postsPerPage )
                    .map((i)=>{

                
                        return {
                            name : i.name,
                            sex : i.sex,
                            region : i.region,
                            phone : i.phone,
                            type : i.type,
                            date: i.date,
                            priority : i.priority,
                            needs : i.needs

                        }
                    })
        setPosts(data)
    }, [currentPage, seniors])
    useCallback(()=>{
        updatePosts()
    },[updatePosts])
    useEffect(()=>{
        updatePosts()
    }, [seniors, updatePosts])

    useEffect(()=>{
        updatePosts()
    }, [currentPage, updatePosts])

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
        const senior = seniors.filter((i)=>i.phone===primaryKey)[0]
        setBufferSenior(senior)
        setCurrentSenior(senior)

        genderRadioDisabled(e)
    }

    const nameOnChange = (e) => {
        const name=e.target.value
        setBufferSenior((state)=>({...state, name:name}))
    }
    const genderOnChange = (e) => {
        const sex=e.target.value
        setBufferSenior((state)=>({...state, sex:sex}))
        console.log(e.target)
    }
    const genderRadioDisabled=(e)=>{
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[1].children[0].disabled=true;
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[1].children[1].disabled=true;
    }
    const genderRadioAbled = (e) => {
        e.target.parentNode.previousSibling.firstChild.lastChild.children[0].disabled=false;
        e.target.parentNode.previousSibling.firstChild.lastChild.children[1].disabled=false;
    }
    const typeOnChange = (e) => {
        //console.log("눌림")
        const type=e.target.value
        setBufferSenior((state)=>({...state, type:type}))
    }
    const priorityOnChange = (e) => {
        const priority=e.target.value
        setBufferSenior((state)=>({...state, priority:priority}))
    }
    const needsOnChange = (e) => {
        const needs=e.target.value
        setBufferSenior((state)=>({...state, needs:needs}))
    }
    const dateOnChange = (e) => {
        const date=e.target.value
        setBufferSenior((state)=>({...state, date:date}))
    }
    const phoneOnChange = (e) => {
        const phone=e.target.value
        setBufferSenior((state)=>({...state, phone:phone}))
    }
    const regionOnChange = (e) => {
        const region=e.target.value
        setBufferSenior((state)=>({...state, region:region}))
    }
    const addressOnChange = (e) => {
        const address=e.target.value
        setBufferSenior((state)=>({...state, address:address}))
    }
    const addButton = () => {
        if(!bufferSenior.id){ setButton(true) }
        
    }
    const editDeleteButton = () => {
        setButton(false)
    }
    const uploadOnClick = (e) => {
        e.target.parentNode.parentNode.previousSibling.click()
    }
    const editOnClick = async (e) => {
        genderRadioAbled(e)
        await editSeniorFromServer(bufferSenior.id, bufferSenior).then(res=>{
            if(res.ok){ alert("수정 성공"); }
        })
        
        addEditDeleteRender();
        
    }
    const deleteOnClick = async (e) => {
        genderRadioAbled(e)
        await deleteSeniorFromServer(bufferSenior.id).then(res=>{
            if(res.ok){alert("삭제 성공"); }
        })
        addEditDeleteRender();
        setButton(true);
        
    }
    
    const postOnClick = async () => {
        //console.log(bufferSenior)
        await postSeniorToServer(bufferSenior).then(res=>{
            if(res.ok){ alert("추가 성공");}
        })
        addEditDeleteRender();
    }
    const addEditDeleteRender = () => {
        setBufferSenior({})
        console.log(bufferSenior)
        fetchRegion(region)
                .then((resolve) => {
                    console.log(resolve)
                    setSeniors(resolve);
                })
                .catch((e) => setSeniors([]));
    }

    const postSeniorsOnClick = (e) => {
        console.log(excelData)
        postSeniorsToServer(excelData).then(res=>{
            if(res.ok){ 
                history.push("/create")
                alert("업로드 성공");
                store.dispatch(action.TRANSFER_SENIOR_TO_NOTICE__ACTION_FUNC({
                    data:{
                        region: excelData[0].region,
                        date : excelData[0].date,
                        needs : needsTotal
                }}))
                
            }
            console.log(res)
            return res.json()
            
        }).then(res=>alert(res))
    }

    const openModal = async (event) => {
        console.log("열림")
        setModal(true);
        let input = event.target;
        let reader = new FileReader();
        reader.onload = function () {
            let fileData = reader.result;
            let wb = XLSX.read(fileData, {type: 'binary'});
            wb.SheetNames.forEach(function (sheetName) {
                const rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], {raw: false});
                console.log(rowObj)
                parsingData(rowObj)
            })
        }
        reader.readAsBinaryString(input.files[0])
    } 
    
    const parsingData = (rowObj) => {

        console.log(rowObj)
        const addressarray=[]
        const seniorjson=[]
        
        let needsTotal=0

        for(let i=0; i<rowObj.length; i++){
            const regionarray = rowObj[i]["주소"].split(" ")

            for(let j=2; j<regionarray.length; j++){
                addressarray.push(regionarray[j])
            }
            const nameData = rowObj[i]["어르신 성함"]
            const sexData = rowObj[i]["성별"]
            const regionData=regionarray[1]
            const addressData = addressarray.join(" ")
            const phoneData = rowObj[i]["전화번호"]
            const typeData = rowObj[i]["봉사유형"]
            const dateData = rowObj[i]["봉사날짜"]
            const priorityData = rowObj[i]["어르신 우선순위"]
            const needsData = rowObj[i]["필요인원"]

            needsTotal=needsTotal+Number(needsData)

            seniorjson.push({name: nameData, sex: sexData, region : regionData, address : addressData, phone : phoneData, type : typeData, date : dateData, priority : priorityData, needs : needsData})
            
        }
            setNeedsTotal(needsTotal)
            console.log(needsTotal)
        
        setExcelData(seniorjson)
 
    }

     const closeModal = () => {
        setModal(false)
     }

     return (
         <Container>
             <SeniorContent 
                currentSenior={bufferSenior}
                region={region}
                posts={posts}
                seniors={seniors}

                selectRegion={selectRegion}
                selectPage={selectPage}
                selectSenior={selectSenior}
                closeModal = {closeModal}

                nameOnChange={nameOnChange}
                genderOnChange={genderOnChange}
                typeOnChange={typeOnChange}
                priorityOnChange={priorityOnChange}
                needsOnChange={needsOnChange}
                dateOnChange={dateOnChange}
                phoneOnChange={phoneOnChange}
                regionOnChange={regionOnChange}
                addressOnChange={addressOnChange}

                postSeniorsOnClick={postSeniorsOnClick}
                postOnClick={postOnClick}
                editOnClick={editOnClick}
                deleteOnClick={deleteOnClick}
                uploadOnClick={uploadOnClick}
                addButton={addButton}
                editDeleteButton={editDeleteButton}
                uploadFile={openModal}
                button={button}
                isModalOpen={modal}
                excelData = {excelData}
                >
             </SeniorContent>
         </Container>
     )
}

export default SeniorContentContainer