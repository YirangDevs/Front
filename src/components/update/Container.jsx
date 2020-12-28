/** 
 * @author: chaeeun 
 * @Date: 2020-11-22 22:35:41 
 * @Last Modified by:   euncherry 
 * @Last Modified time: 2020-11-22 22:35:41 
 */
import React from 'react';
import TopBar from '../manage/TopBar';
//import DoneButton from './DoneButton';
import DoneButton from '../../containers/update/DoneButton'
import Content from '../../containers/update/Content'
import run from '../../init/start'
const Container = () => {
    run();

    return (
        <>
            <div className="container">
                <TopBar></TopBar>
                <DoneButton></DoneButton>
                <Content></Content>
            </div>
        </>
    )

}


export default Container;