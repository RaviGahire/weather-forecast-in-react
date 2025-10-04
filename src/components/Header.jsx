import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { IconMenu2 } from '@tabler/icons-react'
import { AppLogo } from './AppLogo'



export const Header = () => {
    const tabs = [
        { id: 1, path: "/", element: <Home />, title: "Home" },
        { id: 2, path: "/about", element: <About />, title: "About" },
        { id: 3, path: "/contact", element: <Contact />, title: "Contact" },


    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Router>
            {/* Header */}
            <header className='sticky top-0 z-50 flex justify-between items-center mx-auto md:mt-2 p-3 bg-neutral-200'>
                <div className="logo text-red-400">
                    <AppLogo />
                </div>
                {/* navigation bar */}
                <nav className='flex md:flex-row flex-col  '>
                    {tabs.map((tab) => (

                        <div className="hidden md:flex" key={tab.id}>
                            <NavLink key={tab.id} to={tab.path} className={({ isActive }) => (isActive ? 'text-white bg-blue-600 rounded-md px-3 py-2 mx-2' : 'mx-2 px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md')}>
                                {tab.title}
                            </NavLink>
                        </div>

                    ))}
                    {/* Menu Btn */}
                    <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                        <IconMenu2 size={24} />
                    </button>
                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="absolute inset-x-0 top-12  flex flex-col md:hidden bg-blue-500 backdrop-blur-sm">
                            {tabs.map((tab) => (
                                <NavLink key={tab.id} to={tab.path} className={({ isActive }) => (isActive ? 'text-white bg-blue-600 rounded-md px-3 py-2 my-1' : 'my-1 px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md')} onClick={() => setIsOpen(false)}>
                                    {tab.title}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </nav>
            </header>
            {/* Navigation Routes */}
            <Routes>
                {tabs.map((tab) => (
                    <Route key={tab.id} path={tab.path} element={tab.element} />
                ))}
            </Routes>
        </Router>

    )
}
