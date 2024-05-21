import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from '../Image/logo.jpeg'

const Navbar = () => {
    const [isMobModeActive, setIsMobModeActive] = useState(false)
    const [isSearchActive, setIsSearchActive] = useState(false)

    const activeMobMode = () => {
        setIsMobModeActive(!isMobModeActive)
    }

    const deActiveMobMode = () => {
        setIsMobModeActive(false)
    }
    return (
        <>
            <header className='header-section'>
                <div className="header-container">
                    <div className="bottom-header">
                        <div className="top">
                            <div className={`logo ${isSearchActive ? 'logo-none' : ''}`} >
                                <Link to="/"> <img src={logo} alt="" className='logiimg' /></Link>
                            </div>
                            <nav className="nav">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/product">Our Categories</Link></li>
                                    <li><Link to='/cirtificates' >Our Certifications</Link></li>
                                    <li><Link to="/contact">CONTACT FOR MANUFACTURING</Link></li>
                                </ul>
                            </nav>
                            <div className="search">
                                <div className="icon">
                                    <i class="ri-search-line" style={{ display: "none" }}></i>
                                    <i class="ri-menu-line" onClick={activeMobMode}></i>
                                </div>
                                <div className={`search-box ${isSearchActive ? 'active-searchbar' : ''}`} >
                                    <input type="text" placeholder="Search" />
                                    <button>Search</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`mob-nav ${isMobModeActive ? 'mob-active' : ''}`}>
                        <div className="menu-close">
                            <i class="ri-close-fill" onClick={deActiveMobMode}></i>
                        </div>
                        <div onClick={deActiveMobMode} className="booking-btn">
                            <span>Quick Links</span>
                        </div>
                        <ul>
                            <li><Link to="/" onClick={deActiveMobMode}>Home</Link></li>
                            <li><Link to="/about" onClick={deActiveMobMode}>About</Link></li>
                            <li><Link to="/contact" onClick={deActiveMobMode}>CONTACT FOR MANUFACTURING</Link></li>
                            <li><Link to="/product" onClick={deActiveMobMode}>Our Categories</Link></li>
                            <li><Link to="/cirtificates" onClick={deActiveMobMode}>Our Certifications</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar