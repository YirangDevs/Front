import React, {memo} from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : auto;
  height : auto;
  justify-content: center;
  align-items: center;
`

const Label = styled.div`
  margin-top: 1rem;
  font-size : 0.85rem;
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
    border : 2px solid black;
    border-radius: 50%;
    background-color: rgba(255,255,255,0);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconButton = ({ href, size, value, onClick, children}) => (
    <>
        <Wrapper>
            <ButtonComponent href={href} size={size} value={value} onClick={onClick}>
                {children}
            </ButtonComponent>
            {value ? <Label>{value}</Label> : null}

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

export default memo(IconButton)