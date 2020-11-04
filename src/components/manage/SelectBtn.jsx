//Select
import React from 'react'
import _ from "../../config/env"
const SelectBtn = (props) => {

    const updateButton = () => {

    }

    const deleteButton = () => {



        console.log(props.selectTitle, props.selectId)
        if (props.selectTitle) {
            console.log("DELETE working,,,,");
            new Promise(async (resolve, reject) => {
                let DeleteSelect = await fetch(_.HOST_URL + ":8080/v1/apis/manage/notices/force/" + Number(props.selectId), {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("YAT"),
                    }
                })
                if (DeleteSelect.ok) {
                    console.log("200 ok")
                    console.log(DeleteSelect)
                    resolve(DeleteSelect)
                    console.log("Delete Success"); alert("💥게시글 삭제 성공!💥")
                    window.location.reload()
                }
                else {

                    console.log(DeleteSelect)
                    console.log("Delete ERROR ")
                }
            })
        } else {
            alert("게시물을 선택해 주세요")
            console.log("Delete ERROR(NOT select)")
        }
    }


    return (
        <>
            <div className="select__btn">
                <div className="update__btn" onClick={updateButton}>수정<span role="img" aria-label="update">🚧</span></div>
                <div className="delete__btn" onClick={deleteButton}>삭제<span role="img" aria-label="delete">🗑️</span></div>
            </div>
        </>
    )
}

export default SelectBtn;