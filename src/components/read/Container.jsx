/** 
 * @author: chaeeun 
 * @Date: 2020-11-22 22:35:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-11-22 22:35:51
 */
import React from 'react';
import TopBar from '../manage/TopBar';
import Content from '../../containers/read/Content'
import run from '../../init/start'
import getId from '../../init/getSelectId'
import '../../css/read.css';
import UrgentButton from "./urgentButton"
import UrgentTitle from "./UrgentTitle"

const Container = () => {
    run();

    getId();
    return (
        <>
            <div className="container">
                <UrgentTitle></UrgentTitle>
                <TopBar></TopBar>
                <Content></Content>
                <UrgentButton></UrgentButton>
            </div>
        </>
    )

}


export default Container;