import React, { useState } from 'react'
import logo from '../../assets/images/logo-videobelajar.svg'
import avatar from '../../assets/images/avatar.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <>
            <nav>
                <div className="flex justify-between items-center py-5 px-6 md:px-12 sticky top-0 bg-white z-20">
                    <a href=""><img src={logo} alt="logo-videobelajar" /></a>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md focus:ring-2 focus:ring-offset-2"
                        aria-controls="nav-item"
                        aria-expanded={isOpen}
                    >
                        <span className={`block bg-gray-800 h-0.5 w-6 rounded-sm transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
                        <span className={`block bg-gray-800 h-0.5 w-6 rounded-sm my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`block bg-gray-800 h-0.5 w-6 rounded-sm transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                    </button>

                    {/* Desktop nav items */}
                    <div id="nav-item" className="hidden md:flex gap-6 items-center"> 
                        <a href="#" className="text-sm md:text-base">Kategori</a>
                        <a href="#" className="profile"><img className="rounded-lg w-11" src={avatar} alt="photo-profile" /></a>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay sidebar/modal */}
            {isOpen && (
                <div className="fixed inset-0 z-30 md:hidden">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />

                    {/* Sidebar panel */}
                    <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 transform transition-transform duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <img src={logo} alt="logo" className="h-8" />
                            <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col gap-4">
                            <a href="#" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100">Kategori</a>
                            <a href="#" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100">Kursus Saya</a>
                            <a href="#" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100">Pesanan Saya</a>
                        </nav>

                        <div className="mt-auto pt-6">
                            <a href="#" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                                <img src={avatar} className="rounded-lg w-11" alt="profile" />
                                <span>Profil</span>
                            </a>
                        </div>
                    </aside>
                </div>
            )}
        </>
    )
}

export default Navbar