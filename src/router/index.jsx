import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"

import CreateRouter from "./CreateRouter";
import LogoutRouter from "./LogoutRouter";
import LoginRouter from "./LoginRouter";
import ManageRouter from "./ManageRouter";
import SeniorRouter from "./SeniorRouter";
import UserAuthorityRouter from "./UserAuthorityRouter";
import MyPageRouter from './MyPageRouter'
import ProfileRouter from './ProfileRouter'
import { connect } from "react-redux";
import MatchRouter from "./MatchRouter";
import HomeRouter from "./HomeRouter";
import IntroRouter from "./IntroRouter"
const YirangRouter = ({ role, realname, sex, phone, emailValidation }) => {

    const userInfo = {
        role,
        realname,
        sex,
        phone,
        emailValidation
    }

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/create">
                        <CreateRouter security={["ADMIN", "SUPER_ADMIN"]} userInfo={userInfo} />
                    </Route>
                    <Route path="/logout">
                        <LogoutRouter security={["GUEST"]} userInfo={userInfo} />
                    </Route>
                    <Route path="/login">
                        <LoginRouter security={["GUEST"]} userInfo={userInfo} />
                    </Route>
                    <Route path="/manage">
                        <ManageRouter security={["ADMIN", "SUPER_ADMIN"]} userInfo={userInfo} />
                    </Route>
                    <Route path="/seniors">
                        <SeniorRouter security={["ADMIN", "SUPER_ADMIN"]} userInfo={userInfo} />
                    </Route>
                    <Route path="/userauthority">
                        <UserAuthorityRouter security={["SUPER_ADMIN"]} userInfo={userInfo} />
                    </Route>
                    <Route path="/mypage">
                        <MyPageRouter security={["VOLUNTEER"]} userInfo={userInfo} />
                    </Route>
                    <Route path="/profile">
                        <ProfileRouter security={["SUPER_ADMIN", "ADMIN", "VOLUNTEER"]} userInfo={userInfo} />
                    </Route>
                    <Route path="/match">
                        <MatchRouter security={["SUPER_ADMIN", "ADMIN"]} userInfo={userInfo} />
                    </Route>
                    <Route exact path="/Intro">
                        <IntroRouter security={["SUPER_ADMIN", "ADMIN", "VOLUNTEER", "GUEST"]} userInfo={userInfo} emailValidation={emailValidation}></IntroRouter>
                    </Route>
                    <Route exact path="/">
                        <HomeRouter security={["SUPER_ADMIN", "ADMIN", "VOLUNTEER", "GUEST"]} userInfo={userInfo} emailValidation={emailValidation}></HomeRouter>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        role: state.user_reducer?.role,
        sex: state.user_reducer?.sex,
        phone: state.user_reducer?.phone,
        realname: state.user_reducer?.realname,
        emailValidation: state.user_reducer?.emailValidation
    }
}

export default connect(mapStateToProps, null)(YirangRouter)