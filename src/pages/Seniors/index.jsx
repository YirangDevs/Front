import React from "react"
//import ContentContainer from "../../containers/senior/ContentContainer"
import TopBar from "../../components/molecules/TopBar/index";
import SeniorContent from "./SeniorContent"

const Content = ({ posts }) => {
    console.log({ posts });
    return (
        <>
            <TopBar absolute />
            {/* <ContentContainer/> */}
            <SeniorContent posts={posts}></SeniorContent>
        </>
    )
}

export default Content