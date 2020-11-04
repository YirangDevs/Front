import React from 'react';
import "../../css/create.css";
import TopBar from '../manage/TopBar';
import Content from '../../containers/read/Content'
import run from '../../init/start'
import getId from '../../init/getSelectId'
import '../../css/read.css';
import UrgentButton from "./urgentButton"


const Container = () => {
    run();

    getId();

    return (
        <>
            <div className="container">
                <TopBar></TopBar>
                <Content></Content>
                <UrgentButton></UrgentButton>
            </div>
        </>
    )

}


export default Container;