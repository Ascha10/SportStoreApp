import React, { useContext } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from '../Components/Layout/Header/Header';
import SideBar from '../Components/Layout/SideBar/SideBar';
import Home from '../Components/Pages/Home/Home';
import Pants from '../Components/Pages/Pants/Pants';
import Shirts from '../Components/Pages/Shirts/Shirts';
import Shoes from '../Components/Pages/Shoes/Shoes';
import Contact from '../Components/Pages/Contact/Contact';
import Footer from '../Components/Layout/Footer/Footer';
import NotFound from '../Components/Pages/NotFound/NotFound';
import Users from '../Components/Pages/Users/Users';
import Admin from '../Components/Pages/Admin/Admin';
import Login from '../Components/Pages/Login/Login';
import Profile from '../Components/Pages/Profile/Profile';
import {AuthProvider} from '../Context/AuthProvider/AuthProvider';
import RequireAuth from '../Components/Layout/RequireAuth/RequireAuth'
import ThemeProvider from '../Context/ThemeProvider/ThemeProvider';


export default function RouterApp() {
  return(
    <AuthProvider>
      <ThemeProvider>
        <Router>
            <Header/>
            <SideBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Shirts" element={<Shirts/>}/>
                <Route path="/Pants" element={<Pants/>}/>
                <Route path="/Shoes" element={<Shoes/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Profile" element={<RequireAuth><Profile/></RequireAuth>}/>
                <Route path="/Login" element={<Login/>}>
                     <Route path="/Login/:userId" element={<Users/>}/>
                     <Route path="/Login/Admin" element={<Admin/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
        </ThemeProvider>
      </AuthProvider> 
  )
}
