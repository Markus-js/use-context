import { createContext, useState } from "react";

const AppContext = createContext();



const AppContextProvider = ({children}) => {
    const [searchResult, setSearchResult] = useState([])
    const [loginData, setLoginData] = useState({});
    const [toggle, setToggle] = useState(true);

    return (
        <AppContext.Provider
        value={{
            searchResult,
            setSearchResult,
            loginData,
            setLoginData,
            setToggle,
            toggle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };