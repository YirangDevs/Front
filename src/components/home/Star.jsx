import React from 'react'
import YAT from "../../util/Yat/yat"

import fetchPost from "../../star/fetchPost"
import fetchDelete from "../../star/fetchDelete"

const Star = (props) => {

    const changeRoll = (props) => {
        console.log(props.logined);
        if (props.logined) {
            if (props.role === "VOLUNTEER") {
                YAT.exist()
                    .then((YAT) => fetchPost(YAT))
                    .then((response) => response.headers.get('Authorization').split(" ")[1])
                    .then((token) => {
                        console.log("go to admin");
                        localStorage.setItem("YAT", token);
                        props.SET_USER({
                            user: {
                                role: "ADMIN"
                            }

                        })
                        console.log("go to admin work");

                    })
            }
            else {
                YAT.exist()
                    .then((YAT) => fetchDelete(YAT))
                    .then((response) => response.headers.get('Authorization').split(" ")[1])
                    .then((token) => {
                        console.log("go to villunteer");
                        localStorage.setItem("YAT", token);
                        props.SET_USER({
                            user: {
                                role: "VOLUNTEER"
                            }

                        })
                        console.log("go to villunteer work");
                    })
            }



        }

    }

    const onClick = () => {

        changeRoll(props);
    }

    return (
        <>
            <div className="star-image container__star-image" onClick={onClick}>
            </div>
        </>

    )

}

export default Star;


// 로컬 YAT 받아와서 post로 넘겨주고 
// 다시 get해서 role 바꿔주기 