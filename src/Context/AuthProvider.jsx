import React, { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const authinfo = {};
    return (
        <div>
           <AuthContext.Provider value={authinfo}>
             {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;