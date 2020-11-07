//content
import React from 'react'


const ContentText = ({ SET_CONFIG }) => {

    const value = "초기값"
    const onChange = (mainValue) => {
        const value = mainValue.target.value;
        const type = mainValue.target.name;
        console.log([type], value);
        SET_CONFIG({
            notice: {
                [type]: value
            }
        })
    }

    return (
        <>
            <div className="text contents__text">
                <textarea className="text__content--value" name='content' onChange={onChange} placeholder="내용을 입력하세요" value={value} >
                </textarea>
            </div>
        </>
    )
}
export default ContentText;