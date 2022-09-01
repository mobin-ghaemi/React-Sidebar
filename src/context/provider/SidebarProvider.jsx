import React, { useContext, useState } from "react";

export const SidebarContext = React.createContext()
export const DataContext = React.createContext()

const SidebarProvider = ({children}) => {
    const [data , setData] = useState()
    
    return <SidebarContext.Provider value={setData}>
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    </SidebarContext.Provider>;
}

export const useSetData = () => useContext(SidebarContext)
export const useGetData = () => useContext(DataContext)
 
export default SidebarProvider;