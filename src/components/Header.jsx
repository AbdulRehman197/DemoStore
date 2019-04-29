import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input, Select } from 'antd';
import { Button } from 'antd';
import Icon from '@material-ui/core/Icon';


// import resourses from local dir 
import siteLogo from '../images/demo-store-1401086283.jpg'
import './Header.css'


class Header extends Component {

    render() {


        return (
            <div>
                <Row className = 'row1'>
                    <Col xs>
                        <div>
                            <img src={siteLogo} alt='' />
                        </div>
                    </Col>
                    <Col xs>
                        <div style={{ marginBottom: 16 }}>
                            <Input addonAfter={<Icon type="search" />} />
                        </div>
                    </Col>
                    <Col xs>
                    <Icon >shopping</Icon>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Header;

