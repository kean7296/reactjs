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
import { addComment, fetchDishes, fetchComments, fetchPromos, postComment } from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';

import { 
    Switch, 
    Route, 
    Redirect,
    withRouter 
} from 'react-router-dom';

const mapStateToProps = state => ({
    dishes: state.dishes,
    promotions: state.promotions,
    comments: state.comments,
    leaders: state.leaders
});

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, commment) => dispatch(postComment(dishId, rating, author, commment)),
    fetchDishes: () => dispatch(fetchDishes()),
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
});

export class Main extends Component {
    constructor(props) {
        super(props);

        console.log('Main Component constructor is invoked');
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({match}) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addComment}
                    postComment={this.props.postComment}
                />                
            );
        }

        const AboutUs = () => <About leaders={this.props.leaders} />;

        return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => 
                    <Menu dishes={this.props.dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path="/contactus" 
                    component={() => 
                        <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>
                    } />
                <Route exact path="/aboutus" component={AboutUs}/>
                <Redirect to="/home" />
            </Switch>
            <Footer/>
        </React.Fragment>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));