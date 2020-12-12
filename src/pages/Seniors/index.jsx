import React from "react"
//import ContentContainer from "../../containers/senior/ContentContainer"
import TopBar from "../../components/molecules/TopBar";
import SeniorContentContainer from "../../containers/senior/SeniorContentContainer";
//import SeniorContent from "./SeniorContent"

const Content = ({posts}) => {
    console.log({posts});
    return (
        <>
            <TopBar/>
            {/* <SeniorContent posts={posts}></SeniorContent> */}
            <SeniorContentContainer></SeniorContentContainer>
        </>
    )
}

export default Content