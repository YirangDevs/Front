import React from "react"

const VolunteerRegionForm = () => (
    <>
        <div className="item">
            <select className="select-region">
                <option value="all">봉사지역</option>
                <option value="suseoungu">수성구</option>
                <option value="junggu">중구</option>
                <option value="donggu">동구</option>
                <option value="seogu">서구</option>
                <option value="namgu">남구</option>
                <option value="bukgu">북구</option>
            </select>
        </div>
    </>
)

export default VolunteerRegionForm