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

// class NavbarComponent extends Component {
//     render() {
//         const { classes } = this.props;
//         return (
//             <div className={classes.root}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" color="inherit" className={classes.grow}>
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
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(NavbarComponent);
import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import './Navebar.css'
  export default class NavbarComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar style = {{backgroundColor : '#8BC52B' ,borderRadius:5,marginTop:20 ,color:'white'}}  expand="md">
            <NavbarBrand  className = 'navItemLink' href="/">CATAGORIES</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem  >
                  <NavLink  className = 'navItemLink'href="/components/">ELECTRONICS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className = 'navItemLink' href="https://github.com/reactstrap/reactstrap">ACCESSOIRES</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className = 'navItemLink' nav >
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem >
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }