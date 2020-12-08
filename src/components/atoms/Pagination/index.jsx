import React from "react"
import styled from "styled-components"

const PaginationWrapper = styled.ul`
    padding: 0;
    width : auto;
    height: auto;
    display : flex;
    
`

const PaginationItem = styled.li`
    width: 2rem;
    height: 2rem;
    list-style-type: none;
    cursor: pointer;
`

const Index = ({num, onClick}) => {
    const pageNum = []
    for(let i=0;i<num;i++){
        pageNum.push(i+1)
    }
    return (
        <>
            <PaginationWrapper>
                {
                    pageNum.map((i, index)=>{
                        return <PaginationItem key={index} onClick={onClick}>{pageNum[index-1]}</PaginationItem>
                    })
                }
            </PaginationWrapper>
        </>
    )
}

export default Index