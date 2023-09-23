const setToken =(token)=>{
    return localStorage.setItem("token" , token)
}

const getToken=()=>{
    return localStorage.getItem('token')
}

const removeToken=()=>{
    localStorage.clear();
}


module.exports ={
    setToken ,
    getToken,
    removeToken
}