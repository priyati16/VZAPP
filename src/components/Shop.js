import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './SearchBar.css'

function Shop() {
  return (
    <div className='shop'>
      <div className='shop_items'>
        <ul className='bullet'>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Deals</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Devices</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Accessories</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Plans</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Home</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Prepaid</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Entertainment</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Shop