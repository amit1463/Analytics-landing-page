/* eslint-disable react/prop-types */
import { forwardRef } from 'react'

/**
 * Icon-only button primitive used for the mobile hamburger, drawer close
 * (X) icon, and the light/dark theme toggle. Centralises the previously
 * inlined <button>{ icon }</button> shape so callers don't repeat
 * accessibility + cursor + transition wiring.
 *
 * Tones (visual surface):
 *   - `bare`     : no border, no background. Header hamburger / drawer
 *                  close icon - caller controls colour via className.
 *   - `outline`  : pill border + subtle hover, used by ThemeToggle in
 *                  both header and drawer locations.
 */
const TONE_CLASSES = {
    bare: 'inline-flex items-center justify-center cursor-pointer',
    outline:
        'inline-flex items-center justify-center gap-2 rounded-full border border-[#465B95] px-3 py-2 text-[14px] leading-[16px] text-[#8794BA] transition-colors cursor-pointer hover:text-white hover:border-white',
}

const IconButton = forwardRef(function IconButton(
    {
        type = 'button',
        tone = 'bare',
        className = '',
        children,
        ...rest
    },
    ref,
) {
    const toneClass = TONE_CLASSES[tone] ?? TONE_CLASSES.bare
    const composed = [toneClass, className].filter(Boolean).join(' ')

    return (
        <button ref={ref} type={type} className={composed} {...rest}>
            {children}
        </button>
    )
})

export default IconButton
