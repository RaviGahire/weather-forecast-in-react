import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export const AppLogo = () => {
    return (
        <Link to="/">
            <div className='flex items-baseline font-semibold text-xl md:text-3xl tracking-wide text-neutral-50 cursor-pointer'>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 21 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="align-middle"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <motion.path d="M4 4l4 16l4 -14l4 14l4 -16"
                        initial={{ pathLength: 0, pathOffset: 1 }}
                        animate={{ pathLength: 1, pathOffset: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}

                    />
                </motion.svg>
                <span className="align-middle ">eather</span>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="align-middle"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <motion.path d="M14 8v3a1 1 0 0 0 1 1h3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",

                        }}

                    />
                    <motion.path d="M18 8v8"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 1
                        }}
                    />
                    <motion.path d="M6 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",

                        }}
                    />
                </motion.svg>
            </div>
        </Link>
    )
}
