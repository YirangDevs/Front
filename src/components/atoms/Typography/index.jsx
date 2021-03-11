import React from 'react'
import styled from 'styled-components'



const Typo = styled.div`
font-size : ${props => (props.size) || '1rem'};
color : ${props => (props.color)};
background-color : ${props => (props.backgroundColor)};
opacity :  ${props => (props.opacity)};
font-weight : ${props => (props.weight)}
${props => (props.radius) ? `border-radius: 5px;` : null};
cursor : ${props => (props.cursor) || 'default'};

font-family: Noto Sans CJK KR;
`




const Typography = ({ size, color, onClick, radius,
    backgroundColor, children, opacity, weight, cursor }) => {
    return (
        <>
            <Typo size={size} color={color} onClick={onClick}
                radius={radius} backgroundColor={backgroundColor} weight={weight}
                children={children} opacity={opacity} cursor={cursor}>
            </Typo>
        </>
    )
}

export default Typography;