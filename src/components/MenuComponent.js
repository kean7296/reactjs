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
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish == null) return (<div></div>);

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

        return (
            <div className='container'>
                <div className='row my-3'>
                    {menu}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
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