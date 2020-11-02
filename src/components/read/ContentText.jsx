//content
import React from 'react'


const ContentText = (props) => {


    return (
        <>
            <div className="text contents__text-read">
                <div className="text__content--value-read">{props.content}
                </div>
            </div>
        </>
    )
}
export default ContentText;