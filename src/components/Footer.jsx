import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-blue-200 py-6 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <span className="text-blue-700 font-semibold text-lg">
          Weather 24 &copy; {new Date().getFullYear()}
        </span>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition">Privacy</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition">Terms</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
