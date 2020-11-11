//content
import React from 'react'
import InputMain from '../../containers/read/Inputmain'
import InputNomain from '../../containers/read/InputNomain'

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