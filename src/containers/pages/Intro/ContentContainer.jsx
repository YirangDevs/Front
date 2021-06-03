import React, { useState } from 'react'
import IntroContent from "../../../components/organisms/Intro/Content/index"



const ContentContainer = ({ role }) => {

    const [isTeamYirangVisible, setTeamYirangVisible] = useState(false);

    const teamYirangModal = {
        show: () => setTeamYirangVisible(true),
        close: () => setTeamYirangVisible(false)
    }

    const [isPlanningTeamVisible, setPlanningTeamVisible] = useState(false);
    const [isFrontTeamVisible, setFrontTeamVisible] = useState(true);
    const [isBackTeamVisible, setBackTeamVisible] = useState(false);
    const [isDesignTeamVisible, setDesignTeamVisible] = useState(false);

    const planningTeamTab = {
        show: () => setPlanningTeamVisible(true),
        close: () => setPlanningTeamVisible(false)
    }

    const frontTeamTab = {
        show: () => setFrontTeamVisible(true),
        close: () => setFrontTeamVisible(false)
    }

    const backTeamTab = {
        show: () => setBackTeamVisible(true),
        close: () => setBackTeamVisible(false)
    }

    const designTeamTab = {
        show: () => setDesignTeamVisible(true),
        close: () => setDesignTeamVisible(false)
    }

    const planningOnclick = () => {
        planningTeamTab.show()
        frontTeamTab.close()
        backTeamTab.close()
        designTeamTab.close()
    }

    const frontOnclick = () => {
        planningTeamTab.close()
        frontTeamTab.show()
        backTeamTab.close()
        designTeamTab.close()
    }

    const backOnclick = () => {
        planningTeamTab.close()
        frontTeamTab.close()
        backTeamTab.show()
        designTeamTab.close()
    }

    const designOnclick = () => {
        planningTeamTab.close()
        frontTeamTab.close()
        backTeamTab.close()
        designTeamTab.show()
    }


    return (
        <>
            <IntroContent
                role={role}
                isTeamYirangVisible={isTeamYirangVisible}
                teamYirangModal={teamYirangModal}
                isPlanningTeamVisible={isPlanningTeamVisible}
                isFrontTeamVisible={isFrontTeamVisible}
                isBackTeamVisible={isBackTeamVisible}
                isDesignTeamVisible={isDesignTeamVisible}
                planningOnclick={planningOnclick}
                frontOnclick={frontOnclick}
                backOnclick={backOnclick}
                designOnclick={designOnclick}
            >
            </IntroContent>
        </>
    )
}

export default ContentContainer