import React, { Component } from 'react';
import { Carousel, Card, Icon } from 'antd';
import './Slider.css';
import image1 from '../../images/tmhomeslider/img/mainbanner-1.jpg'
import { FormHelperText } from '@material-ui/core';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
    }
    previous() {
        this.carousel.prev();
    }
    next() {
        this.carousel.next();
    }
    render() {
        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        };
        return (
            <div style={{ marginTop: 50, display: 'flex', alignItems: 'center' }}>
                <Card style={{ width: '70%' }}>
                    <Icon className='leftIcon' type="left-circle" onClick={this.previous} />
                    <Carousel ref={node => (this.carousel = node)} {...props} autoplay>
                        <div><img src={image1} alt='' width='100%' /></div>
                        <div><img src={image1} alt='' width='100%' /></div>
                        <div><img src={image1} alt='' width='100%' /></div>
                    </Carousel>
                    <Icon className='rightIcon' type="right-circle" onClick={this.next} />


                </Card>
            </div>
        );
    }
}

export default Slider;
