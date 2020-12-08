import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import RowContext from "./RowContext";

const RowLayout = styled.div`
    width: 100%;
    height : auto;
    display: flex;
    flex-wrap : wrap;
    
    ${props=>props.justify ? 'justify-content : '+props.justify +';': null}
    ${props=>props.align ? 'align-items : ' +props.align +';': null}

    
`
const Row=({justify, align, gutter, children})=>(
    <>
        <RowContext.Provider value={gutter}>
            <RowLayout justify={justify} align={align}>
                {children}
            </RowLayout>
        </RowContext.Provider>

    </>
)

Row.propTypes = {
    justify: PropTypes.string,
    align : PropTypes.string,
    gutter : PropTypes.array
}

Row.defaultProps = {
    justify: "start",
    align : "start",
    gutter : [0,0],
};

export default Row