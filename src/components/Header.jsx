import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { useState } from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

import {
  IconMenu2,
  IconX,
  IconBrandX,
  IconBrandInstagram,
  IconBrandYoutube,
  IconUser,
} from "@tabler/icons-react";
import { AppLogo } from "./AppLogo";
import { WeatherDashboard } from "./Dashboard";
import { WeatherNews } from "./News";
import { LocationFinder } from "./Findlocation";
import ErrorBoundary from "./ErorrBoundary";
import SignUp from "./SignUp";

export const Header = () => {

  // Navigation tab
  const tabs = [
    { id: 1, path: "/", element: <Home />, title: "Home" },
    {
      id: 2,
      path: "/dashboard",
      element: <LocationFinder><ErrorBoundary><WeatherDashboard /></ErrorBoundary></LocationFinder>,
      title: "Weather",
    },
    { id: 3, path: "/news", element: <WeatherNews />, title: "Weather News" },
    { id: 4, path: "/about", element: <About />, title: "About" },
    { id: 5, path: "/contact", element: <Contact />, title: "Contact" },
    { id: 7, path: "/singup", element: <SignUp /> },
  ];

  const [isOpen, setIsOpen] = useState(false);


  return (
    <Router>
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center mx-auto md:mt-2 p-3 bg-gray-900 text-neutral-50">
        <div className="logo">
          <AppLogo />
        </div>
        {/* navigation bar */}
        <nav className="flex md:flex-row flex-col ">
          {tabs.map((tab) => (
            <div
              className="hidden md:flex font-medium tracking-tight "
              key={tab.id}
            >
              <NavLink
                key={tab.id}
                to={tab.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400  px-3 py-2 mx-2 "
                    : "mx-2 px-3 py-2 hover:text-yellow-200 "
                }
              >
                {tab.title}
              </NavLink>
            </div>
          ))}

          {/* Menu Btn */}
          <button
            className="md:hidden text-white transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconX size={26} /> : <IconMenu2 size={26} />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 top-12 flex flex-col md:hidden bg-gray-800 font-medium tracking-tight transform transition-all duration-300 ease-in-out origin-top border-b border-amber-200
                             ${isOpen
                ? "opacity-100 scale-y-100"
                : "opacity-0 scale-y-0"
              }`}
          >
            {tabs.map((tab) => (
              <NavLink
                key={tab.id}
                to={tab.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 px-3 py-2 my-1 translate-x-1 transition"
                    : "my-1 px-3 py-2 transition"
                }
              >
                {tab.title}
              </NavLink>
            ))}

            <div
              aria-label="social-icons"
              className="flex justify-center space-x-3 my-2"
            >
              <IconBrandX stroke={1} size={24} />
              <IconBrandInstagram stroke={1} size={24} />
              <IconBrandYoutube stroke={1} size={24} />
            </div>
            <div className="md:hidden flex justify-center space-x-3 my-2  gap-4 p-2">
              <button className="cursor-pointer px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
                Login
              </button>

              <button className="cursor-pointer px-4 py-1 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-600 shadow-md hover:bg-indigo-50 hover:scale-105 transition-transform duration-300">
                Signup
              </button>
            </div>

            <div className="p-3 text-sm text-gray-400 text-center font-mono">
              &copy; {new Date().getFullYear()} Weather-24. All rights reserved.
            </div>
          </div>
        </nav>

        {/* User Loing btn */}
        <div className="hidden lg:block" >
          <div className="cursor-pointer flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <Link to='/singup'> <IconUser /></Link>
          </div>
        </div>
      </header>
      {/* Navigation Routes */}
      <Routes>
        {tabs.map((tab) => (
          <Route key={tab.id} path={tab.path} element={tab.element} />
        ))}
      </Routes>
    </Router>
  );
};
