/**
 * @author : yeonhoo
 * @Date : 2021-04-08 16:03:55
 * @Last Modified by: yeonhoo
 * @Last Modified time: 2021-04-08 16:19:22
 */

 import React from 'react'
 import SideNav from "../../../components/molecules/SideNav"
 import useSideNav from "../../../hook/useSideNav"
 import {useHistory} from "react-router-dom"

 const ContentContainer = ({
     imgUrl,
     children,

     logined
 }) => {
    const history = useHistory()
    const [navState, setNavState] = useSideNav(false);


     return (
         <>
            <SideNav logined={logined} children={children} imgUrl={imgUrl} navOnOpen={onOpen} navState={navState}>

            </SideNav>
         </>
     )
 }

 export default ContentContainer