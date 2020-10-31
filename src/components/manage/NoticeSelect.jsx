//notice
import React from 'react'
import Table from './SelectTable'
import Btn from './SelectBtn'

const NoticeSelect = () => {
    return (
        <>
            <div className="notice__select">
                <Table></Table>
                {/* <div className="select__table"></div> */}
                <Btn></Btn>
                {/* <div className="select__btn"></div> */}
            </div>
        </>
    )
}

export default NoticeSelect;