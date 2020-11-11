import { Fab } from "@material-ui/core";
import React from "react"

const Main = () => {
    return (
        <div className="main container__main">
            <button className="main__btn">🙌메인페이지로 돌아가기🙌</button>
            <Fab variant="extended">

                <span role="img" aria-label="create">🙌</span>Navigate<span role="img" aria-label="create">🙌</span>
            </Fab>
        </div>

    )

}


export default Main;