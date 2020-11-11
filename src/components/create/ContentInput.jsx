//content
import React from 'react'
import InputMain from '../../containers/create/InputMain'
import InputNomain from '../../containers/create/InputNomain'

const ContentInput = () => {
    return (
        <>
            <div className="input contents__input">
                <InputMain></InputMain>
                <InputNomain></InputNomain>
            </div>
        </>
    )
}

export default ContentInput;