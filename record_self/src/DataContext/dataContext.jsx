/* eslint-disable */
import React from "react";
export const dataContext = React.createContext({});
export const DataContextProvider = ({children}) => {
    const [data,setData] = React.useState([]);
    return (
        <dataContext.Provider value={{data,setData}}>
            {children}
        </dataContext.Provider>
    )
}   
