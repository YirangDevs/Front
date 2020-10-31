import React from 'react'
import store from '../../store/store'
import YAT from "../../business/service/yat"

import fetchPost from "../../star/fetchPost"
import fetchDelete from "../../star/fetchDelete"
const Star = ({ SET_USER }) => {

    const changeRoll = () => {
        if (store.getState().login_reducer.logined) {
            if (store.getState().user_reducer.role === "VOLUNTEER") {
                YAT.exist()
                    .then((YAT) => fetchPost(YAT))
                    .then((response) => response.headers.get('Authorization').split(" ")[1])
                    .then((token) => {
                        console.log("go to admin");
                        localStorage.setItem("YAT", token);
                        SET_USER({
                            user: {
                                role: "ADMIN"
                            }

                        })
                        console.log("go to admin okok");
                        // let RESET_TOKEN = YAT.decode(token)
                        // console.log(RESET_TOKEN);
                        //     console.log(RESET_TOKEN);
                    })
            }
            else {
                YAT.exist()
                    .then((YAT) => fetchDelete(YAT))
                    .then((response) => response.headers.get('Authorization').split(" ")[1])
                    .then((token) => {
                        console.log("go to villunteer");
                        localStorage.setItem("YAT", token);
                        SET_USER({
                            user: {
                                role: "VOLUNTEER"
                            }

                        })
                        console.log("go to villunteer okok");
                        //  let RESET_TOKEN = YAT.decode(token)
                        //  console.log(RESET_TOKEN);
                        //      console.log(RESET_TOKEN);
                    })
            }


            /**
             * @role 바꾸기
             */
            // else {
            //     YAT.exist()
            //         .then((token) => {
            //             let RESET_TOKEN = YAT.decode(token);
            //             console.log(RESET_TOKEN);
            //             console.log(RESET_TOKEN.role);
            //             RESET_TOKEN.role = "VOLUNTEER";
            //             console.log(RESET_TOKEN.role);
            //         })
            // }

            // .then((token) => {
            //     let RESET_TOKEN = YAT.decode(token)
            //     console.log(RESET_TOKEN);

            //     fetch(_.HOST_URL + ":8000/v1/apis/admins", {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             Authorization: "Bearer" + YAT
            //         },
            //     }).then(res => console.log("ok"))
            // })
            // .then(res => res.headers).then(header => header.get("Authorization"))
            // .then(res => console.log("ok"))
        }

    }

    const onClick = () => {
        changeRoll();
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