/** 
 * @author: chaeeun 
 * @Date 2020-12-09 01:08:49 
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-12-09 01:25:19
 */
import React from "react"
import styled from "styled-components"

const Container = styled.div`
width: 92%;
height: 80%;

margin: auto auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
`


const Content = ({
    setListTotalNum, // set 전제 리스트 갯수 
    setPagingNum, // set 선택한 리스트 페이지 번호
    selectNotice, // read 로 열 notice 정보 
    setSelectNotice, // set read로 열 notice 정보
    updateNotice, // update 할 notice 정보 (update page에 표시될)
    setUpdateNotice, // set update 할 notice 정보 (update page에 표시될)
    setDeleteId,     // set 삭제할 id
    lists,
    setLists, // set fetch 로 받아올 리스트 (6개씩뜨는 notice)

    /* props.function */
    noticeClick,  // notice를 클릭 했을떄 notice를 read 하는 모달
    updateClick,  // notice를 수정하기 버튼 눌었을떄 
    deleteClick,  // notice를 삭제하기 버튼 눌었을떄 
    pagingClick,  // paging 클릭 시  
    updateFunction, // notice를 수정 하기 위한 함수들 

}) => {
    return (
        <>
            {/*manage Page 의 Content를 감싸는 Container */}
            <Container>


            </Container>
        </>
    )
}

export default Content;