import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark color="success">
                    <div className='container'>
                        <NavbarBrand href="/">Home</NavbarBrand>
                        <NavbarBrand href="/menu">Menu</NavbarBrand>
                        <NavbarBrand href="/about">About</NavbarBrand>
                        <NavbarBrand href="/contact">Contact</NavbarBrand>
                    </div>
                </Navbar>   
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Home</h1>
                                <p>We take inspiration from the World's best ciuiines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;