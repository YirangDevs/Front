//Content
import React from 'react'
import MenuNav from './MenuNav'
import MenuInfo from '../../containers/manage/MenuInfo'
import MenuMake from './MenuMake'
const MenuContent = () => (
    <>
        <div className="menu--manage content__menu--manage">
            <MenuNav></MenuNav>
            <MenuInfo></MenuInfo>
            <MenuMake></MenuMake>
        </div>
    </>
)


export default MenuContent;