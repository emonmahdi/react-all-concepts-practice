/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import   { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light')

    const toggleTheme =() => {
        setTheme((pre) => pre === 'light'? 'dark' : 'light')
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider