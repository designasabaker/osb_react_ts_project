import logoImg from '../assets/images/OSB-LOGO.png';
import {NavLink, Link} from "react-router-dom";

export const Header = () => {
  return (
    <nav className="sticky fixed z-50 top-0 w-full flex flex-row items-center justify-between overflow-hidden flex-wrap bg-white p-1 h-12 min-w-[210px]">
        <div className="flex px-6 items-center mr-6">
            {/*<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
            {/*<span className="font-semibold text-xl tracking-tight">OSB</span>*/}
            <Link to="/">
                <img src={logoImg} alt="OSB Logo" className="w-12 ml-3" />
            </Link>
        </div>
        <div className="block lg:hidden mr-3">
            <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div className="hidden px-6 lg:flex lg:items-center">
            <div className="text-sm">
                <NavLink to={'/ingredients'}
                         className={({ isActive, isPending }) =>
                            {return `block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4 ${isActive ? 'text-gray-500' : ''} `}
                }>
                    Ingredients
                </NavLink>
                <NavLink
                    to={'/contact'}
                    className={({ isActive, isPending }) =>
                    {return `block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4 ${isActive ? 'text-gray-500' : ''} `}
                }>
                    Contact Us
                </NavLink>
            </div>
        </div>
    </nav>
  )
};
