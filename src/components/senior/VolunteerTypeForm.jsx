import React from "react"

const VolunteerTypeForm = (props) => {
    const onClick = (e) => {
        const value = e.target.value
        props.INPUT_SENIORS({
            senior : {
                type: value
            }
        })
    }

    return(
    <>
        <div className="item">
                <input type="radio" name="type" checked={props.type==="work"} onClick={onClick} className="volunteerType" value="work"/>노력봉사
                <input type="radio" name="type" checked={props.type==="talk"} onClick={onClick} className="volunteerType" value="talk"/>말벗봉사
        </div>
    </>
    )
    
    }

export default VolunteerTypeForm