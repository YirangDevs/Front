//Select
import React from 'react'

const SelectBtn = () => {
    return (
        <>
            <div className="select__btn">
                <div className="update__btn">수정<span role="img" aria-label="update">🚧</span></div>
                <div className="delete__btn">삭제<span role="img" aria-label="delete">🗑️</span></div>
            </div>
        </>
    )
}

export default SelectBtn;