import React, { Component } from 'react'
import { 
  Card, 
  CardImg, 
  CardImgOverlay, 
  CardText, 
  CardBody, 
  CardTitle 
} from 'reactstrap';

export class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDetail(dish) {
      if (dish == null) return <div></div>;
      // return console.log(dish);
      return dish.comments.map(comment => {
          return (
              <div key={comment.id} className="mb-2">
                  <p>{comment.comment}</p>
                  <small>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date (Date.parse(comment.date)))}</small>
              </div>
          );
      });
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

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
              {this.renderDish(this.props.dishes)}
          </div>
          <div className='col-12 col-md-5 m-1'>
              <h2>{this.props.dishes != null ? 'Comment' : ''}</h2>
              {this.renderDetail(this.props.dishes)}
          </div>
        </div>
      </div>
    )
  }
}

export default DishDetail