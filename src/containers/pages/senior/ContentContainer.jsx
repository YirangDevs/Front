import SeniorContent from "../../../components/organisms/senior/Content/"
import React, { useState, useEffect, useCallback} from "react"
import { useHistory } from "react-router-dom"
import getAllAreas from "../../../service/api/get/get_all_areas"
import getArea from "../../../service/api/get/get_area"
import XLSX from "xlsx";
import deleteSenior from "../../../service/api/delete/delete_senior";
import editSenior from "../../../service/api/put/edit_senior";
import postSenior from "../../../service/api/post/post_senior"
import seniorCheck from "../../../service/api/post/senior_check";
import store from "../../../store/store"
import action from "../../../store/actions/action"
import getMyRegion from "../../../service/api/get/get_my_region";
import NotificationPool from "../../../containers/redux/components/NotificationPool"


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
    const [myRegion, setMyRegion] = useState([]);
    const [errorToast, setErrorToast] = useState([]);
    const history = useHistory();
    const postsPerPage = 10
    const [needsTotal, setNeedsTotal] = useState(0)
    const [checkExcel, setCheckExcel] = useState(false)

   

    //const genderRef = createRef();
    //const genderRef = forwardRef();


    useEffect(() => {
        //selectBox 구성
        getMyRegion().then((data)=>{
            setMyRegion(data.regions)
        })           
        //피봉사자 표 출력                                                                                                                                            
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

    useEffect(()=>{
        if(checkExcel && errorToast.length > 0) {
            NotificationPool.api.add({
                title: "엑셀 업로드 실패",
                content: errorToast.join(""),
                status: "error"
            })
            setModal(false)
            setErrorToast([])
            setCheckExcel(false)
        }
    },[checkExcel, errorToast])

    const paginationOnClick = (e) => {
        setCurrentPage(e.target.innerText)
    }

    const selectRegion = (e) => {
        if (e.target.value === "지역선택") {
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

        RadioSelect(e.target, senior)

    }

    const nameOnChange = (e) => {
        const name = e.target.value
        setBufferSenior((state) => ({ ...state, name: name }))
    }
    const genderOnChange = (e) => {
        const sex = e.target.value
        setBufferSenior((state) => ({ ...state, sex: sex }))
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
        const numsOfRequiredVolunteers = e.target.value
        setBufferSenior((state) => ({ ...state, numsOfRequiredVolunteers: numsOfRequiredVolunteers }))
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
        else{
            setErrorToast((state) => {
                return [
                    ...state,
                    "수정 또는 삭제 작업을 완료한 후에 클릭해주세요.\n\n"
                ]
            })
        }

    }
    const editDeleteButton = () => {
        setButton(false)
    }
    const uploadOnClick = (e) => {
        e.target.parentNode.parentNode.previousSibling.click()
    }
    const editOnClick = (e) => {

        //genderRadioAbled(e)
        editSenior(bufferSenior.id, bufferSenior).then(res => {
            alert("수정 성공");
            addEditDeleteRender();
        }).catch(error=>console.log(error))


    }
    const deleteOnClick = (e) => {
        deleteSenior(bufferSenior.id).then(res => {
            alert("삭제 성공");
            addEditDeleteRender();
            setButton(true);
        }).catch(error=>console.log(error))
    }

    const postOnClick = () => {
        if(bufferSenior.name&&bufferSenior.sex&&bufferSenior.region&&bufferSenior.phone&&bufferSenior.type&&bufferSenior.date&&bufferSenior.priority&&bufferSenior.numsOfRequiredVolunteers&&bufferSenior.address){
            postSenior(bufferSenior).then(res=>{
                alert("추가 성공")
                addEditDeleteRender();
            }).catch((error)=>{
                const errorToast = []

                console.log(error)
                if(error.errorCode==="044"){
                    //errorToast.push("해당 날짜에 봉사활동이 존재하지 않습니다.");
                    setErrorToast((state) => {
                        return [
                            ...state,
                            "해당 날짜에 봉사활동이 존재하지 않습니다.\n\n"
                        ]
                    })
                }
                if(errorToast) alert(errorToast)
            })
        }else{
            //alert("채워지지 않은 칸이 존재합니다. 모든 칸을 채워주세요.")
            setErrorToast((state) => {
                return [
                    ...state,
                    "채워지지 않은 칸이 존재합니다. 모든 칸을 채워주세요.\n\n"
                ]
            })
        }
        
    }
    const addEditDeleteRender = () => {
        setBufferSenior({})
        getArea(region).then((data) => {
            console.log(data)
            setSeniors(data);
        }).catch(err=>
            {
                //console.log(err)
                if(err.errorCode==="044"){
                    console.log(err)
                    setSeniors([{id: null, name: "해당 지역의 피봉사자가 존재하지 않습니다.",address: null, date: null, numsOfRequiredVolunteers: null, phone: null, priority: null, region: null, sex: null, type: null }]);
                }
                
            })
        window.location.reload()
    }

    const postSeniorsOnClick = (e) => {
        seniorCheck(excelData).then(res => {
            store.dispatch(action.TRANSFER_SENIOR_TO_NOTICE__ACTION_FUNC({
                data: {

                    region: excelData[0].region,
                    dov: excelData[0].date,
                    nor: needsTotal,
                    excelData: excelData
                }
            }))
            history.push("/create")
        }).catch(err => {

            //const errorToast = []
            setErrorToast([])
            console.log(err)

            for (let i = 0; i < err.Errors.length; i++) {

                console.log("seniors check error" + err.Errors[i].errorCode + "/" + err.Errors[i].errorName)
                const errorCode = err.Errors[i].errorCode
                if (errorCode === "100") {
                    errorToast.push("파일의 형식이나 내용을 다시 확인해주세요.\n") //이부분 notification으로 올리는거// 에러코드 처리가 안됨
                }
                if (errorCode === "111") {
                    let errorNum = Number(err.Errors[i].errorName.substring(err.Errors[i].errorName.indexOf("[") + 1, err.Errors[i].errorName.indexOf("]"))) + 2
                    let errorName = err.Errors[i].errorName.split(".")[1]
                    let columns = {
                        'date': {'col': 'A', 'name': '봉사날짜'},
                        'name': {'col': 'B', 'name': '어르신 성함'},
                        'sex': {'col': 'C', 'name': '성별'},
                        'address': {'col': 'D', 'name': '주소'},
                        'phone': {'col': 'E', 'name': '전화번호'},
                        'type': {'col': 'F', 'name': '봉사유형'},
                        'priority': {'col': 'G', 'name': '어르신 우선순위'},
                        'numsOfRequiredVolunteers': {'col': 'H', 'name': '필요인원'}
                    }

                    let col = `${columns[errorName].col}${errorNum} (${columns[errorName].name})`
                    setErrorToast((state) => {
                        return [
                            ...state,
                            "업로드 된 엑셀 파일의 " + col + "에 형식상의 오류가 존재합니다\n\n"
                        ]
                    })
                    //errorToast.push("업로드 된 엑셀 파일의 " + col + "에 형식상의 오류가 존재합니다\n\n")
                }
                if (errorCode === "099") {
                    setErrorToast((state) => {
                        return [
                            ...state,
                            "업로드한 엑셀 파일에 통일되지 않은 지역 또는 날짜 데이터가 존재합니다.\n"
                        ]
                    })
                    //errorToast.push("업로드한 엑셀 파일에 통일되지 않은 지역 또는 날짜 데이터가 존재합니다.\n")
                }
                if (errorCode === "112") {
                    setErrorToast((state) => {
                        return [
                            ...state,
                            "업로드한 엑셀 파일에 중복된 피봉사자가 존재합니다.\n"
                        ]
                    })
                    //errorToast.push("업로드한 엑셀 파일에 중복된 피봉사자가 존재합니다.\n")
                }
                if (errorCode === "113") {
                    let errorNum = Number(err.Errors[i].errorName.substring(err.Errors[i].errorName.indexOf("[") + 1, err.Errors[i].errorName.indexOf("]"))) + 2
                    setErrorToast((state) => {
                        return [
                            ...state,
                            "업로드된 엑셀 파일의 " + errorNum + "행 데이터가 기존의 피봉사자와 중복됩니다.\n"
                        ]
                    })
                    //errorToast.push("업로드된 엑셀 파일의 "+ errorNum + "행 데이터가 기존의 피봉사자와 중복됩니다.\n")
                }
                if (errorCode === "119") {
                    setErrorToast((state) => {
                        return [
                            ...state,
                            "업로드 된 데이터의 지역이 본인의 관할구역에 속하지 않습니다.\n 본인의 관할 구역은 " + myRegion + "입니다."
                        ]
                    })
                    //errorToast.push("업로드 된 데이터의 지역이 본인의 관할구역에 속하지 않습니다.\n 본인의 관할 구역은 " + myRegion + "입니다.")
                }

                if(errorCode === "117"){
                    setErrorToast((state) => {
                        return [
                            ...state,
                            "업로드된 데이터의 날짜가 현재 날짜 이전입니다.\n\n"
                        ]
                    })
                }
                setCheckExcel(true)
            }
        })
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

    //피봉사자를 클릭했을 시에 라디오 버튼이 클릭되는 깽판코드....ㅎ
    const RadioSelect = (e, senior) => {
        e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstChild.firstChild.firstChild.children[1].firstChild.children[senior.sex==="남성"?0:1].firstChild.checked=true;
        e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstChild.firstChild.firstChild.children[2].firstChild.children[senior.type==="노력봉사"?0:1].firstChild.checked=true;
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
            <SeniorContent
                currentSenior={bufferSenior}
                region={region}
                posts={posts}
                seniors={seniors}
                myRegion={myRegion}

                errorToast={errorToast}

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

                paginationOnClick={paginationOnClick}
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
    )
}

export default ContentContainer