/* eslint-disable react/prop-types */
import { forwardRef } from 'react'

/**
 * Shared <Button /> primitive used across the landing page. Centralises
 * the previously duplicated inline <button> elements (hero CTA, pricing
 * order buttons, header sign-up) behind a small variant API so callers
 * don't repeat styling tokens. Icon-only buttons (hamburger, close,
 * theme toggle) live in the sibling `IconButton` primitive.
 *
 * Variants:
 *   - `primary` : pink filled pill (Standard plan / hero CTA when
 *                 paired with `size='cta'`).
 *   - `outline` : bordered pill on dark surface (Starter / Premium
 *                 Order buttons).
 *   - `cta`     : hero-style filled pink pill with extra padding.
 *   - `signup`  : header / drawer Sign-Up pill - bakes in the border,
 *                 padding and rounded corners so callers no longer
 *                 wrap a bare button in a styled <li>.
 *
 * Sizes apply only to `primary` / `outline` / `cta`:
 *   - `md` (default) : pricing-card Order button padding.
 *   - `cta`          : hero CTA padding.
 */
const VARIANT_CLASSES = {
    primary:
        'bg-[#EF2A82] font-normal text-[16px] leading-[19px] rounded-[30px] text-white',
    outline:
        'border border-[#2A407C] font-normal text-[16px] leading-[19px] rounded-[30px] text-white',
    cta:
        'bg-[#EF2A82] inline-flex text-white text-[16px] leading-[18px] font-normal rounded-[68px]',
    signup:
        'whitespace-nowrap rounded-[68px] border border-[#465B95] text-[#8794BA] hover:text-white hover:border-white transition-colors',
}

const SIZE_CLASSES = {
    md: 'px-[80px] py-[16px]',
    cta: 'mt-[20px] sm:mt-[50px] px-[80px] w-[238px] py-[16px]',
}

const SIGNUP_SIZE_CLASSES = {
    desktop: 'px-[43px] sm:px-[53px] py-[5px] sm:py-[10px]',
    drawer: 'px-[43px] py-[10px]',
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

    let sizeClass = ''
    if (variant === 'signup') {
        sizeClass = SIGNUP_SIZE_CLASSES[size] ?? SIGNUP_SIZE_CLASSES.desktop
    } else {
        sizeClass = SIZE_CLASSES[size] ?? SIZE_CLASSES.md
    }

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
