import './App.css'
import { useTheme } from './components/ThemeContext.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

function App() {
	const { isDarkMode } = useTheme()

	return (
		<main className={`app ${isDarkMode ? 'dark' : 'light'}`}>
			<ThemeToggle />
		</main>
	)
}

export default App