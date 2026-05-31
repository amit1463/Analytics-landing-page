/* eslint-disable react/prop-types */
import { forwardRef } from 'react'

/**
 * Shared <Button /> primitive used across the landing page. Centralises
 * the previously duplicated inline <button> elements (header sign-up,
 * hero CTA, pricing order buttons, theme toggle, drawer close +
 * hamburger) behind a small variant API so callers don't repeat
 * styling tokens.
 *
 * Variants:
 *   - `primary`  : pink filled pill (Standard plan / hero CTA when
 *                  paired with `size='cta'`).
 *   - `outline`  : bordered pill on dark surface (Starter / Premium
 *                  Order, Header Sign Up wrapper).
 *   - `cta`      : hero-style filled pink pill with extra padding.
 *   - `unstyled` : no visual styling, just a real <button>. Caller
 *                  controls every class (used by hamburger / close
 *                  icon buttons that wrap an SVG).
 *
 * Sizes apply only to non-`unstyled` variants:
 *   - `md` (default) : pricing-card Order button padding.
 *   - `sm`           : header sign-up padding.
 *   - `cta`          : hero CTA padding.
 */
const VARIANT_CLASSES = {
    primary:
        'bg-[#EF2A82] font-normal text-[16px] leading-[19px] rounded-[30px] text-white',
    outline:
        'border border-[#2A407C] font-normal text-[16px] leading-[19px] rounded-[30px] text-white',
    cta:
        'bg-[#EF2A82] inline-flex text-white text-[16px] leading-[18px] font-normal rounded-[68px]',
    unstyled: '',
}

const SIZE_CLASSES = {
    sm: 'whitespace-nowrap',
    md: 'px-[80px] py-[16px]',
    cta: 'mt-[20px] sm:mt-[50px] px-[80px] w-[238px] py-[16px]',
}

const Button = forwardRef(function Button(
    {
        type = 'button',
        variant = 'primary',
        size = 'md',
        className = '',
        children,
        ...rest
    },
    ref,
) {
    const variantClass = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary
    const sizeClass =
        variant === 'unstyled' ? '' : SIZE_CLASSES[size] ?? SIZE_CLASSES.md
    const composed = [variantClass, sizeClass, className]
        .filter(Boolean)
        .join(' ')

    return (
        <button ref={ref} type={type} className={composed} {...rest}>
            {children}
        </button>
    )
})

export default Button
