/** 
 * @author: chaeeun 
 * @Date: 2020-11-22 22:32:15 
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-11-22 22:36:48
 */

import _ from "../../config/env"

let data = {

    /**
     * @description notice 생성
     * @method POST
     * @request @headers YAT token
     * @request @body data{title , content , region , nor , dov , tov , dod}
     */
    createNotice : async (data)=>{

        console.log(data)
        const res = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("YAT"),
            },
            body: JSON.stringify(data),
        }).then((res)=>{if(!res.ok){return res.json()} else{return res}});
        return await res
    },

    /**
     * @description noticeNum 받아오기
     * @method GET
     */
    getNum : async ()=>{
        const res = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/nums", {
            method: 'GET',
        });
        return await res.json();
    },

    /**
     * @description notice page 별로 받아오기 (6개씩)
     * @method GET
     * @query ?page = pageNum
     */
    getList : (pageNum) => {
        return fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices?page=" + Number(pageNum), {
            method: 'GET',
        }).then(res=>{
            if(res.ok){
                return res.json()
            }else{

               throw Error("No Page")
            }

        }).catch((e)=>{
            return [];
        })
    },

    /**
     * @description 특정 notice 가져오기
     * @method GET
     * @params /noticeID
     */
    getNotice : async (noticeID) =>{
        const res = await fetch (_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(noticeID),{
            method :'GET'
        });
        return await res.json();
    },

    
    /**
     * @description 특정 notice 수정하기
     * @method PUT
     * @request @headers YAT token
     * @request @body data{title , content , region , nor , dov , tov , dod}
     * @params /noticeID
     */
    updateNotice : async (updateID , data) =>{
        const res = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(updateID),{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("YAT"),
            },
            body: data,
        });
        return await res
    },




    /**
     * @description 특정 notice 삭제하기
     * @method DELETE
     * @params /삭제할 notice ID
     */
    deleteNotice : async (deleteID) =>{
        const res = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(deleteID),{
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("YAT"),
            }
        });
        return await res;
    },

    /**
     * @description 특정 activity 삭제하기
     * @method DELETE
     * @params /삭제할 activity ID
     */
    deletePowerNotice : async (deleteID)=>{
        const res = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/force/" + Number(deleteID),{
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("YAT"),
            }
        });
        return await res;
    }
}

export default data