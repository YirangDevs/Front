import React from "react"
import ContentContainer from "../../containers/pages/mypage/ContentContainer"
import Header from "../../containers/redux/components/Header";



const MyPage = () => {

    return (
        <>
            <Header theme={"dark"} position={"static"} />
            <ContentContainer />

        </>
    )
}

export default MyPage