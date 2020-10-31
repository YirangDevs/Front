//Content
import React from 'react'
import MenuNav from './MenuNav'
import MenuInfo from './MenuInfo'
import MenuMake from './MenuMake'
const MenuContent = () => (
    <>
        <div className="menu content__menu">
            <MenuNav></MenuNav>
            <MenuInfo></MenuInfo>
            <MenuMake></MenuMake>
        </div>
    </>
)


export default MenuContent;