import React, {memo, useCallback} from "react"
import styled from "styled-components"



const Table = styled.table`
    width:100%;
    text-align:center;
    border-spacing:0;
    
    
`

const TableRow = styled.tr`
    
    
`

const TableHead = styled.th`
    padding: 12px 6px;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    ${props=>{
        switch (props.border){
          case "top":
              return `
                border-top: 3px solid #000000;
              `
          case "bottom":
              return `
                border-bottom: 3px solid #000000;
              `
          default :
              return `
                border-bottom: 2px solid #ccd4e0;
              `
        }
    }
    }
    ${props=>(props.black)?`background-color: black; color: white`: `background-color: #f5f5f5; color: #707070;`}
    
`

const TableBody = styled.td`
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    color: #707070;
    border-bottom: solid #ccd4e0 1px;
    cursor: pointer;
    padding: 12px 6px;
    ${props=>(props.back)?`background-color: #f5f5f5;`:null}
`
const PrimaryKey = styled(TableBody)`
    cursor: pointer;
`

const TableBox = ({border, black, headList, bodyList, primaryKey, onClick, dataOnClick, data}) => {
    
    const onPrimaryClick = useCallback((e, data)=>{
        if(data){
            onClick(e, data)
        }else{
            onClick(e)
        }
        
    }, [onClick])

    const onTableBodyClick = useCallback((e, data)=> {
        if(dataOnClick){
            if(data){
                dataOnClick(e, data)
            }else{
                dataOnClick(e)
            }
        }
    }, [dataOnClick])

    return(
    <>
        <Table>
            <thead>
                <TableRow>
                    {
                        headList.map((i, index) => <TableHead border={border} black={black} key={index}>{i}</TableHead>)
                    }
                </TableRow>
            </thead>
            <tbody>
                {
                    bodyList.map((i, firstIndex) => {

                        //이미 끝난 봉사에 색 입히기(슈퍼 관리자만 해당)
                        var certainDate;
                        if(i.date){
                            const dateArr = i.date.split("-")
                            certainDate = new Date(dateArr[0], dateArr[1]-1, dateArr[2])
                        }
                        return (
                            <TableRow key={firstIndex}>
                                {Object.keys(i).map((value, secondIndex) => {

                                    return (value === primaryKey) ?
                                        <PrimaryKey key={secondIndex} onClick={(e)=>{data? onPrimaryClick(e, data[firstIndex]):onPrimaryClick(e)}}>{i[value]}</PrimaryKey>
                                        :
                                        <TableBody back={certainDate<new Date()} key={secondIndex} onClick={(e)=>{data? onTableBodyClick(e, data[firstIndex]):onTableBodyClick(e)}}>{i[value]}</TableBody>
                                })}
                            </TableRow>)
                    })
                }
            </tbody>
        </Table>
    </>
    )
            }

export default memo(TableBox)
