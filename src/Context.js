import { createContext, useContext, useState } from "react"


const AppContext = createContext(null);

export const AppProvider =  ({child}) => {
    const [color,setColor] = useState(null);

return (
    <AppContext.Provider value = {{color,setColor}}>
        {child}
    </AppContext.Provider>
)
}

export const ColorStore = ()=> useContext(AppContext);