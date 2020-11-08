//content
import React from 'react'


const ContentText = (props) => {
    console.log(props.Content)
    var Content = props.Content
    console.log(Content)
    const onChange = (mainValue) => {
        const value = mainValue.target.value;
        const type = mainValue.target.name;
        console.log([type], value);
        props.SET_CONFIG({
            notice: {
                [type]: value
            }
        })
    }

    return (
        <>
            <div className="text contents__text">
                <textarea className="text__content--value" name='Content' onChange={onChange} value={Content} >
                </textarea>
            </div>
        </>
    )
}
export default ContentText;