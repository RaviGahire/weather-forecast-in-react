import { Link } from "react-router-dom";
import { AppLogo } from "../utils/AppLogo";
import { IconUser } from "@tabler/icons-react";
import { Navbar } from "./Navbar";
export const Header = () => {
  return (

    <>
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center mx-auto md:mt-2 p-3 bg-gray-900 text-neutral-50">
        <div className="logo">
          <AppLogo />
        </div>
        <Navbar />

        {/* User Loing btn */}
        <div className="hidden lg:block" >
          <div className="cursor-pointer flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <Link to='/singup'> <IconUser /></Link>
          </div>
        </div>
      </header>

    </>


  );
};
