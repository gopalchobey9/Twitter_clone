import React, { createContext, useEffect, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
export default function  AppContextProvider ({ children }){
    // State to store user details and essential details
    const [userDetails, setUserDetails] = useState("");
    const [essentialDetails, setEssentialDetails] = useState(null);
    const [isPosted, setIsPosted] = useState(false);

    // Function to update user details
    const updateUserDetails = (details) => {
        setUserDetails(details);
    };
    const updateIsPosted =()=>{
        setIsPosted(!isPosted);
    }

    useEffect(()=>{
        const getusername = localStorage.getItem('username');
        console.log(getusername,"contextApi");
        updateUserDetails(getusername);
  },[])




    // Function to update essential details
    const updateEssentialDetails = (details) => {
        setEssentialDetails(details);

    };

    // Value object to be provided by the context
    const value = {
        userDetails,
        updateUserDetails,
        essentialDetails,
        updateEssentialDetails,
        isPosted,
        updateIsPosted
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
