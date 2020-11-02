//notice
import React from 'react'
import SelectTable from '../../containers/manage/SelectTable'
import SelectBtn from './SelectBtn'

const NoticeSelect = () => {
    return (
        <>
            <div className="notice__select">
                <SelectTable></SelectTable>
                {/* <div className="select__table"></div> */}
                <SelectBtn></SelectBtn>
                {/* <div className="select__btn"></div> */}
            </div>
        </>
    )
}

export default NoticeSelect;