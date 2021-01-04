import SeniorContent from "../../pages/Seniors/SeniorContent"
import React, { useState, useEffect, useCallback, useRef } from "react"
import { useHistory } from "react-router-dom"
import getAllAreas from "../../service/api/get/get_all_areas"
import getArea from "../../service/api/get/get_area"
import styled from "styled-components"
import XLSX from "xlsx";
import deleteSenior from "../../service/api/delete/delete_senior";
import editSenior from "../../service/api/put/edit_senior";
import postSenior from "../../service/api/post/post_senior"
import seniorCheck from "../../service/api/post/senior_check";
import store from "../../store/store"
import action from "../../store/actions/action"

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const ContentContainer = () => {
    const [currentSenior, setCurrentSenior] = useState({
        id: 0,
        name: "",
        sex: "",
        region: "",
        phone: "",
        type: "",
        date: "",
        priority: 0,
        needs: "",
        address: ""
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

    //const genderInput = useRef(null);
    const genderInput = useRef();
    const typeInput = useRef();


    useEffect(() => {
        getAllAreas().then((data) => {
                setSeniors(data)
        }).catch(err=>console.log(err))
    }, [])


    useEffect(() => {
        currentSenior.id ? setButton(false) : setButton(true)
    }, [currentSenior])


    const updatePosts = useCallback(() => {
        let data = seniors
            .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
            .map((i) => {
                return {
                    name: i.name,
                    sex: i.sex,
                    region: i.region,
                    phone: i.phone,
                    type: i.type,
                    date: i.date,
                    priority: i.priority,
                    needs: i.numsOfRequiredVolunteers
                }
            })
        setPosts(data)
    }, [currentPage, seniors])
    useCallback(() => {
        updatePosts()
    }, [updatePosts])
    useEffect(() => {
        updatePosts()
    }, [seniors, updatePosts])

    useEffect(() => {
        updatePosts()
    }, [currentPage, updatePosts])

    const selectRegion = (e) => {
        if (e.target.value === "전체") {
            getAllAreas().then((data) => {
                setSeniors(data);
            }).catch(err=>console.log(err))
        } else {
            let region = e.target.value;
            getArea(region).then((data) => {
                setSeniors(data);
            }).catch(err=>console.log(err))
        }
        setRegion(e.target.value);
        setCurrentPage(1)
    }
    const selectPage = (e) => {
        setCurrentPage(e.target.innerText)

    };

    const selectSenior = (e) => {
        const primaryKey = e.target.parentNode.children[3].innerText //phoneNum
        const senior = seniors.filter((i) => i.phone === primaryKey)[0]
        setBufferSenior(senior)
        setCurrentSenior(senior)

        genderRadioDisabled(e)
    }

    const nameOnChange = (e) => {
        const name = e.target.value
        setBufferSenior((state) => ({ ...state, name: name }))
    }
    const genderOnChange = (e) => {
        const sex = e.target.value
        setBufferSenior((state) => ({ ...state, sex: sex }))
    }
    const genderRadioDisabled = (e) => {
        //genderInput.current.disabled=true;
    }
    const genderRadioAbled = (e) => {
        //
    }
    const typeOnChange = (e) => {
        const type = e.target.value
        setBufferSenior((state) => ({ ...state, type: type }))
    }
    const priorityOnChange = (e) => {
        const priority = e.target.value
        setBufferSenior((state) => ({ ...state, priority: priority }))
    }
    const needsOnChange = (e) => {
        const needs = e.target.value
        setBufferSenior((state) => ({ ...state, needs: needs }))
    }
    const dateOnChange = (e) => {
        const date = e.target.value
        setBufferSenior((state) => ({ ...state, date: date }))
    }
    const phoneOnChange = (e) => {
        const phone = e.target.value
        setBufferSenior((state) => ({ ...state, phone: phone }))
    }
    const regionOnChange = (e) => {
        const region = e.target.value
        setBufferSenior((state) => ({ ...state, region: region }))
    }
    const addressOnChange = (e) => {
        const address = e.target.value
        setBufferSenior((state) => ({ ...state, address: address }))
    }
    const addButton = () => {
        if (!bufferSenior.id) { setButton(true) }

    }
    const editDeleteButton = () => {
        setButton(false)
    }
    const uploadOnClick = (e) => {
        e.target.parentNode.parentNode.previousSibling.click()
    }
    const editOnClick = (e) => {

        genderRadioAbled(e)
        editSenior(bufferSenior.id, bufferSenior).then(res => {
            alert("수정 성공");
            addEditDeleteRender();
        }).catch(error=>console.log(error))


    }
    const deleteOnClick = (e) => {
        genderRadioAbled(e)
        deleteSenior(bufferSenior.id).then(res => {
            alert("삭제 성공");
            addEditDeleteRender();
            setButton(true);
        }).catch(error=>console.log(error))
    }

    const postOnClick = () => {
        postSenior(bufferSenior).then(res=>{
            addEditDeleteRender();
        }).catch(error=>console.log(error))
    }
    const addEditDeleteRender = () => {
        setBufferSenior({})
        getArea(region).then((data) => {
            setSeniors(data);
        }).catch(err=>console.log(err))
    }

    const postSeniorsOnClick = (e) => {
        seniorCheck(excelData).then(res => {
            alert("업로드 성공");
            store.dispatch(action.TRANSFER_SENIOR_TO_NOTICE__ACTION_FUNC({
                data: {
                    region: excelData[0].region,
                    dov: excelData[0].date,
                    nor: needsTotal,
                    excelData: excelData
                }
            }))
            history.push("/create")
        }).catch(err=>console.log(err))
    }

    const openModal = async (event) => {
        setModal(true);
        let input = event.target;
        let reader = new FileReader();
        reader.onload = function () {
            let fileData = reader.result;
            let wb = XLSX.read(fileData, { type: 'binary' });
            wb.SheetNames.forEach(function (sheetName) {
                const rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { raw: false });
                parsingData(rowObj)
            })
        }
        reader.readAsBinaryString(input.files[0])
    }

    const parsingData = (rowObj) => {


        const seniorjson = []

        let needsTotal = 0

        for (let i = 0; i < rowObj.length; i++) {
            const regionarray = rowObj[i]["주소"].split(" ")

            const addressarray = []
            for (let j = 2; j < regionarray.length; j++) {
                addressarray.push(regionarray[j])
            }
            const nameData = rowObj[i]["어르신 성함"]
            const sexData = rowObj[i]["성별"]
            const regionData = regionarray[1]
            const addressData = addressarray.join(" ")
            const phoneData = rowObj[i]["전화번호"]
            const typeData = rowObj[i]["봉사유형"]
            const dateData = rowObj[i]["봉사날짜"]
            const priorityData = rowObj[i]["어르신 우선순위"]
            const needsData = rowObj[i]["필요인원"]

            needsTotal = needsTotal + Number(needsData)
            const data = { name: nameData, sex: sexData, region: regionData, address: addressData, phone: phoneData, type: typeData, date: dateData, priority: priorityData, needs: needsData }

            seniorjson.push(data)
        }
        setNeedsTotal(needsTotal)
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

                genderInput={genderInput}

                selectRegion={selectRegion}
                selectPage={selectPage}
                selectSenior={selectSenior}
                closeModal={closeModal}

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
                excelData={excelData}
            >
            </SeniorContent>
        </Container>
    )
}

export default ContentContainer