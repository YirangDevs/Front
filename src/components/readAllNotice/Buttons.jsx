import { Fab } from "@material-ui/core";
import React from "react"
import { Link } from "react-router-dom";

const Buttons = (props) => {
    return (
        <div className="buttons container__buttons">

            {(props.role === "ADMIN") ?
                <Link to="/manage">
                    <Fab variant="extended">
                        <span role="img" aria-label="create">🙌</span>관리페이지로 돌아가기<span role="img" aria-label="create">🙌</span>
                    </Fab>
                </Link> :
                <Link to="/manage">
                    <Fab variant="extended">
                        <span role="img" aria-label="create">🙌</span>메인페이지로 돌아가기<span role="img" aria-label="create">🙌</span>
                    </Fab>
                </Link>
            }

        </div>

    )

}


export default Buttons;