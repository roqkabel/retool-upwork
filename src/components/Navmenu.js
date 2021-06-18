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
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
            <Link to='/'>
                <div class="navbar-brand brand-icon" >Retool</div>
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
     
        <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
    
        <li class="nav-item me-3">
        <button className='btn btn-link border-0'>Sign In</button>
        </li>
        <li class="nav-item">
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
                    <li><a href=''>Customers</a></li>
                    <li><a href=''>Integartions</a></li>
                    <li><a href=''>Templates</a></li>
                    <li><a href=''>Pricing</a></li>
                    <li><a href=''>Docs</a></li>
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
