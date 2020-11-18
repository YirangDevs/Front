import React from 'react'

import { Button } from "@material-ui/core"

const urgentButton = () => {

    const onClick_urgent = () => {

        document.querySelector(".container__urgent").style.display = "flex"
        document.querySelector(".urgent_wrapper").style.display = "flex"

    }
    return (
        <>
            <>
                <div className="urgent container__urgentButton-read" >

                    <Button variant="outlined" color="secondary" onClick={onClick_urgent} className="urgentButton">
                        <span role="img" aria-label="create">🚨</span>급구 게시물 올리기<span role="img" aria-label="create">🚨</span>
                    </Button>
                </div>

            </>
        </>
    )
}

export default urgentButton;