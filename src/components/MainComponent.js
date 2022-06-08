// import logo from './logo.svg';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
        console.log('Main Component constructor is invoked');
    }

    componentDidMount() {
        console.log('Main Component componentDidMount is invoked');
    }

    componentDidUpdate() {
    console.log('Main Component componentDidUpdate is invoked');
    }
    
    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {
        return (
        <div className=''>
            <Navbar dark color="success">
                <div className='container'>
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarBrand href="/menu">Menu</NavbarBrand>
                    <NavbarBrand href="/about">About</NavbarBrand>
                    <NavbarBrand href="/contact">Contact</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={this.state.dishes}  onClick={(id)=>this.onDishSelect(id)} />
            <DishDetail dishes={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
        </div>
        )
    }
}

export default Main;