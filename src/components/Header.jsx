import React, { Component } from 'react';
import { Input, Select, Button, Icon } from 'antd';
import ShoppingIcon from '@material-ui/core/Icon';


// import resourses from local dir 
import siteLogo from '../images/demo-store-1401086283.jpg'
import './Header.css'


class Header extends Component {

    render() {

        return (
            <div className="headerContainer">
                <div className="headerImage">
                    <img src={siteLogo} alt="" />
                </div>

                <div className="headerSearch">
                    <Input placeholder = 'Search' addonAfter={<Icon type="search" style = {{fontSize: '20px',color: '#7DAFD4' }} />} />
                </div>

                <div className="headerShoppingIcon">
                    <ShoppingIcon style={{ fontSize: '40px', color: '#7DAFD4' }} theme="twoTone">shopping_cart</ShoppingIcon>
                    <a href="#">Card (empty)</a>
                </div>
            </div>
        );
    }
}

export default Header;

