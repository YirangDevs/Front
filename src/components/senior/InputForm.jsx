import React from "react"
import DetailAddressForm from "./DetailAddressForm"
import NameGenderForm from "./NameGenderForm"
import PriorityDatePhoneForm from "./PriorityDatePhoneForm"
import VolunteerRegionForm from "./VolunteerRegionForm"
import VolunteerTypeForm from "./VolunteerTypeForm"

const InputForm = () => (
    <div className="input">
            <NameGenderForm></NameGenderForm>
            <VolunteerTypeForm></VolunteerTypeForm>
            <PriorityDatePhoneForm></PriorityDatePhoneForm>
            <VolunteerRegionForm></VolunteerRegionForm>
            <DetailAddressForm></DetailAddressForm>
    </div>
)

export default InputForm