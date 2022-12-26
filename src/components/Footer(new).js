import React from 'react'
import './style.css';


function Footer() {
    return (
        <footer className=" footer_ver bg-black">
            <div className='footer_div'>
                    

                <div className='verizon_text'>
                    <img style={{ padding: '20px' }} src='verizon_text.png' alt='verizon.com' />
                </div>

                <div className="verizon_follow">
                    <p className="font-italic text-light"><b style={{ padding: '52px' }}>Follow Verizon</b></p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a style={{ padding: '10px', height: '20px' }} href="#" target="_blank" title="twitter"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a style={{ padding: '10px', height: '20px' }} href="#" target="_blank" title="facebook"><i className="fa-brands fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a style={{ padding: '10px', height: '20px' }} href="#" target="_blank" title="instagram"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a style={{ padding: '10px', height: '20px' }} href="#" target="_blank" title="pinterest"><i className="fa-brands fa-pinterest"></i></a></li>
                        <li className="list-inline-item"><a style={{ padding: '10px', height: '20px' }} href="#" target="_blank" title="vimeo"><i className="fa-brands fa-vimeo"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <p className="text-light mb-0 py-2">© 2022 Verizon All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;