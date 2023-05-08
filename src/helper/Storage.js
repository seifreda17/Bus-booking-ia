//COOKIES,LOCAL STORAGE


export const setAuthUser=(data)=>{
    //save object to local storage
    //stringfy OBJECT TO TEXT
    localStorage.setItem("user",JSON.stringify(data))
};


export const getAuthUser=(data)=>{
    //get object from local storage
    //PARSE OBJECT TO TEXT
   if(localStorage.getItem("user")){
    return JSON.parse( localStorage.getItem("user"));
   }
};

export const removeAuthUser=()=>{
    if(localStorage.getItem("user")) localStorage.removeItem("user");
};