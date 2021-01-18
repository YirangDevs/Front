import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : auto;
  height : auto;
  justify-content: center;
  align-items: center;
  font-size : 0.85rem;
`

const Label = styled.div`
  margin-top: 1rem;
  text-align: center;
`

const ButtonComponent = styled.div`
    ${props => {
    switch (props.size) {
        case "small":
            return `
                    padding : 16px;
                `
        case "large":
            return `
                    padding : 32px;
                `
        default:
            return `
                    padding : 24px;
                `
    }
}}
    border : 1px solid black;
    border-radius: 50%;
    background-color: rgba(255,255,255,0);
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width : 1rem;
`

const IconButton = ({ href, size, value, onClick, children}) => (
    <>
        <Wrapper>
            <ButtonComponent href={href} size={size} value={value} onClick={onClick}>
                {children}
            </ButtonComponent>
            <Label>{value ? value : null}</Label>
        </Wrapper>

    </>
)

IconButton.propTypes = {
    href: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    value: PropTypes.string,
    onClick: PropTypes.func
}

IconButton.defaultProps = {
    value: 'IconButton',
    onClick: undefined,
};

export default IconButton