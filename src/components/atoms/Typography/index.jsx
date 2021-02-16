import React from 'react'
import styled from 'styled-components'



const Typo = styled.div`
font-size : ${props => (props.size) || '1rem'};
color : ${props => (props.color)};
background-color : ${props => (props.backgroundColor)};
${props => (props.radius) ? `border-radius: 5px;` : null};
`




const Typography = ({ size, color, onClick, radius, backgroundColor, children }) => {
    return (
        <>
            <Typo size={size} color={color} onClick={onClick}
                radius={radius} backgroundColor={backgroundColor} children={children} >
            </Typo>
        </>
    )
}

export default Typography;