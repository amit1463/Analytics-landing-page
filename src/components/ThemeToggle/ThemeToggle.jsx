/* eslint-disable react/prop-types */
import { useTheme } from '../../context/useTheme'
import Button from '../ui/Button'

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
 * Light/Dark theme toggle. `variant` controls coloring so the same
 * component fits both the dark hero header and the drawer.
 */
function ThemeToggle({ variant = 'header', className = '' }) {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    const variantClass =
        variant === 'drawer'
            ? 'border-[#465B95] text-[#8794BA] hover:text-white hover:border-white'
            : 'border-[#465B95] text-[#8794BA] hover:text-white hover:border-white'

    return (
        <Button
            variant="unstyled"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-[14px] leading-[16px] transition-colors cursor-pointer ${variantClass} ${className}`}
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
            <span className="whitespace-nowrap">
                {isDark ? 'Light mode' : 'Dark mode'}
            </span>
        </Button>
    )
}

export default ThemeToggle
