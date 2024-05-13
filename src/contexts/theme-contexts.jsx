import { createContext, useState} from "react"

export const themes = {
    light:{
        color: "#ffffff",
         background:  "linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) 44%, rgba(0,0,0,1) 100%)"
    },
    dark:{
        color: "#ffffff",
        background: "#000000"
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}