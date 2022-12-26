import React,{useState} from "react";
import './style.css'





const AccountSettings = () => {
    const [quicklinks, setQuicklinks] = useState(false);
    const [ContactBilling, setContactBilling] = useState(false);


    return (
        <div className="container" style={{ marginTop: "50px", height: "300px" }}>
            <div className="d-flex">
                <div style={{ width: "25%" }}>
                    <div className="account-settings-sidenav">
                        <ul>
                            <li><h4>Quick Links</h4></li>
                            <div onMouseOver={() => setQuicklinks(true)} onMouseLeave={() => setQuicklinks(false)}>
                            <li><h5>Security</h5></li>
                            {quicklinks &&
                                <ul className="security">
                                    <li>User Id</li>
                                    <li>Password</li>
                                    <li>Account PIN</li>
                                    <li>Secret question</li>
                                    <li>Two - factor authentication</li>
                                    <li>Number Lock</li>
                                    <li>Number Transfer PIN</li>
                                    <li>Voice ID</li>
                                </ul>
                            }
                            </div>
                        </ul>
                        <ul>
                            <li><h4>Contact & Billing</h4></li>
                            <div onMouseOver={() => setQuicklinks(true)} onMouseLeave={() => setQuicklinks(false)}>
                            {quicklinks &&
                            <ul className="Contact & Billing">
                            <li>Email Address</li>
                            <li>Contact Numbers</li>
                            <li>Billing Address</li>
                            <li>Service Addresses</li>
                            <li>Payment Settings</li>
                            <li><h4>Account Management</h4></li>
                            <li>Account Managers</li>
                            <li>Preferred Name and Pronouns</li>
                            <li>Transfer of Service</li>
                            <li>Documents and Receipts</li>
                            <li>Communication Preferences</li>
                            </ul>
                          }
                          </div>
                        </ul>
                    </div>
                </div>
                <div style={{ width: "75%" }}>
                    <h2>My Profile</h2>
                    <p>You are the account owner.what does this mean?</p>
                    <p>Your Account Number:0625300355-00001</p>
                    <hr />
                    <div>
                        <h3>Quick Links</h3>
                        <p>A few common settings to get you started.</p>

                    </div>
                    <div text="bold" className="middleContent d-flex" style={{ marginTop: "20px" }}>
                        <div className="d-flex justify-content-between" style={{ width: "57%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <p>Change Email Address</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className="d-flex justify-content-between" style={{ width: "57%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <p>Assign Account Managers</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="middleContent d-flex" style={{ marginTop: "20px" }}>
                        <div className="d-flex justify-content-between" style={{ width: "57%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <p>Change Password</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className="d-flex justify-content-between" style={{ width: "57%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <em><p>Change Billing Address</p></em>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="middleContent d-flex" style={{ marginTop: "20px" }}>
                        <div className="d-flex justify-content-between" style={{ width: "57%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <p>Change Account PIN</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className="d-flex justify-content-between" style={{ width: "57%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <p>Manage Privacy Settings</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div text="bold" className="middleContent d-flex" style={{ marginTop: "20px" }}>

                        <div className="d-flex justify-content-between" style={{ width: "57%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <p>Number Lock</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className="d-flex justify-content-between" style={{ width: "57%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <p>Transfer PIN</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="middleContent d-flex" style={{ marginTop: "20px" }}>

                        <div className="d-flex justify-content-between" style={{ width: "49%", height: "50px", margin: "5px", padding: "10px", backgroundColor: "whitesmoke" }}>
                            <em><p>Manage Communication Preferences</p></em>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default AccountSettings;