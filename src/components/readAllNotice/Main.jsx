import { Fab } from "@material-ui/core";
import React from "react"

const Main = () => {
    return (
        <div className="main container__main">
            <Fab variant="extended">
                <span role="img" aria-label="create">🙌</span>관리페이지로 돌아가기<span role="img" aria-label="create">🙌</span>
            </Fab>
            <Fab variant="extended">
                <span role="img" aria-label="create">🙌</span>메인페이지로 돌아가기<span role="img" aria-label="create">🙌</span>
            </Fab>
        </div>

    )

}


export default Main;