// import logo from './logo.svg';
import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { connect } from 'react-redux';


import { 
    Switch, 
    Route, 
    Redirect,
    withRouter 
} from 'react-router-dom';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        comments: state.comments,
        leaders: state.leaders
    }
};

export class Main extends Component {
    constructor(props) {
        super(props);

        console.log('Main Component constructor is invoked');
    }


    // componentDidMount() {
    //     console.log('Main Component componentDidMount is invoked');
    // }

    // componentDidUpdate() {
    // console.log('Main Component componentDidUpdate is invoked');
    // }
    
    // onDishSelect(dishId) {
    //     this.setState({selectedDish: dishId});
    // }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    comment={this.props.comments.filter((comment) => comment.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({match}) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />                
            );
        }

        const AboutUs = () => {
            return (
                <About leaders={this.props.leaders} />
            );
        };

        return (
        <>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={AboutUs}/>
                <Redirect to="/home" />
            </Switch>
            <Footer/>
        </>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));