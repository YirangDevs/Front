import React from "react"


import YirangDetail from "../../../molecules/YirangDetail/index"

const YirangFrom = ({
    isPlanningTeamVisible,
    isFrontTeamVisible,
    isBackTeamVisible,
    isDesignTeamVisible,
    planningOnclick,
    frontOnclick,
    backOnclick,
    designOnclick,

}) => {





    return (
        <>
            <YirangDetail isPlanningTeamVisible={isPlanningTeamVisible}
                isFrontTeamVisible={isFrontTeamVisible}
                isBackTeamVisible={isBackTeamVisible}
                isDesignTeamVisible={isDesignTeamVisible}
                planningOnclick={planningOnclick}
                frontOnclick={frontOnclick}
                backOnclick={backOnclick}
                designOnclick={designOnclick}></YirangDetail>
        </>
    )
}

export default YirangFrom