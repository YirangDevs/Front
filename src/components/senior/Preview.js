import React from "react";
import TableScrollbar from "react-table-scrollbar"
import postSeniorsToServer from "../../business/service/post_seniors_to_server"

const Preview = (props) => {
   const seniors=props.senior
    const tableSenior = (senior, index) =>{
      return(
        <tr key={index}>
          <td>{senior.name}</td>
          <td>{senior.sex}</td>
          <td>{senior.region}</td>
          <td>{senior.phone}</td>
          <td>{senior.type}</td>
          <td>{senior.date}</td>
          <td>{senior.priority}</td>
        </tr>
      )
    }
  
  const confirmData = () => {
      props.CLOSE_MODAL();
      postSeniorsToServer(props)
  }
  const removeData = () => {
      props.CLOSE_MODAL()
      window.location.reload();
  }


  return (
    <>
        {props.isModalOpen ? (  
          <div className="modal">
              <div className="PreviewModal">
                <div className="modalContents">
                <TableScrollbar rows={12}>
                <table className="modal-table-view">
                    <thead>
                        <tr className="table-view__title">
                            <th>이름</th>
                            <th>성별</th>
                            <th>지역</th>
                            <th>전화번호</th>
                            <td>봉사종류</td>
                            <td>봉사날짜</td>
                            <td>우선순위</td>
                        </tr>
                    </thead>
                    <tbody>
                    {seniors? seniors.map(tableSenior):null}
                  </tbody>
                </table>
                </TableScrollbar>
                <div className="modal__button">
                    <button className="modal__confirm" onClick={confirmData}>확인</button>
                    <button className="modal__cancel" onClick={removeData}>취소</button>
                </div>
                


            </div>
                </div>
 
          </div>
        ) : null}
      </>
  )
}

export default Preview;