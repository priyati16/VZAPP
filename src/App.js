import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Shop from './components/Shop';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Why_verizon from './components/Why_verizon';
import Support from './components/Support';
import Search_file from './components/Search_file';
import Cart from './components/Cart';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header1 />
        <Header2 />
        <Header3 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/why_verizon" element={<Why_verizon />} />
          <Route path="/support" element={<Support />} />
          <Route path="/search" element={<Search_file />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>


    </>

  );
}

export default App;
