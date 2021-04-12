/**
 * @author : yeonhoo
 * @Date : 2021-04-08 16:03:55
 * @Last Modified by: yeonhoo
 * @Last Modified time: 2021-04-08 16:19:22
 */

 import React, {useState} from 'react'
 import SideNav from "../../../components/molecules/SideNav"

 const ContentContainer = ({
     imgUrl
 }) => {
     const [navOpen, setNavOpen] = useState(false);
     const onOpen = () => {
        setNavOpen(true);
     }
    const onClose = () => {
        setNavOpen(false);
    }

     return (
         <>
            <SideNav imgUrl={imgUrl} navOpen={navOpen} onOpen={onOpen} onClose={onClose}>

            </SideNav>
         </>
     )
 }

 export default ContentContainer