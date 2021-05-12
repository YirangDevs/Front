import React, { useState } from 'react'
import IntroContent from "../../../components/organisms/Intro/Content/index"



const ContentContainer = ({ role }) => {

    const [isTeamYirang, setTeamYirang] = useState(false);
    const teamYirangOnclick = () => {

        (isTeamYirang) ?
            setTeamYirang(false)
            : setTeamYirang(true)

    }
    return (
        <>
            <IntroContent
                role={role}
                isTeamYirang={isTeamYirang}
                teamYirangOnclick={teamYirangOnclick}
            >
            </IntroContent>
        </>
    )
}

export default ContentContainer