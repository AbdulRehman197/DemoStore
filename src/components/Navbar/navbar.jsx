// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
//     root: {
//         flexGrow: 1,
//     },
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20,
//     },
// };

// classNameName NavbarComponent extends Component {
//     render() {
//         const { classNameNamees } = this.props;
//         return (
//             <div classNameNameName={classNameNamees.root}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <IconButton classNameNameName={classNameNamees.menuButton} color="inherit" aria-label="Menu">
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" color="inherit" classNameNameName={classNameNamees.grow}>
//                             News
//                  </Typography>
//                         <Button color="inherit">Login</Button>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         );
//     }
// }

// NavbarComponent.propTypes = {
//     classNameNamees: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(NavbarComponent);
import React from 'react';

import $ from "jquery";
import './Navebar.css'
import './Navbar'
export default class NavbarComponent extends React.Component {

  componentWillMount() {

  }
  render() {

    return (
      <div>
        <div id='cssmenu'>
          <ul>

            {/* 1 sub menu */}
            <li className='active'><a href='#'>Electronics</a>
              <ul>
                <li><a href='#'>Mobiles</a>
                  <ul>
                    <li><a href='#'>Samsung Galaxy</a></li>
                    <li><a href='#'>Nokia Lumia</a></li>
                    <li><a href='#'>XOlO Q700i</a></li>
                    <li><a href='#'>Samsung Rex</a></li>
                    <li><a href='#'>Sony Xperia</a></li>
                    <li><a href='#'>HTC Desire</a></li>
                  </ul>
                </li>
                <li><a href='#'>Audio & Video</a>
                  <ul>
                    <li><a href='#'>MP3 Players</a></li>
                    <li><a href='#'>iPods</a></li>
                    <li><a href='#'>XOlO Q700i</a></li>
                    <li><a href='#'>Speakers</a></li>
                    <li><a href='#'>Video Players</a></li>
                    <li><a href='#'>All Audio & Video</a></li>
                  </ul>
                </li>
                <li><a href='#'>Cameras</a>
                  <ul>
                    <li><a href='#'>Canon Power Shot</a></li>
                    <li><a href='#'>Sony Cyber Shot</a></li>
                    <li><a href='#'>Camcorder</a></li>
                    <li><a href='#'>Mirrorless</a></li>
                    <li><a href='#'>Digital Photoframes</a></li>
                  </ul>
                </li>
                <li><a href='#'>Laptops</a>
                  <ul>
                    <li><a href='#'>Dell</a></li>
                    <li><a href='#'>Lenovo</a></li>
                    <li><a href='#'>Sony</a></li>
                    <li><a href='#'>Apple</a></li>
                    <li><a href='#'>HP</a></li>
                  </ul>
                </li>
                <li><a href='#'>Computer Accessories</a>
                  <ul>
                    <li><a href='#'>Peripherals</a></li>
                    <li><a href='#'>External Hard Disks</a></li>
                    <li><a href='#'>Computer Speakers </a></li>
                    <li><a href='#'>Printer & inks</a></li>
                    <li><a href='#'>PC Componenet</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* 1 menu */}

            <li><a href='#'>Accessories</a></li>
            {/* 2 menu */}

            <li className='active'><a href='#'>Fashion</a>
              <ul>
                <li><a href='#'>Men</a>
                  <ul>
                    <li><a href='#'>Coats & Jackets</a></li>
                    <li><a href='#'>Blazers</a></li>
                    <li><a href='#'>Raincoats</a></li>
                    <li><a href='#'>Shirts</a></li>
                  </ul>
                </li>
                <li><a href='#'>Women</a>
                  <ul>
                    <li><a href='#'>Evening Dresses</a></li>
                    <li><a href='#'>Tanks and Camis</a></li>
                    <li><a href='#'>Sleeveless tops</a></li>
                    <li><a href='#'>Hats & Gloves</a></li>
                  </ul>
                </li>
                <li><a href='#'>Children</a>
                  <ul>
                    <li><a href='#'>Dresses & Skirts</a></li>
                    <li><a href='#'>Casual Dresses</a></li>
                    <li><a href='#'>Shorts & Capries</a></li>
                    <li><a href='#'>Night Wear</a></li>
                  </ul>
                </li>
                <li><a href='#'>Clothing</a>
                  <ul>
                    <li><a href='#'>New Arrivals</a></li>
                    <li><a href='#'>Casual & Party Wear</a></li>
                    <li><a href='#'>Formal Shirts</a></li>
                    <li><a href='#'>Winter Wear</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* 2  menu */}
            <li><a href='#'>Interiors</a></li>
          </ul>
        </div>
      </div>
    );
  }
}