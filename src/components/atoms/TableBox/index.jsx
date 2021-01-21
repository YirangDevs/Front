import React from "react"
import styled from "styled-components"


const Table = styled.table`
    width:100%;
    text-align:center;
    border-spacing:0;
    
    
`

const TableRow = styled.tr`
    
    
`

const TableHead = styled.th`
    padding: 0.8rem 0.3rem;
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
    ${props=>(props.back)?`background-color: #f5f5f5;`:null}

`
const PrimaryKey = styled(TableBody)`
    cursor: pointer;
`

const Index = ({border, black, headList, bodyList, primaryKey, onClick, dataOnClick}) => {

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
                    bodyList.map((i, index) => {

                        //이미 끝난 봉사에 색을 넣는 부분
                        var certainDate; //const로는 안되네 크흠.... useState 여기다 쓰는건 에바죠?
                        if(i.date){
                            const dateArr = i.date.split("-")
                            certainDate = new Date(dateArr[0], dateArr[1]-1, dateArr[2])
                        }
                        
                        return (
                            <TableRow key={index}>
                                {Object.keys(i).map((data, index) => {
                                    return (data === primaryKey) ?
                                        <PrimaryKey key={index} onClick={onClick}>{i[data]}</PrimaryKey>
                                        :
                                        <TableBody back={certainDate<new Date()} key={index} onClick={dataOnClick}>{i[data]}</TableBody>
                                })}
                            </TableRow>)
                    })
                }
            </tbody>
        </Table>
    </>
    )
            }

export default Index
