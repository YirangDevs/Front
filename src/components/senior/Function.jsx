import React, { useState } from "react"
import XLSX from "xlsx"
import Preview from "./Preview"

const Function = () => {
    let [isModalOpen, setModal] = useState(false);
    let [data, setData] = useState(null);

    const onClick = () => {
        document.getElementById('selectedFile').click();
        setModal(true);
    }

    const openModal = (event) => {
      
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function(){
            var fileData = reader.result;
            var wb = XLSX.read(fileData, {type : 'binary'});
            wb.SheetNames.forEach(function(sheetName){
              var rowObj =XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
              const seniors=JSON.stringify(rowObj)
              setData(seniors);
            })
        }
        reader.readAsBinaryString(input.files[0])
        setModal(true);
    };

    const closeModal = () =>{
        setModal(false);
    };

     return(
    <>
        <div className="function">
            <input type="file" id="selectedFile" onChange={openModal}/>
            <input type="button" className="select-function" value="업로드" onClick={onClick} />
            <input type="button" className="select-function" value="추가"/>
            <input type="button" className="select-function" value="수정/삭제"/>
            {data?(
          <Preview isOpen={isModalOpen} close={closeModal} seniors={data}/>
        ):null}
        </div>
    </>
    )
    }
    

export default Function