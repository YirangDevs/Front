import React from "react"
import SelectBox from "../../components/atoms/SelectBox"

const options = ["지역선택", "수성구", "동구", "서구", "남구", "북구", "중구", "달서구"]
const TableView = () => {
    return (
        <SelectBox size="small" options={options}></SelectBox>
    )
}

export default TableView