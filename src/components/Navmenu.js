import React, { useState } from 'react'
import { Link } from "gatsby"
import HamburgerMenu from 'react-hamburger-menu'

export default function Navmenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
            <Link to='/'>
                <div className="navbar-brand brand-icon" >Retool</div>
            </Link>
            <div className="navbar-toggler border-0 ">
            <HamburgerMenu
            isOpen={isMenuOpen}
            menuClicked={() => toggleMenu()}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
            />

            </div>
     
        <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
    
        <li className="nav-item me-3">
        <button className='btn btn-link border-0'>Sign In</button>
        </li>
        <li className="nav-item">
        <button className='btn btn-primary px-3'>Sign Up</button>
        </li>
        
      </ul>
    </div>
        </div>

      
        </nav>

        {
            isMenuOpen && (
                <div className='menu-container'>
                <br/>
                <br/>
                <br/>
                <div className='custom-menu'>
                    <ul className='menu-navs'>
                    <li><a href='/#customer'>Customers</a></li>
                    <li><a href='/#integration'>Integartions</a></li>
                    <li><a href='/#templates'>Templates</a></li>
                    <li><a href='/#pricing'>Pricing</a></li>
                    <li><a href='/#docs'>Docs</a></li>
                    </ul>
        
                    <br/>
            <div className='px-4'>
                <button className='btn btn-primary w-100 mb-3 p-2'> Try Retool for free</button>
                <button className='btn btn-dark w-100 p-2'>Sign In</button>
            </div>
                </div>
                </div>
            )
        }
       
        </>
    )
}
