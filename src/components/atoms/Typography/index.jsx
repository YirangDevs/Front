import React from 'react'
import styled from 'styled-components'



const Typo = styled.div`
display : flex;

${props => (props.full) ? 'width : 100%; justify-content : inherit' : null};
font-size : ${props => (props.size) || '1rem'};
font-family : ${props => (props.fontFamily) || 'Noto Sans CJK KR'};
color : ${props => (props.color)};
background-color : ${props => (props.backColor)};
opacity :  ${props => (props.opacity)};
font-weight : ${props => (props.weight)};
${props => (props.radius) ? `border-radius: 5px;` : null};
border : ${props => (props.border) || null};
cursor : ${props => (props.cursor) || 'default'};
padding : ${props => (props.padding)};

`




const Typography = ({ size, color, onClick, radius, fontFamily, full,
    backColor, children, opacity, weight, cursor, border, padding }) => {
    return (
        <>
            <Typo size={size} color={color} onClick={onClick} fontFamily={fontFamily}
                radius={radius} backColor={backColor} weight={weight} full={full}
                children={children} opacity={opacity} cursor={cursor} border={border} padding={padding}>
            </Typo>
        </>
    )
}

export default Typography;