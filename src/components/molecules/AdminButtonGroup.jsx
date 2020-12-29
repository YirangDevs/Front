import React from "react"
import Button from "../atoms/Button"
import {Link} from "react-router-dom"
const AdminButtonGroup = () => {
    return (
        <>
            <Link to="/seniors">
            <Button value="피봉사자 데이터 업로드" block/></Link>
            <Link to="/manage">
            <Button value="봉사 공고글 관리" block/></Link>
            <Link to="/">
            <Button value="매칭 결과 확인" block/></Link>
            <Link to="/userauthority">
            <Button value="사용자 권한 관리" block/></Link>
        </>
    )
}

export default AdminButtonGroup