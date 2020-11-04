import React from 'react';
import TopBar from './TopBar'
import Content from './Content'
import '../../css/manage.css';
import run from '../../init/start'
const Container = () => {
    run();
    if (localStorage.getItem('SELECT_ID')) {
        localStorage.removeItem('SELECT_ID')
    }
    return (
        <>
            <div id="root">
                <div className="container">
                    <TopBar></TopBar>
                    <Content></Content>
                </div>
            </div>
        </>
    )
}


export default Container;