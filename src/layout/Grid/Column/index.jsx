import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import RowContext from "../Row/RowContext";

const ColumnLayout = styled.div`
    flex-basis :  ${props => (100 / 12) * props.span}%;
    box-sizing : border-box;
    ${props => props.xs ? `@media(max-width: 576px){ flex-basis : ` + (100 / 12) * props.xs + `%}` : null}
    ${props => props.sm ? `@media(min-width: 576px){ flex-basis : ` + (100 / 12) * props.sm + `%}` : null}
    ${props => props.md ? `@media(min-width: 768px){ flex-basis : ` + (100 / 12) * props.md + `%}` : null}
    ${props => props.lg ? `@media(min-width: 992px){ flex-basis : ` + (100 / 12) * props.lg + `%}` : null}
    ${props => props.xl ? `@media(min-width: 1200px){ flex-basis : ` + (100 / 12) * props.xl + `%}` : null}
    ${props => props.xxl ? `@media(min-width: 1600px){ flex-basis : ` + (100 / 12) * props.xxl + `%}` : null}
    
    ${props => props.gutter && typeof props.gutter[0] == "number" && typeof props.gutter[1] == "number" ? 'padding : ' + props.gutter[0] + 'px ' + props.gutter[1] + 'px;' : null}
    ${props => props.gutter[0].xs ? `@media(max-width: 576px){ padding-top : ` + props.gutter[0].xs + `px; padding-bottom : ` + props.gutter[0].xs`+px;}` : null}
    ${props => props.gutter[1].xs ? `@media(max-width: 576px){ padding-right : ` + props.gutter[1].xs + `px; padding-left : ` + props.gutter[1].xs`+px;}` : null}
    ${props => props.gutter[0].sm ? `@media(min-width: 576px){ padding-top : ` + props.gutter[0].sm + `px; padding-bottom : ` + props.gutter[0].sm`+px;}` : null}
    ${props => props.gutter[1].sm ? `@media(min-width: 576px){ padding-right : ` + props.gutter[1].sm + `px; padding-left : ` + props.gutter[1].sm`+px;}` : null}
    ${props => props.gutter[0].md ? `@media(min-width: 768px){ padding-top : ` + props.gutter[0].md + `px; padding-bottom : ` + props.gutter[0].md`+px;}` : null}
    ${props => props.gutter[1].md ? `@media(min-width: 768px){ padding-right : ` + props.gutter[1].md + `px; padding-left : ` + props.gutter[1].md`+px;}` : null}
    ${props => props.gutter[0].lg ? `@media(min-width: 992px){ padding-top : ` + props.gutter[0].lg + `px; padding-bottom : ` + props.gutter[0].lg`+px;}` : null}
    ${props => props.gutter[1].lg ? `@media(min-width: 992px){ padding-right : ` + props.gutter[1].lg + `px; padding-left : ` + props.gutter[1].lg`+px;}` : null}
    ${props => props.gutter[0].xl ? `@media(min-width: 1200px){ padding-top : ` + props.gutter[0].xl + `px; padding-bottom : ` + props.gutter[0].xl`+px;}` : null}
    ${props => props.gutter[1].xl ? `@media(min-width: 1200px){ padding-right : ` + props.gutter[1].xl + `px; padding-left : ` + props.gutter[1].xl`+px;}` : null}
    ${props => props.gutter[0].xxl ? `@media(min-width: 1600px){ padding-top : ` + props.gutter[0].xxl + `px; padding-bottom : ` + props.gutter[0].xxl`+px;}` : null}
    ${props => props.gutter[1].xxl ? `@media(min-width: 1600px){ padding-right : ` + props.gutter[1].xxl + `px; padding-left : ` + props.gutter[1].xxl`+px;}` : null}
   
    ${props => props.rightborder ? `border-right: 1px solid #ccd4e0;` : null}
`

/**
 * 
 * @param {Col} span - 총 12칸으로 되있음 원하는 만큼 span 입력 
 * @param {Col} xs - screen < 576px 모바일
 * @param {Col} sm -screen ≥ 576px 테블릿
 * @param {Col} md  -screen ≥ 768px 노트북
 * @param {Col} lg - screen ≥ 992px 데스크탑
 * @param {Col} xl -screen ≥ 1200px
 * @param {Col} xxl - screen ≥ 1600px
 */
const Col = ({ span, rightborder, xs, sm, md, lg, xl, xxl, children }) => {
    return (

        <>
            <RowContext.Consumer>
                {(value) => (
                    <ColumnLayout span={span} gutter={value} rightborder={rightborder} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
                        {children}
                    </ColumnLayout>
                )}
            </RowContext.Consumer>

        </>
    )
}

Col.propTypes = {
    span: PropTypes.number,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number
}

Col.defaultProps = {
    span: 1,
};

export default Col