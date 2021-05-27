import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import DefaultImg from "../../../img/ProfileDefaultImg.png"

const ProfileButtonComponent = styled.input.attrs(props => ({ type: "button" }))`
    ${props => {
    switch (props.size) {
        case "small":
            return `
                    width : 1.5rem;
                    height :  1.5rem;
                `
        case "large":
            return `
                    width : 2.5rem;
                    height :  2.5rem;
                `
        default:
            return `
                    width : 2rem;
                    height : 2rem;
                `
    }
    
}}

    ${props => (props.block) ? `width : 100%;` : null}
    ${props => (props.url) ? `background-image : url(`+ props.url+`);` : `background-image : url(`+DefaultImg+`);`}
    background-size : cover;
    background-repeat: no-repeat;
    background-position : center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    outline: 0;
    border : none;
    border-radius: 100%;
    padding : 0;
  
  @media screen and (max-width: 768px){
    display : none;
  }
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