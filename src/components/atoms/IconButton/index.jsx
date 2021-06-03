import React, {memo} from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  height : auto;
  justify-content: center;
  align-items: center;
  padding : 1rem;
  border-radius : 5px;
  &:hover {
    background : #ECECEC;
  }
`

const Label = styled.div`
  font-family: NotoSansCJKKR sans-serif;
  font-size : 0.85rem;
  font-weight : 600;
  text-align: center;
  word-break: keep-all;
  cursor: pointer;
`

const ButtonComponent = styled.div`
    ${props => {
    switch (props.size) {
        case "small":
            return `
                    padding : 1rem;
                `
        case "large":
            return `
                    padding : 2rem;
                `
        default:
            return `
                    padding : 1.5rem;
                `
    }
}}
    //border : 2px solid black;
    //border-radius: 50%;
    background-color: rgba(255,255,255,0);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconButton = ({ href, size, value, onClick, children}) => (
    <>
        <Wrapper onClick={onClick}>
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