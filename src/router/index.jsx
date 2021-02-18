import {BrowserRouter, Switch, Route} from "react-router-dom"
import React from "react"
import Home from "../pages/Home/";

import CreateRouter from "./CreateRouter";
import LogoutRouter from "./LogoutRouter";
import LoginRouter from "./LoginRouter";
import ManageRouter from "./ManageRouter";
import SeniorRouter from "./SeniorRouter";
import UserAuthorityRouter from "./UserAuthorityRouter";
import {connect} from "react-redux";

const YirangRouter = ({role}) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/create">
                    <CreateRouter security={["ADMIN", "SUPER_ADMIN"]} role={role}/>
                </Route>
                <Route path="/logout">
                    <LogoutRouter security={["GUEST"]} role={role}/>
                </Route>
                <Route path="/login">
                    <LoginRouter security={["GUEST"]} role={role}/>
                </Route>
                <Route path="/manage">
                    <ManageRouter security={["ADMIN", "SUPER_ADMIN"]} role={role}/>
                </Route>
                <Route path="/seniors">
                    <SeniorRouter security={["ADMIN", "SUPER_ADMIN"]} role={role}/>
                </Route>
                <Route path="/userauthority">
                    <UserAuthorityRouter security={["SUPERADMIN"]} role={role}/>

                </Route>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        role : state.user_reducer?.role
    }
}

export default connect(mapStateToProps, null)(YirangRouter)