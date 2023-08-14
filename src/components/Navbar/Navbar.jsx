import React, { useContext, useEffect, useRef } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { MainContext } from '../../Context/MainContext';

export default function Navbar() {

    let { searchInput, handleSearch } = useContext(MainContext)

    return (
        <nav className='fixed w-full z-10'>
            <div className="container md:px-8 py-2 pt-4 flex justify-between items-center flex-wrap m-auto md:flex-nowrap ">
                <div className='lg:ps-4 logo'>
                    <Link to="/" aria-hidden="true" className='text-2xl py-2 flex items-center'>
                        <i className="fa-solid fa-video text-3xl mx-2"></i>
                        <span className='font-bold capitalize '>Noxe</span>
                    </Link>
                </div>

                <label htmlFor="menu-toggle" className='block md:hidden cursor-pointer self-center mr-2'>
                    <svg className='fill-current text-gray-200' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 20 20' >
                        <title>menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z '></path>
                    </svg>
                </label>

                <input type="checkbox" className='hidden ' id='menu-toggle' />

                <div className='hidden md:flex text-center md:flex-grow md:w-auto w-full items-center' id='menu'>

                    <ul className='pt-5 md:flex-grow md:pt-0 md:flex md:justify-center'>
                        <li
                            className='py-3 md:py-2 mx-4 flex items-center :hover:text-gray-400 hover:translate-x-1 md:hover:transform-none transition-all'>
                            <Link className='capitalize active:bg-blue-600 '>
                                Home
                            </Link>
                        </li>
                        <li
                            className='py-3 md:py-2 mx-4 flex items-center hover:text-gray-400 hover:translate-x-1 md:hover:transform-none transition-all '>
                            <Link to={"/trendingmovies"} className='capitalize'>
                                Movies
                            </Link>
                        </li>
                        <li

                            className='py-3 md:py-2 mx-4 flex items-center hover:text-gray-400 hover:translate-x-1 md:hover:transform-none transition-all '>
                            <Link to={"/trendingtvshow"} className='capitalize'>
                                Tv Show
                            </Link>
                        </li>
                        <li
                            className='py-3 md:py-2 mx-4 flex items-center hover:text-gray-400 hover:translate-x-1 md:hover:transform-none transition-all '>
                            <Link to={"/people"} className='capitalize'>
                                People
                            </Link>
                        </li>
                        <li
                            className='py-3 md:py-2 mx-4 flex items-center hover:text-gray-400 hover:translate-x-1 md:hover:transform-none transition-all '>
                            <Link className='capitalize'>
                                About
                            </Link>
                        </li>
                        <li
                            className='py-3 md:py-2 mx-4 flex items-center hover:text-gray-400 hover:translate-x-1 md:hover:transform-none transition-all '>
                            <Link className='capitalize'>
                                Networks
                            </Link>
                        </li>
                    </ul>
                    <div className='lg:pe-4 flex items-center md:me-auto  '>
                        <input ref={searchInput} onChange={handleSearch} type="search" className='disabled:opacity-75 mx-3 rounded cursor-pointer py-1 md:hidden lg:block' placeholder='Search' />
                        <div className="icons mx-4 md:hidden lg:flex sm-hidden">
                            <i className="mx-3 fa-brands fa-facebook"></i>
                            <i className="mx-3 fa-brands fa-shopify"></i>
                            <i className="mx-3 fa-brands fa-instagram"></i>
                            <i className="mx-3 fa-brands fa-youtube"></i>
                        </div>
                        <Link className='mx-2'>
                            <button>Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
