/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import useFocusTrap from '../../hooks/useFocusTrap'
import useBodyScrollLock from '../../hooks/useBodyScrollLock'

const NAV_ITEMS = ['Products', 'Pricing', 'FAQ', 'Blog', 'Contact']

function HamburgerIcon({ className = 'w-6 h-6' }) {
    return (
        <svg className={className} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
        </svg>
    )
}

function CloseIcon({ className = 'w-5 h-5' }) {
    return (
        <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
    )
}

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const drawerRef = useRef(null)
    const hamburgerButtonRef = useRef(null)

    const closeMenu = useCallback(() => setIsMenuOpen(false), [])
    const openMenu = useCallback(() => setIsMenuOpen(true), [])

    useFocusTrap(drawerRef, isMenuOpen, closeMenu)
    useBodyScrollLock(isMenuOpen)

    // Auto-close the drawer if the viewport grows past the mobile breakpoint.
    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return undefined
        const media = window.matchMedia('(min-width: 768px)')
        const handler = (event) => {
            if (event.matches) closeMenu()
        }
        media.addEventListener('change', handler)
        return () => media.removeEventListener('change', handler)
    }, [closeMenu])

    return (
        <div className="px-[24px] sm:px-[60px] 2xl:px-[210px] mx-auto pt-[50px]">
            <div className="flex items-center justify-between gap-4">
                {/* Mobile hamburger - top-LEFT */}
                <button
                    type="button"
                    ref={hamburgerButtonRef}
                    onClick={openMenu}
                    aria-label="Open navigation menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav-drawer"
                    className="block md:hidden cursor-pointer text-white order-1"
                >
                    <HamburgerIcon />
                </button>

                {/* Logo + desktop nav */}
                <div className="flex items-center order-2 md:order-1">
                    <ul>
                        <li className="inline-flex items-center">
                            <img src="logo.png" alt="Analytics logo" />
                        </li>
                    </ul>
                    <ul className="hidden lg:flex items-center ml-[82px] gap-9 text-[#8794BA] text-[16px] leading-[18px] font-normal">
                        {NAV_ITEMS.map((item) => (
                            <li key={item}>
                                <h3>{item}</h3>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop right cluster: theme toggle + Sign in / Sign up */}
                <ul className="hidden md:flex items-center text-[#8794BA] gap-[24px] lg:gap-[40px] text-[16px] order-3">
                    <li>
                        <ThemeToggle />
                    </li>
                    <li className="hidden md:block">
                        <h3>Sign in</h3>
                    </li>
                    <li className="px-[43px] sm:px-[53px] py-[5px] sm:py-[10px] rounded-[68px] border border-[#465B95] flex items-center justify-center">
                        <button type="button" className="whitespace-nowrap">Sign Up</button>
                    </li>
                </ul>

                {/* Mobile right placeholder so the logo stays centered visually */}
                <div className="block md:hidden order-3 w-6" aria-hidden="true" />
            </div>

            {/* Mobile drawer + backdrop */}
            <div
                className={`fixed inset-0 z-[2000] md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                aria-hidden={!isMenuOpen}
            >
                {/* Backdrop */}
                <div
                    onClick={closeMenu}
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Drawer panel - slides from left */}
                <aside
                    ref={drawerRef}
                    id="mobile-nav-drawer"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    tabIndex={-1}
                    className={`absolute top-0 left-0 h-full w-[80%] max-w-[320px] bg-[#0f1a3d] dark:bg-[#06102a] shadow-2xl transform transition-transform duration-300 ease-out ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex items-center justify-between px-6 pt-6">
                        <img src="logo.png" alt="Analytics logo" className="h-8 w-auto" />
                        <button
                            type="button"
                            onClick={closeMenu}
                            aria-label="Close navigation menu"
                            className="text-[#8794BA] hover:text-white cursor-pointer p-2 -mr-2"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <nav aria-label="Mobile">
                        <ul className="flex flex-col px-6 pt-10 gap-7 text-[#8794BA] text-[16px] leading-[18px] font-normal">
                            {NAV_ITEMS.map((item) => (
                                <li key={item} className="hover:text-white cursor-pointer">
                                    <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                                        <h3>{item}</h3>
                                    </a>
                                </li>
                            ))}
                            <li>
                                <ThemeToggle variant="drawer" className="w-full justify-center" />
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                <a href="#sign-in" onClick={closeMenu}>
                                    <h3>Sign in</h3>
                                </a>
                            </li>
                            <li className="px-[43px] py-[10px] rounded-[68px] border border-[#465B95] cursor-pointer group hover:border-white flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={closeMenu}
                                    className="whitespace-nowrap group-hover:text-white"
                                >
                                    Sign Up
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default Header
