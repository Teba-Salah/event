import React from 'react';
import { BrowserRouter as Router, Routes, Route ,useLocation} from 'react-router-dom';
import './App.css';
import NavBar from './compontents/Navbar'; 
import Hhome from './compontents/Hhome' ;
import Login from './compontents/Login'; 
import Signup from './compontents/Singup';
import Footer from './compontents/Footer'; 
import Contact from './compontents/CONTACT/Contact.js';
import BBlogs from './compontents/Bklogs/BBlogs';
import Ti from './compontents/tikite/Ti.js';
import  GetStarted  from'./compontents/tikite/GetStarted';
import CreateYourEvent from './compontents/CreateYourEvent';
import About from './compontents/About';
import Event from './compontents/Eventpage'; 
import EventDetail from './compontents/EventDetail';

const App = () => {
  return (
      <Routes>
        <Route path="/Hhome"  element={<Hhome/>}/>
        <Route path="/About"  element={<About/>}/>
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Ti"  element={<Ti/>}/>
        <Route path="/BBlogs"  element={<BBlogs/>}/>
        <Route path="/CreateYourEvent"  element={<CreateYourEvent/>}/>
        <Route path="/Event" element={<Event />} />
        <Route path="/eventdetail/:eventId" element={<EventDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>

  );
};

const RootApp = () => {
  const location = useLocation();
  const noNavBarPaths = ['/eventdetail'];
  return (
    <div>
      {!noNavBarPaths.some(path => location.pathname.startsWith(path)) && <NavBar />}
      
      <App />
      <Footer />
    </div>
  );
};

const WrappedRootApp = () => (
  <Router>
    <RootApp />
  </Router>
);

export default WrappedRootApp;