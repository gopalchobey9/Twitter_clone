import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
export default function  AppContextProvider ({ children }){
    // State to store user details and essential details
    const [userDetails, setUserDetails] = useState("");
    const [essentialDetails, setEssentialDetails] = useState(null);

    // Function to update user details
    const updateUserDetails = (details) => {
        setUserDetails(details);
    };

    // Function to update essential details
    const updateEssentialDetails = (details) => {
        setEssentialDetails(details);
    };

    // Value object to be provided by the context
    const value = {
        userDetails,
        essentialDetails,
        updateUserDetails,
        updateEssentialDetails,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
