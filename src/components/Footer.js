import React from 'react'


function Footer() {
    return (
        <div>
            <footer className="bg-black">
                <div className="container py-5">
                    <div className="row py-4">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3" />
                            <p className="font-italic text-light">Follow Verizon</p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i  className="fa-brands fa-twitter social"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa-brands fa-facebook social"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa-brands fa-instagram social"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa-brands fa-pinterest social"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa-brands fa-vimeo social"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-light text-uppercase font-weight-bold mb-4"><b>About Verizon</b></h6>
                            <ul className="list-unstyled mb-0 ">
                                <li className="mb-2 "><a href="#" style={{textDecoration:'none'}} className="text-light ">About Us</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Careers</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">News</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Verizon Innovative Learning</a></li> 
                                {/* <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">consumer Education</a></li> */}
                               {/* <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Articles</a></li>  */}
                                {/* <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Responsibility</a></li> */}
                            </ul>
                        </div>

                         <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                             <h6 className="text-light text-uppercase font-weight-bold mb-4">Shop</h6>
                             <ul className="list-unstyled mb-0">
                                 <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Devices</a></li>
                                 <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Accessories</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Plans</a></li>
                                 <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Deals</a></li>
                                 {/* <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">TracFone</a></li> */}
                                 {/* <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Entertainment</a></li> */}
                                 {/* <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Home Internet and TV</a></li> */}
                            </ul>
                         </div>
                        {/* <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-light text-uppercase font-weight-bold mb-4">Top Device Brands</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Samsung</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Apple</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Motorola</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Amazon</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Google</a></li>
                            </ul>
                        </div> */}



                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-light text-uppercase font-weight-bold mb-4"><b>Support</b></h6>
                            <ul className="list-unstyled mb-0">
                                {/* <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Support</a></li> */}
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Return Policy</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Contact Us</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Sign in</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Download My Verizon App</a></li>
                                {/* <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Lifeline</a></li> */}
                            </ul>
                        </div>

                        {/* <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-light text-uppercase font-weight-bold mb-4"><b>About Verizon</b></h6>
                            <ul className="list-unstyled mb-0 ">
                                <li className="mb-2 "><a href="#" style={{textDecoration:'none'}} className="text-light ">About Us</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Careers</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">News</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Verizon Innovative Learning</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">consumer Education</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Articles</a></li>
                                <li className="mb-2"><a href="#" style={{textDecoration:'none'}} className="text-light">Responsibility</a></li>
                            </ul>
                        </div> */}

                         {/* <div className="col-lg-4 col-md-6 mb-lg-0">
                             <h6 style={{fontSize:'25px'}} className="text-light  font-weight-bold mb-4">verizon</h6> 
                             <img src='verizon_text.png' alt='verizon.com'/> 
                             <p className="text-light mb-4">Contact Verizon</p>
                            <div className="p-1 rounded border">
                                <div className="input-group">
                                    <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </div> 
                        </div>  */}
                    </div>
                </div>

                <div className="py-10">
                <img src='verizon_text.png' alt='verizon.com'/>
                    <div className="container text-center">
                        <p className="text-light mb-0 py-2">© 2022 Verizon All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer