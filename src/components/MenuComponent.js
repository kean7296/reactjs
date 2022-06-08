import React, { Component } from 'react'
import { 
    Media, 
    Card, 
    CardImg, 
    CardImgOverlay, 
    CardText, 
    CardBody, 
    CardTitle 
} from 'reactstrap';

export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };

        console.log('Menu Component constructor is invoked');
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish == null) return <div></div>;

        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComment(dish) {
        if (dish == null) return <div></div>;
        // return console.log(dish);
        return dish.comments.map(comment => {
            return (
                <div key={comment.id} className="mb-2">
                    <p>{comment.comment}</p>
                    <small>--{comment.author}, {comment.date}</small>
                </div>
            );
        });
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount  is invoked');
    }

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>{this.onDishSelect(dish)}}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle className="h3">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log('Menu Component render is invoked');

        return (
            <div className='container'>
                <div className='row my-3'>
                    {menu}
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h2>{this.state.selectedDish != null ? 'Comment' : ''}</h2>
                        {this.renderComment(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        )
    }
}


export default Menu;

// <Media tag="li" className="row">
// <Media left middle className="col-md-2">
//     <Media object src={dish.image} alt={dish.name} />
// </Media>
// <Media body className="col">
//     <Media heading>{dish.name}</Media>
//     <p>{dish.description}</p>
// </Media>
// </Media>