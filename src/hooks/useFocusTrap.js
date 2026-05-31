import { useEffect } from 'react'

const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(',')

/**
 * Trap keyboard focus within `containerRef` while `active` is true.
 * Also wires Escape to call `onEscape` and restores focus to the
 * previously focused element when the trap deactivates.
 */
export default function useFocusTrap(containerRef, active, onEscape) {
    useEffect(() => {
        if (!active) return undefined
        const container = containerRef.current
        if (!container) return undefined

        const previouslyFocused = document.activeElement

        const focusables = container.querySelectorAll(FOCUSABLE_SELECTOR)
        if (focusables.length > 0) {
            focusables[0].focus()
        } else {
            container.focus()
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.stopPropagation()
                onEscape?.()
                return
            }
            if (event.key !== 'Tab') return

            const items = container.querySelectorAll(FOCUSABLE_SELECTOR)
            if (items.length === 0) {
                event.preventDefault()
                return
            }
            const first = items[0]
            const last = items[items.length - 1]
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault()
                last.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault()
                first.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
                previouslyFocused.focus()
            }
        }
    }, [active, containerRef, onEscape])
}
