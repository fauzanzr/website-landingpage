'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <header className={`fixed z-30 w-full transition duration-300 ${!top ? 'bg-white shadow-lg' : ''}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="relative flex items-center">
            <div className="mr-4 overflow-hidden">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#3a6e6d,#3a6e6d,#3a6e6d)] bg-[length:200%_auto] bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 hover:scale-105 md:text-3xl">
                DFB
              </h1>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <a
                  href="#features"
                  className="group relative mx-4 text-gray-600 transition duration-300 hover:text-[#3a6e6d]"
                >
                  Features
                  <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-[#3a6e6d] transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="group relative mx-4 text-gray-600 transition duration-300 hover:text-[#3a6e6d]"
                >
                  About
                  <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-[#3a6e6d] transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group relative mx-4 text-gray-600 transition duration-300 hover:text-[#3a6e6d]"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-[#3a6e6d] transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            <button
              className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition duration-300 hover:bg-[#3a6e6d]/10"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6 fill-current text-gray-600 transition-colors duration-300 group-hover:text-[#3a6e6d]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
