import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from '../Components/Features/Header/Header';
import SideBar from '../Components/Features/SideBar/SideBar';
import Home from '../Components/Pages/Home/Home';
import Pants from '../Components/Pages/Pants/Pants';
import Shirts from '../Components/Pages/Shirts/Shirts';
import Shoes from '../Components/Pages/Shoes/Shoes';
import Contact from '../Components/Pages/Contact/Contact';
import Footer from '../Components/Features/Footer/Footer';

export default function RouterApp() {
  return(
      <Router>
          <Header/>
          <SideBar/>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/Shirts" element={<Shirts/>}/>
              <Route path="/Pants" element={<Pants/>}/>
              <Route path="/Shoes" element={<Shoes/>}/>
              <Route path="/Contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
      </Router>
  )
}
