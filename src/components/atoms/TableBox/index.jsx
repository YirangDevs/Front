import React from "react"
import styled from "styled-components"


const Table = styled.table`
    width:100%;
    text-align:center;
    border-spacing:0;
    border-top: solid ##ccd4e0 2px;
    
`

const TableRow = styled.tr`
    
    
`

const TableHead = styled.th`
    padding: 0.8rem 0.3rem;
    border: none;
    background-color: #f1f3f6;
    font-size: 1rem;
    font-weight: 500;
    color: #707070;
    
`

const TableBody = styled.td`
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    color: #707070;
    border-bottom: solid #ccd4e0 1px;


`
const PrimaryKey = styled(TableBody)`
    cursor: pointer;
`


const Index = ({ headList, bodyList, primaryKey, onClick }) => (
    <>
        <Table>
            <thead>
                <TableRow>
                    {
                        headList.map((i, index) => <TableHead key={index}>{i}</TableHead>)
                    }
                </TableRow>
            </thead>
            <tbody>
                {
                    bodyList.map((i, index) => {
                        return (
                            <TableRow key={index}>
                                {Object.keys(i).map((data, index) => {
                                    return (data === primaryKey) ?
                                        <PrimaryKey key={index} onClick={onClick}>{i[data]}</PrimaryKey>
                                        :
                                        <TableBody key={index}>{i[data]}</TableBody>
                                })}
                            </TableRow>)
                    })
                }
            </tbody>
        </Table>
    </>
)

export default Index
