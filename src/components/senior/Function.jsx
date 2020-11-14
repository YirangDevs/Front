import React from "react"
import XLSX from "xlsx"
import Preview from "../../containers/senior/Preview"
import ButtonBox from "../atoms/ButtonBox"

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
            const namedata = rowObj[i]["어르신 성함"]
            const sexdata = rowObj[i]["성별"]
            const regiondata=regionarray[1]
            const addressdata = addressarray.join(" ")
            const phonedata = rowObj[i]["전화번호"]
            const typedata = rowObj[i]["봉사유형"]
            const datedata = rowObj[i]["봉사날짜"]
            const prioritydata = rowObj[i]["어르신 우선순위"]

            seniorjson.push({name: namedata, sex: sexdata, region : regiondata, address : addressdata, phone : phonedata, type : typedata, date : datedata, priority : prioritydata})
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
            <ButtonBox width="29.5%" height="3rem" background="#ccd4e0" color="#707070" border="0" value="업로드" onClick={onClick}/>
            <ButtonBox width="29.5%" height="3rem" background="#ccd4e0" color="#707070" border="0" margin="0 1%" value="추가" onClick={addbutton}/>
            <ButtonBox width="29.5%" height="3rem" background="#ccd4e0" color="#707070" border="0" value="수정/삭제" onClick={editdeletebutton}/>
            <Preview/>
        </div>
    </>
    )
    }
    

export default Function