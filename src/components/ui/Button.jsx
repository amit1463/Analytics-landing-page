/**
 * Shared <Button> primitive.
 *
 * Created to deduplicate the 8 inline <button> elements that previously
 * lived in Hero.jsx and Pricing.jsx (extract-on-3 rule). Variants map to
 * the visual styles already used in the design:
 *
 *   - "primary"  : solid pink CTA ("Try for free")
 *   - "filled"   : solid pink rounded action ("Order" on the Standard plan)
 *   - "outline"  : transparent button with border ("Order" on Starter / Premium)
 *   - "ghost"    : unstyled label inside a decorated parent ("Sign Up")
 *   - "icon"     : icon-only button with no chrome (mobile menu open / close)
 *
 * Consumers can still pass `className` to layer on layout / spacing utilities
 * specific to the call-site without re-introducing duplicate base styles.
 */
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}

const VARIANT_CLASSES = {
    primary:
        'mt-[20px] sm:mt-[50px] px-[80px] w-[238px] rounded-[68px] py-[16px] bg-[#EF2A82] inline-flex text-white text-[16px] leading-[18px] font-normal',
    filled:
        'bg-[#EF2A82] mt-[40px] font-normal text-[16px] leading-[19px] px-[80px] py-[16px] rounded-[30px] text-white',
    outline:
        'border border-[#2A407C] mt-[40px] font-normal text-[16px] leading-[19px] px-[80px] py-[16px] rounded-[30px] text-white',
    ghost: 'whitespace-nowrap cursor-pointer group-hover:text-white',
    icon: 'cursor-pointer',
};

// Justification: this project does not use the deprecated `prop-types`
// runtime validator (none of the other components do, and React 19 has
// dropped first-party support for it). Disabling the lint rule keeps the
// shared primitive consistent with the rest of the codebase.
/* eslint-disable react/prop-types */
function Button({
    variant = 'primary',
    type = 'button',
    className = '',
    children,
    ...rest
}) {
    const base = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary;
    return (
        <button type={type} className={cx(base, className)} {...rest}>
            {children}
        </button>
    );
}

export default Button;
