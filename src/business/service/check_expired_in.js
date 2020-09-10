const checkExpiredIn = (decodedToken) =>{
    const data = JSON.parse(decodedToken);
    const expireData = data["exp"];
    if(expireData)
        return true;
    else
        return false;
}