import React from "react"
import styled from "styled-components"

const PaginationWrapper = styled.ul`
    padding: 0;
`

const PaginationItem = styled.li`
    display: inline;
    list-style-type: none;
`

const Pagination = ({num, onClick}) => {
    const pageNum = []
    for(let i=0;i<num;i++){
        pageNum.push(i+1)      
    }
    return (
        <>
            <PaginationWrapper>
                {
                    pageNum.map((i, index)=>{
                        return <PaginationItem key={index} onClick={onClick}>{pageNum[i]}</PaginationItem>
                    })
                }
            </PaginationWrapper>
        </>
    )
}

export default Pagination