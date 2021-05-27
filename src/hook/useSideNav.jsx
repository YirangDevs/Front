import {useState} from "react"

const useSideNav = (state) => {
    const [navOpen, setNavOpen] = useState(state);
    const setNavState = () => {
        if(navOpen===false){
            setNavOpen(true);
        }
        if(navOpen===true){
            setNavOpen(false);
        }
    }
    return [navOpen, setNavState];
}
export default useSideNav