import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './style.css'
import './SearchBar.css'

function Header4() {
    const userName = localStorage.getItem("userName");
    return (
        <div className='collapse_bar'>
            <nav role='navigation'>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu">
                        <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold' }}>View or Pay Bill</li></a>
                        {/* <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Assign Account Managers</li></a> */}
                        <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>View Usage</li></a>
                        {/* <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Change Billing Address</li></a> */}
                        <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>View Notification</li></a>
                        {/* <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Manage Privacy Settings</li></a> */}
                        <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Manage Plans and Services</li></a>
                        <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Manage Apps and add-ons</li></a>
                        {/* <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Manage Communication Preferences</li></a> */}
                        <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Change Email Address</li></a>
                        <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Change Password</li></a>
                        <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Change Account PIN</li></a>
                        {/* <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Two Factor authentication</li></a> */}
                        {/* <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Account PIN</li></a> */}
                        {/* <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Number Lock</li></a> */}
                        {/* <a className="menu-b" href="#"><li className='menu-style' style={{fontSize:'16px',fontWeight:'bold'}}>Number Transfer PIN</li></a> */}
                    </ul>
                    
                    
                </div>
            </nav>
        </div>

    )
}

export default Header4