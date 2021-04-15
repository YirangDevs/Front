import React, {memo} from "react"
import ContentContainer from "../../containers/pages/match/ContentContainer"
import Header from "../../containers/redux/components/Header";



const Match = () => {

    return (
        <>
            <Header theme={"dark"} position={"static"} />
            <ContentContainer />

        </>
    )
}

export default memo(Match)