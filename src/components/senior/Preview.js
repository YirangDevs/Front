import React from "react";

const Preview = (props) => {
  const seniors=JSON.parse(props.seniors)  
  const renderSenior = (senior, index) =>{
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
      props.close();
  }
  const removeData = () => {
      props.close();
  }


  return (
    <>
        {props.isOpen ? (  
          <div className="modal">
              <div className="PreviewModal">
                <span className="close" onClick={props.close}>
                  &times;
                </span>
                <div className="modalContents">

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
                    {seniors? seniors.map(renderSenior):null}
                  </tbody>
                </table>
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