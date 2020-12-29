import React from "react"
import CheckBox from "../../atoms/CheckBox"

const RegionCheck = ["수성구", "동구", "서구", "남구", "북구", "중구", "달서구"]
const RegionCheckBoxGroup = ({dataTip}) => {
    return (
        <>
            <CheckBox options={RegionCheck} defaultChecked={dataTip}/>
        </>
    )
}

export default RegionCheckBoxGroup