import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'



export const Header = () => {
    const tabs = [
        { id: 1, path: "/", element: <Home />, title: "Home" },
        { id: 2, path: "/about", element: <About />, title: "About" },
        { id: 3, path: "/contact", element: <Contact />, title: "Contact" },

        
    ];



    return (
        <>
            {/* Header */}
            <header aria-label='website-header' className='header bg-blue-400 text-white p-4 flex justify-between items-center'>
                <nav className='bg-transparent '>
                    <Router>
                        {tabs.map((tab) => (
                            <NavLink key={tab.id} to={tab.path} className={({ isActive }) => (isActive ? 'text-white bg-blue-600 rounded-md px-3 py-2 mx-2' : 'mx-2 px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md')}>
                                {tab.title}
                            </NavLink>
                        ))}

                        {/* Routes for the navigation */}
                        <Routes>
                            {tabs.map((tab) => (
                                <Route key={tab.id} path={tab.path} element={tab.element} />
                            ))}
                        </Routes>
                    </Router>
                </nav>
            </header>



        </>


    )
}
