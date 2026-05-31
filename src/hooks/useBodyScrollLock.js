import { useEffect } from 'react'

/**
 * Lock body scroll while `locked` is true, compensating for the
 * scrollbar width so the page does not shift horizontally.
 */
export default function useBodyScrollLock(locked) {
    useEffect(() => {
        if (!locked) return undefined

        const { body } = document
        const previousOverflow = body.style.overflow
        const previousPaddingRight = body.style.paddingRight

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        if (scrollbarWidth > 0) {
            body.style.paddingRight = `${scrollbarWidth}px`
        }
        body.style.overflow = 'hidden'

        return () => {
            body.style.overflow = previousOverflow
            body.style.paddingRight = previousPaddingRight
        }
    }, [locked])
}
