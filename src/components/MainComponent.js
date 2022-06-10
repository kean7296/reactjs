// import logo from './logo.svg';
import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            // selectedDish: null
        };
        console.log('Main Component constructor is invoked');
    }

    componentDidMount() {
        console.log('Main Component componentDidMount is invoked');
    }

    componentDidUpdate() {
    console.log('Main Component componentDidUpdate is invoked');
    }
    
    // onDishSelect(dishId) {
    //     this.setState({selectedDish: dishId});
    // }

    render() {
        const HomePage = () => {
            return <Home/>;
        };

        return (
        <>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                <Route exact path="/detail" component={() => <DishDetail dishes={this.state.dishes} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer/>
        </>
        )
    }
}

export default Main;