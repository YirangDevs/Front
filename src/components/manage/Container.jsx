import React from 'react';
import TopBar from './TopBar'
import Content from './Content'
import '../../css/manage.css';
import run from '../../init/start'
import check from '../../init/check';
import store from '../../store/store'


const Container = () => {
    run();
    check.manage();


    console.log(store.getState().user_reducer.role)
    return (
        <>
            <div id="root">
                <div className="container--manage">
                    <TopBar></TopBar>
                    <Content></Content>
                </div>
            </div>
        </>
    )
}


export default Container;