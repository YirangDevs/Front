import React, {memo, useCallback, useState} from "react"
import styled from "styled-components"
import ToolTip from "../Tooltip";



const Table = styled.table`
  width:100%;
  position : relative;
  text-align:center;
  border-spacing:0;
    
`

const Tr = styled.tr`
    
    
`

const Th = styled.th`

    padding: 12px 6px;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    ${props => {
        switch (props.border) {
            case "top":
                return `
                border-top: 3px solid #000000;
              `
            case "bottom":
                return `
                border-bottom: 3px solid #000000;
              `
            default:
                return `
                border-bottom: 2px solid #ccd4e0;
              `
        }
    }
    }
    ${props => (props.black) ? `background-color: black; color: white` : `background-color: #f5f5f5; color: #707070;`}
    
`

const TBody = styled.tbody`
`

const THead = styled.thead`
`

const Wrapper = styled.div`
  width : 100%;
  height : ${props=>props.row ? `calc(1.313rem * `+(props.row)+` + 24px * `+(props.row)+`);` : `auto;`}
  overflow-y : auto;
  overflow-x : hidden;
`

const Td = styled.td`
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    color: #707070;
    border-bottom: solid #ccd4e0 1px;
    cursor: pointer;
    padding: 12px 6px;
    ${props => (props.back) ? `background-color: #f5f5f5;` : null}
    ${props => (props.checked) ? `background-color: #eeeeee;` : null}
    word-break : keep-all;
`
const PrimaryKey = styled(Td)`
    cursor: pointer;
    ${props => (props.checked) ? `background-color: #eeeeee;` : null}
`
/*
{
    data : {

    },
    position
}
 */

const TableBox = ({checked, border, black, headList, bodyList, primaryKey, onClick, dataOnClick, data, tooltip, row, colgroup}) => {


    const [checkedId, setCheckedId] = useState(0)


    const onPrimaryClick = useCallback((e, data) => {

        if (data) {
            if(checked){
                setCheckedId(data.id)
            }
            onClick(e, data)
        } else {
            onClick(e)
        }

    }, [onClick, checked])

    const onTableBodyClick = useCallback((e, data) => {
        if (dataOnClick) {
            if (data) {
                if(checked){
                    setCheckedId(data.id)
                }
                dataOnClick(e, data)
            } else {
                dataOnClick(e)
            }
        }
    }, [dataOnClick, checked])

    return (
        <>

                <Table>

                    <THead>
                        <Tr>
                            <td>
                                <Table>
                                    {
                                        (colgroup) ?
                                            <colgroup>
                                                {
                                                    colgroup.map((i, index) => {
                                                        return <col key={index} width={i+"%"}/>
                                                    })
                                                }
                                            </colgroup>
                                            :
                                            null
                                    }
                                    <THead>
                                        <Tr>
                                            {
                                                headList.map((i, index) => <Th border={border} black={black} key={index}>{i}</Th>)
                                            }
                                        </Tr>
                                    </THead>
                                </Table>
                            </td>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <td>
                                <Wrapper row={row}>
                                    <Table>
                                        {
                                            (colgroup) ?
                                                <colgroup>
                                                    {
                                                        colgroup.map((i, index) => {
                                                            return <col key={index} width={i+"%"}/>
                                                        })
                                                    }
                                                </colgroup>
                                                :
                                                null
                                        }
                                        <TBody >
                                            {
                                                bodyList.map((i, firstIndex) => {

                                                    //이미 끝난 봉사에 색 입히기(슈퍼 관리자만 해당)
                                                    var certainDate;
                                                    if (i.date) {
                                                        const dateArr = i.date.split("-")
                                                        certainDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2])
                                                    }
                                                    return (
                                                        <Tr key={firstIndex}>
                                                            {Object.keys(i).map((value, secondIndex) => {

                                                                return (tooltip&&Object.keys(tooltip.data).includes(value)) ?

                                                                    (value === primaryKey) ?
                                                                        <PrimaryKey key={secondIndex} checked={data ? data[firstIndex]?.id===checkedId : false} onClick={(e) => { data ? onPrimaryClick(e, data[firstIndex]) : onPrimaryClick(e) }}>
                                                                            <ToolTip key={secondIndex} content={tooltip.data[value][firstIndex]} position={tooltip.position}>{i[value]}</ToolTip>
                                                                        </PrimaryKey>
                                                                        :
                                                                        <Td back={certainDate < new Date()} checked={data ? data[firstIndex]?.id===checkedId : false} key={secondIndex} onClick={(e) => { data ? onTableBodyClick(e, data[firstIndex]) : onTableBodyClick(e) }}>
                                                                            <ToolTip key={secondIndex} content={tooltip.data[value][firstIndex]} position={tooltip.position}>{i[value]}</ToolTip>
                                                                        </Td>
                                                                    :
                                                                    (value === primaryKey) ?
                                                                        <PrimaryKey key={secondIndex} checked={data ? data[firstIndex]?.id===checkedId : false} onClick={(e) => { data ? onPrimaryClick(e, data[firstIndex]) : onPrimaryClick(e) }}>{i[value]}</PrimaryKey>
                                                                        :
                                                                        <Td back={certainDate < new Date()} checked={data ? data[firstIndex]?.id===checkedId : false} key={secondIndex} onClick={(e) => { data ? onTableBodyClick(e, data[firstIndex]) : onTableBodyClick(e) }}>{i[value]}</Td>
                                                            })}
                                                        </Tr>)
                                                })
                                            }
                                        </TBody>
                                    </Table>
                                </Wrapper>
                            </td>
                        </Tr>
                    </TBody>
                </Table>

        </>
    )
}
// border, black, headList, bodyList, primaryKey, onClick, dataOnClick, data, tooltip
export default memo(TableBox)