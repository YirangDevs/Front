/**
 * @author : yeonhoo
 * @Date : 2021-04-08 16:03:55
 * @Last Modified by: yeonhoo
 * @Last Modified time: 2021-04-08 16:19:22
 */

 import React from 'react'
 import SideNav from "../../../components/molecules/SideNav"
 import useSideNav from "../../../hook/useSideNav"

 const ContentContainer = ({
     imgUrl,
     children,

     logined,
     role
 }) => {
    const [navState, setNavState] = useSideNav(false);
    

     return (
         <>
            <SideNav role={role} logined={logined} children={children} imgUrl={imgUrl} navOnOpen={onOpen} navState={navState} mapModal={mapModal} viewMap={viewMap}>

            </SideNav>
         </>
     )
 }

 export default ContentContainer