import React, { Component } from 'react';

//import components
import Header from '../../components/Header';
import NavbarComponent from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import './dashboard.css'



class Dashboard extends Component {
  render() {

    return (
      <div className='container'>
     <Header />
     <NavbarComponent />
     <Slider />
      </div>
    );
  }
}


export default Dashboard;
