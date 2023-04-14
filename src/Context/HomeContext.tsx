import React, {useState} from "react";

export const HomeContext = React.createContext({})
export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0)

    return (
        <HomeContext.Provider value={{ count, setCount }}>
            {children}
        </HomeContext.Provider>
    )
}