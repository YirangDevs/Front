import React from "react"
import ContentContainer from "../../containers/pages/profile/ContentContainer"
import Header from "../../containers/redux/components/Header";


const Profile = () => {

    return (
        <>
            <Header theme={"dark"} position={"static"} />
            <ContentContainer />

        </>
    )
}

export default Profile