import  { useState } from 'react'
import { Footer } from './Footer';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState({ email: '', password: '' })

    const handle_User = (e) => {
        const { name, value } = e.target
        setLogin({ ...login, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log("Form submitted!", login);
        setLogin({ email: '', password: '' })
        navigate("/"); // go to home page
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6  my-10 lg:px-8 ">
                <div className=" w-100 border-1 border-gray-300 rounded-2xl py-10 px-5 mx-auto">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
                        <img
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Company Logo"
                            className="mx-auto h-10 w-auto"
                        />

                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#0F3460]">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                        <form className="space-y-6 " onSubmit={(e) => handleSumbit(e)}>
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm/6 font-medium text-[#0F3460]"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={(e) => handle_User(e)}
                                    value={login.email}
                                    required
                                    autoComplete="email"
                                    className="mt-2 block w-full rounded-md  px-3 py-1.5 text-base text-[#0F3460] 
              outline-1 -outline-offset-1 outline-[#0F3460]/10 placeholder:text-gray-500 
              focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm/6 font-medium text-[#0F3460]"
                                    >
                                        Password
                                    </label>

                                    <a
                                        href="#"
                                        className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={login.password}
                                    onChange={(e) => handle_User(e)}
                                    required
                                    autoComplete="current-password"
                                    className="mt-2 block w-full rounded-md  px-3 py-1.5 text-base text-[#0F3460] 
              outline-1 -outline-offset-1 outline-[#0F3460]/10 placeholder:text-gray-500 
              focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 cursor-pointer
            text-sm/6 font-semibold text-white hover:bg-indigo-400 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Sign in
                            </button>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-[#0F3460]">
                            Not a member?{" "}
                            <Link
                                to='/singup' className="font-semibold text-indigo-400 hover:text-indigo-300">
                                Start a 14 day free trial
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}
