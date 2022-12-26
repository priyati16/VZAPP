import React from 'react';
import './style.css'
import './SearchBar.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card'
import SettingsIcon from '@mui/icons-material/Settings';
import FiberPinIcon from '@mui/icons-material/FiberPin';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ScreenLockPortraitIcon from '@mui/icons-material/ScreenLockPortrait';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PasswordIcon from '@mui/icons-material/Password';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AodIcon from '@mui/icons-material/Aod';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SecurityIcon from '@mui/icons-material/Security';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AppsIcon from '@mui/icons-material/Apps';


function Header4() {
    const userName = localStorage.getItem("userName");
    return (
        <>
            {['bottom'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover className='overlay ' id={`popover-positioned-${placement}`}>
                            <AppsIcon/>

                            <Popover.Body className='quick_menu'>
                                
                                <div className='column d-flex' style={{ width: 'auto', height: 'auto' }}>
                                    <div className='justify-content-center align-items-center'>
                                        <Card style={{ width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <SettingsIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>Settings</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ width: '6rem', height:'6rem', background: "black" }} className="card_style">
                                            <Card.Body>
                                                <FiberPinIcon style={{ fontSize:'25px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>PIN Change</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ width: '6rem', height:'6rem', background: "black" }} className="card_style">
                                            <Card.Body>
                                                <PrivacyTipIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>Transfer PIN</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='justify-content-center align-items-center'>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <PhonelinkLockIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>Change Password</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <MarkunreadIcon style={{ fontSize:'30px' , color: 'white' }}/>
                                                <p style={{ color: 'white' }}>Change Email </p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                            <ManageAccountsIcon style={{ fontSize:'30px' , color: 'white' }}/>
                                                <p style={{ color: 'white' }}>Manage Account</p>
                                            </Card.Body>
                                        </Card>

                                    </div>
                                    <div className='justify-content-center align-items-center'>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                            <VpnKeyIcon style={{ fontSize:'30px' , color: 'white' }}/>
                                                <p style={{ color: 'white' }}>VPN key</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <ScreenLockPortraitIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>Number Lock</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <PermIdentityIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>User Id</p>
                                            </Card.Body>
                                        </Card>

                                    </div>

                                    <div className='justify-content-center align-items-center'>

                                        <Card style={{ height:'6rem' , width: 'rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <PasswordIcon style={{ fontSize:'30px' , color: 'white' }}/>
                                                <p style={{ color: 'white' }}>Password</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <NotificationsActiveIcon style={{ fontSize:'30px' , color: 'white' }}/>
                                                <p style={{ color: 'white' }}>Notification</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                            < SecurityIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>Security</p>
                                            </Card.Body>
                                        </Card>

                                    </div>

                                    <div className='justify-content-center align-items-center'>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                            < PermContactCalendarIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>Contact & Billing</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                            < AddModeratorIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>Privacy Preferences</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <AodIcon style={{ fontSize:'30px' , color: 'white' }}/>
                                                <p style={{ color: 'white' }}>My Devices</p>
                                            </Card.Body>
                                        </Card>

                                    </div>

                                    <div className='justify-content-center align-items-center'>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                 <LocalMallIcon style={{ fontSize:'30px' , color: 'white' }} />
                                                <p style={{ color: 'white' }}>Orders</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                            < DataUsageIcon  style={{ fontSize:'30px' , color: 'white' }}/>
                                                <p style={{ color: 'white' }}>Usage</p>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ height:'6rem' , width: '6rem', border: "none", background: "black" }} className="card_style">
                                            <Card.Body>
                                                <AttachMoneyIcon style={{ fontSize:'30px' , color: 'white' }}/>
                                                <p style={{ color: 'white' }}> Pay Bill</p>
                                            </Card.Body>
                                        </Card>

                                    </div>
                                </div>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button className='quick_link'>
                    < AppsIcon style={{color:'white' ,fontSize:'30px',marginRight: '11px',
    marginBottom: '9px'}} />
                        {/* <i className="fas fa-bars" style={{ color: 'white' }}></i> */}
                    </button>
                </OverlayTrigger>
            ))}
        </>

    )
}

export default Header4