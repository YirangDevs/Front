import React from "react"
import DetailAddressForm from "../../containers/senior/DetailAddressForm"
import NameGenderForm from "../../containers/senior/NameGenderForm"
import PriorityDatePhoneForm from "../../containers/senior/PriorityDatePhoneForm"
import VolunteerRegionForm from "../../containers/senior/VolunteerRegionForm"
import VolunteerTypeForm from "../../containers/senior/VolunteerTypeForm"

const InputForm = () => (
    <div className="senior__input">
            <NameGenderForm></NameGenderForm>
            <VolunteerTypeForm></VolunteerTypeForm>
            <PriorityDatePhoneForm></PriorityDatePhoneForm>
            <VolunteerRegionForm></VolunteerRegionForm>
            <DetailAddressForm></DetailAddressForm>
    </div>
)

export default InputForm