import React from "react"
//import ContentContainer from "../../containers/senior/ContentContainer"
import TopBar from "../../components/molecules/TopBar";
import SeniorContent from "./SeniorContent"

const Content = ({posts}) => {
    console.log({posts});
    return (
        <>
            <TopBar/>
            {/* <ContentContainer/> */}
            <SeniorContent posts={posts}></SeniorContent>
        </>
    )
}

export default Content