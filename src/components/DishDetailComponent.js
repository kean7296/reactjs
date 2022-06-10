import React from 'react'
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle 
} from 'reactstrap';

function Rendercomment({ dish }) {
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

function RenderDish({ dish }) {
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


const DishDetail = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
            <RenderDish dish={props.dishes} />
        </div>
        <div className='col-12 col-md-5 m-1'>
            <h2>{props.dishes != null ? 'Comment' : ''}</h2>
            <Rendercomment dish={props.dishes} />
        </div>
      </div>
    </div>
  )
}

export default DishDetail;