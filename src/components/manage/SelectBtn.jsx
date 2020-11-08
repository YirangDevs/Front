//Select
import React from 'react'
import _ from "../../config/env"
import { Link } from "react-router-dom";

const SelectBtn = (props) => {

    const updateButton = () => {
        if (!props.selectId) {
            alert("게시물을 선택해 주세요")
            console.log("Update ERROR(NOT select)")
            window.history.back();
        }
    }
    const deleteButton = () => {
        console.log(props.selectTitle, props.selectId)
        if (props.selectTitle) {
            console.log("DELETE working,,,,");
            new Promise(async (resolve, reject) => {
                let DeleteSelect = await fetch(_.HOST_URL + ":8080/v1/apis/manage/notices/" + Number(props.selectId), {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("YAT"),
                    }
                })
                if (DeleteSelect.ok) {
                    console.log("200 ok")
                    console.log(DeleteSelect)
                    resolve(DeleteSelect)
                    console.log("Delete Success");
                    alert("💥게시글 삭제 성공!💥")
                    window.location.reload()
                }
                else {
                    if (window.confirm("이게시물을 삭제하면 게시물과 관련된 모든 활동이 삭제됩니다. 삭제하시겠습니까?")) {
                        console.log("i have  a power");

                        await fetch(_.HOST_URL + ":8080/v1/apis/manage/notices/force/" + Number(props.selectId), {
                            method: "DELETE",
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("YAT"),
                            }
                        }).then((response) => {
                            console.log(response)
                            console.log("force 삭제 성공");
                            alert("💥게시글 및 활동 삭제 성공!💥")
                            window.location.reload()
                        })

                    }
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
                <Link to="/update" >
                    <div className="update__btn" onClick={updateButton}>수정<span role="img" aria-label="update">🚧</span></div>
                </Link>
                <div className="delete__btn" onClick={deleteButton}>삭제<span role="img" aria-label="delete">🗑️</span></div>

            </div>
        </>
    )
}

export default SelectBtn;