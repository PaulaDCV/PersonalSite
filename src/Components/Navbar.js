import {useState} from "react";
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {useSpring,animated} from "react-spring";

export  function Navbar({ fixed }) {
    const items = [
        {name: 'Home', href: '/', current: true},
        {name: 'About me', href: '/PersonalSite/about', current: false},
        {name: 'Projects', href: '/PersonalSite/projects', current: false},
        {name: 'Contact me', href: '/PersonalSite/contact', current: false},]
    const prop = useSpring({to: { y: 1 , opacity:1}, from: {y:100, opacity:0}, delay:1000});
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <NavLink
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  to="/PersonalSite"
                >
                  PDCV
                </NavLink>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <FaBars/>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center col" +
                  (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    {items.map( (item, index)=><li className="nav-item">
                <animated.div style ={prop}>
                <NavLink className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" activeClassName ="underline" exact  to={item.href} >{item.name}</NavLink>
               </animated.div>
                </li>
              )}


                </ul>
              </div>
            </div>
          </nav>
        </>
    );
}

