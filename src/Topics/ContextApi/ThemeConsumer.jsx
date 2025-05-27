import  { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const ThemeConsumer = () => {
    const {theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeConsumer