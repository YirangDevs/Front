import React from "react"
import XLSX from "xlsx"
import Preview from "../../containers/senior/Preview"
import Index from "../atoms/FunctionButton"

const Function = ({UPLOAD_SENIORS, SET_BUTTON, id}) => {
    const onClick = () => {
        document.getElementById('selectedFile').click();
    }


    const openModal = async (event) => {
      
        let input = event.target;
        let reader = new FileReader();
        reader.onload = function(){
            let fileData = reader.result;
            let wb = XLSX.read(fileData, {type : 'binary'});
            wb.SheetNames.forEach(function(sheetName){
            const rowObj =XLSX.utils.sheet_to_json(wb.Sheets[sheetName], {raw:false});
            parsingData(rowObj)
            })
        }
        reader.readAsBinaryString(input.files[0])
        
        const parsingData = (rowObj) => {
            
            const addressarray=[]
            const seniorjson=[]

            for(let i=0; i<rowObj.length; i++){
                const regionarray = rowObj[i].주소.split(" ")          
            
            
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

            seniorjson.push({name: nameData, sex: sexData, region : regionData, address : addressData, phone : phoneData, type : typeData, date : dateData, priority : priorityData})
            }
            getData(seniorjson)

        }
        const getData = (rowObj) => {
            UPLOAD_SENIORS({
                isModalOpen: true,
                data: rowObj
            })
        }

    };
    const addbutton = () => {
        if(!id){
            SET_BUTTON({button: true});
        }
        
    }

    const editdeletebutton = () => {
        SET_BUTTON({button : false});
    }
    

     return(
    <>
        <div className="function">
            <input type="file" id="selectedFile" name="aFile" accept=".xls,.xlsx" onChange={openModal}/>
            <Index width="29.5%" height="3rem" value="업로드" onClick={onClick}/>
            <Index width="29.5%" height="3rem" margin="0 1%" value="추가" onClick={addbutton}/>
            <Index width="29.5%" height="3rem" value="수정/삭제" onClick={editdeletebutton}/>
            <Preview/>
        </div>
    </>
    )
    }
    

export default Function