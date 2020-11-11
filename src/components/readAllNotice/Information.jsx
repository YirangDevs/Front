import React from 'react'


const Information = () => {
    return (
        <>
            <div className='information content__information'>
                {/*해당게시글을 선택하세요*/}
                <div className="information__text">해당 게시글을 선택하세요.</div>
                <div className="information__icon">
                    <i className="fas fa-arrow-down"></i>
                </div>
            </div>
        </>
    )
}

export default Information;