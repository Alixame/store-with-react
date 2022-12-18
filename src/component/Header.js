import React from 'react'
import logo from '../logo.svg'
const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<img src={logo} alt="logo" className="w-16 h-16 mr-2 text-white" />
				<span className="font-semibold text-xl tracking-tight">Loja React</span>
			</div>

			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>

			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
						Home
					</a>
					
					<a href="/products" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
						Produtos
					</a>
				</div>
			</div>

			<div>
				<a href="/cart" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
					</svg>
				</a>
			</div>
		</nav>
    )
}

export default Header