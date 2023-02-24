import React, { createContext } from 'react'
import { useState } from 'react';

export  const  userContext = createContext({
    currentUser : null,
    setCurrentUser : ()=>null
});

 export const ContextProvider =({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser};
    return <userContext.Provider value={value}>{children}</userContext.Provider>
 }