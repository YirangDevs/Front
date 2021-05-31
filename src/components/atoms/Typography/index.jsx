import React from 'react'
import styled from 'styled-components'



const Typo = styled.div`
font-size : ${props => (props.size) || '1rem'};
color : ${props => (props.color)};
background-color : ${props => (props.backColor)};
opacity :  ${props => (props.opacity)};
font-weight : ${props => (props.weight)}
${props => (props.radius) ? `border-radius: 5px;` : null};
border : ${props => (props.border) || null};
cursor : ${props => (props.cursor) || 'default'};
font-family: Noto Sans CJK KR;
`




const Typography = ({ size, color, onClick, radius,
    backColor, children, opacity, weight, cursor, border }) => {
    return (
        <>
            <Typo size={size} color={color} onClick={onClick}
                radius={radius} backColor={backColor} weight={weight}
                children={children} opacity={opacity} cursor={cursor} border={border}>
            </Typo>
        </>
    )
}

export default Typography;