/* eslint-disable react/prop-types */
import { useTheme } from '../../context/useTheme'

function SunIcon({ className = 'w-3 h-3' }) {
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

function MoonIcon({ className = 'w-3 h-3' }) {
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
 * Light/Dark theme toggle rendered as a slider-style switch (LCE-17).
 *
 * Uses the native checkbox role pattern (`role="switch"` on a button)
 * so screen readers announce it as an on/off control rather than the
 * previous text label. The sliding thumb carries sun/moon glyphs so the
 * current mode is also discoverable visually without copy.
 *
 * `onToggle` lets a parent run side-effects after the user flips the
 * switch (e.g. the mobile drawer closes itself when the user taps the
 * toggle inside the hamburger menu).
 */
function ThemeToggle({ className = '', onToggle }) {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    const handleClick = () => {
        toggleTheme()
        if (typeof onToggle === 'function') onToggle()
    }

    const trackBg = isDark ? 'bg-[#172755]' : 'bg-[#465B95]'
    const thumbPos = isDark ? 'translate-x-[26px]' : 'translate-x-0'
    const thumbColor = isDark ? 'text-[#172755]' : 'text-[#EF2A82]'

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={handleClick}
            className={[
                'relative inline-flex h-7 w-[56px] items-center rounded-full border border-[#465B95] cursor-pointer transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF2A82] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172755]',
                trackBg,
                className,
            ].filter(Boolean).join(' ')}
        >
            {/* Track icons — visible at the un-occupied end of the track */}
            <span className="pointer-events-none absolute left-1.5 flex items-center text-white/80" aria-hidden="true">
                <SunIcon />
            </span>
            <span className="pointer-events-none absolute right-1.5 flex items-center text-white/80" aria-hidden="true">
                <MoonIcon />
            </span>

            {/* Sliding thumb */}
            <span
                aria-hidden="true"
                className={[
                    'relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow transform transition-transform duration-200 ease-out',
                    thumbPos,
                    thumbColor,
                ].join(' ')}
                style={{ marginLeft: '2px' }}
            >
                {isDark ? <MoonIcon /> : <SunIcon />}
            </span>
        </button>
    )
}

export default ThemeToggle
