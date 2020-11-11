import React from 'react'
import ContentInput from './ContentInput';
import ContentText from '../../containers/create/ContentText';



const Content = () => {
    return (
        <>
            <div className="contents container__contents">
                <ContentInput></ContentInput>
                <ContentText></ContentText>
            </div>

        </>
    )
}

export default Content;