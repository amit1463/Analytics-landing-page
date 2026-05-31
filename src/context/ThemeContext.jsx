/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'theme'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null)

function getInitialTheme() {
    if (typeof window === 'undefined') return 'light'
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        if (stored === 'light' || stored === 'dark') return stored
    } catch {
        // ignore storage errors (private mode, etc.)
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }
    return 'light'
}

function applyThemeClass(theme) {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (theme === 'dark') {
        root.classList.add('dark')
    } else {
        root.classList.remove('dark')
    }
    root.style.colorScheme = theme
}

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(getInitialTheme)
    const [hasUserPreference, setHasUserPreference] = useState(() => {
        if (typeof window === 'undefined') return false
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY)
            return stored === 'light' || stored === 'dark'
        } catch {
            return false
        }
    })

    // Apply on mount + on every theme change
    useEffect(() => {
        applyThemeClass(theme)
    }, [theme])

    // Track system preference if user has not chosen
    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return undefined
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = (event) => {
            if (!hasUserPreference) {
                setThemeState(event.matches ? 'dark' : 'light')
            }
        }
        media.addEventListener('change', handler)
        return () => media.removeEventListener('change', handler)
    }, [hasUserPreference])

    const setTheme = useCallback((next) => {
        setThemeState(next)
        setHasUserPreference(true)
        try {
            window.localStorage.setItem(STORAGE_KEY, next)
        } catch {
            // ignore
        }
    }, [])

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }, [theme, setTheme])

    const value = useMemo(
        () => ({ theme, setTheme, toggleTheme }),
        [theme, setTheme, toggleTheme],
    )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Run before React renders to avoid flash-of-wrong-theme.
// eslint-disable-next-line react-refresh/only-export-components
export function applyInitialThemeBeforeRender() {
    if (typeof window === 'undefined') return
    applyThemeClass(getInitialTheme())
}
