/* eslint-disable react/prop-types */
import { useTheme } from '../../context/useTheme'
import IconButton from '../ui/IconButton'

function SunIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
        </svg>
    )
}

function MoonIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

/**
 * Light/Dark theme toggle. `variant` is accepted for backward
 * compatibility with the drawer caller; both header and drawer share
 * the same outline pill styling, which lives on the shared IconButton.
 */
function ThemeToggle({ className = '' }) {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <IconButton
            tone="outline"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={className}
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
            <span className="whitespace-nowrap">
                {isDark ? 'Light mode' : 'Dark mode'}
            </span>
        </IconButton>
    )
}

export default ThemeToggle
