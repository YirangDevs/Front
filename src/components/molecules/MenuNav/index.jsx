import React from "react"
import Button from "../../atoms/Button"
import {useHistory} from "react-router-dom"

const MenuNav = ({role}) => {
    const history = useHistory()
    return (
        <>

            <Button value="피봉사자 데이터 업로드" block onClick={
                ()=>{
                    history.push("/seniors")
                }
            }/>


            <Button value="봉사 공고글 관리" block onClick={
                ()=> {
                    history.push("/manage")
                }
            }/>

            <Button value="매칭 결과 확인" block onClick={
                ()=> {
                    history.push("/")
                }
            }/>
            {role==="SUPER_ADMIN"?
                <Button value="사용자 권한 관리" block onClick={
                    ()=> {
                        history.push("/userauthority")
                    }
                }/>
            :null}
                
        </>
    )
}

export default MenuNav