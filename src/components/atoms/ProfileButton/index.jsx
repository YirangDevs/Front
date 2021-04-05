import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import DefaultImg from "../../../img/ProfileDefaultImg.png"

const ProfileButtonComponent = styled.input.attrs(props => ({ type: "button" }))`
    ${props => {
    switch (props.size) {
        case "small":
            return `
                    padding : 2px 8px;
                `
        case "large":
            return `
                    padding : 12px 20px;
                `
        default:
            return `
                    padding : 8px 16px;
                `
    }
}}

    ${props => (props.block) ? `width : 100%;` : null}
    ${props => (props.url) ? `background-image : url(`+ props.url+`);` : `background-image : url(`+DefaultImg+`);`}
    background-size : cover;
    background-repeat: no-repeat;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    outline: 0;
    border : none;
    border-radius: 50%;
    
    
`

const ProfileButton = ({size, url,  onClick}) => (
    <>
        <ProfileButtonComponent size={size} url={url} onClick={onClick}>

        </ProfileButtonComponent>
    </>
)

ProfileButton.propTypes = {
    onClick: PropTypes.func
}

ProfileButton.defaultProps = {
    onClick: undefined,
};

export default ProfileButton