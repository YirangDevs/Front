import checkToken from "./checkToken"
import checkSession from "./checkSession"
import sdkInit from "./sdkInit";

export default () =>{
    sdkInit()
    if(!checkToken()) return;
    checkSession();
}