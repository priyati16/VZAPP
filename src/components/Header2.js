import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import './style.css';
import './SearchBar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'
import data from '../Data.json'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import BookData from '../Data.json'
import { Hidden } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import AccountSettings from './AccountSettings';
import Header4 from './Header4';



function Header2() {
    const userName = localStorage.getItem("userName");

    const navigate = useNavigate();
    const [account, setAccount] = useState(false);
    const [myaccount, setMyAccount] = useState(false);
    const [bill, setBill] = useState(false);
    const [accountSetting, setaccountSetting] = useState(false);
    const [usage, setusage] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logIn = () => {
        navigate("/login");
    }

    const logOut = () => {
        localStorage.clear();
        navigate("/")
    }

    const accountOverview = () => {
        navigate("/dashboard");
    }

    const accountSettings = () => {
        navigate("/account-settings");
    }


    return (
        <>
            {/* className='text-center justify-content-center' */}
            <Navbar style={{ height: '53px' }} bg="black" variant="dark">
                {/* <div className='logo'>
                    <Link to="/"><img src="verizon_logo.jpg" alt=" " /></Link>
                </div> */}
                <div className='d-flex' style={{ paddingRight: "10px",    paddingLeft: '12px' }}>


                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav className="header_mouse" >
                            <NavDropdown
                                className='verizon_text '
                                id="nav-dropdown-dark-example"
                                style={{ marginLeft: '50px', fontSize: '12px' }}
                                title="Shop"
                                menuVariant="dark"
                                bg="dark"

                            >
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.1">Deals</NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.2">  Devices </NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.3">Accessories</NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.4">Plans </NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.4">Prepaid</NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.4">Plans </NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.4">Entertainment </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <NavDropdown
                                className='verizon_text'
                                style={{ marginLeft: '30px', fontSize: '18px' }}
                                id="nav-dropdown-dark-example"
                                title="Why Verizon"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.1">Network</NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.2">  Get More </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav style={{ backgroundColor: 'black' }}>
                            <NavDropdown
                                className='verizon_text'
                                id="nav-dropdown-dark-example"
                                title="Support"
                                menuVariant="dark"
                                style={{ backgroundColor: 'black', marginLeft: '30px', fontSize: '18px' }}

                            >
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.1">Mobile</NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.2">  Home </NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.3">Business</NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.4">Contact Us </NavDropdown.Item>
                                <NavDropdown.Item style={{ backgroundColor: 'black', fontSize: '16px' }} href="#action/3.4">Sign In</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </div>
                <div style={{ marginRight: '160px' }} className='search_icon'>


                    <SearchBar style={{ marginRight: '20px' }} className='search' placeholder="Enter a plan or any product ..." data={BookData} />
                </div>



                <div className='d-flex' >
                    <div className="my-account" onMouseOver={() => setMyAccount(true)} onMouseLeave={() => setMyAccount(false)}>
                        <a className='sign_In' style={{fontSize:'18px'}} href="#"><b>Sign In</b></a>
                        {myaccount &&
                            <ul>
                                {(userName && userName != null) ?
                                    <>
                                        <li>View or Pay Your Bill</li>
                                        <li>View Usage</li>
                                        <li>View Notifications</li>
                                        <li>Manage Plans and Services</li>
                                        <li>Manage Apps and Add-Ons</li>
                                    </> :
                                    <>
                                        <li>Register</li>
                                        <li>Instant Pay</li>
                                        <li>Wishlist</li>
                                        <li>Bussiness Sign In</li>
                                        


                                    </>
                                }
                                <li>{(userName && userName != null) ? <span onClick={logOut}>Sign Out</span>  : <span onClick={logIn}>Sign In</span>}</li>

                            </ul>
                        }
                    </div>
                </div>
                <Header4 className='overlay'/>
                




                <div style={{ background: 'black', marginRight: '150px' }} className='search_bag'>

                    <div style={{ background: 'black' }} className="btn-group dropleft">

                        <div style={{ background: 'black' }} className="dropdown-menu ">
                            <a style={{ color: 'white' }} className="clr dropdown-item" href="#"><b>Mobile Solutions</b></a>
                            <a style={{ color: 'white' }} className=" clr dropdown-item" href="#"><b>Home Solutions</b></a>
                            {/* <a style={{ color: 'white' }} className="dropdown-item" href="#">Something else here</a> */}

                        </div>
                        <button style={{ background: 'black' }} type="button" className="cart dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa-solid fa-bag-shopping" style={{ color: 'white' }}></i>
                        </button>

                    </div>

                </div>

            </Navbar>
        </>
    )
}

export default Header2