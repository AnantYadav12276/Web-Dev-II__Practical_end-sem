import { useTheme } from './ThemeContext.jsx'

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button type="button" onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}