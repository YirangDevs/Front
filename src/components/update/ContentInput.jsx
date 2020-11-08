//content
import React from 'react'
import InputMain from '../../containers/update/InputMain'
import InputNomain from '../../containers/update/InputNomain'

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