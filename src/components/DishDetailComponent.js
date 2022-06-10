import React from 'react'
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle,
  Breadcrumb,
  BreadcrumbItem 
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Rendercomment({ comments }) {
  console.log(comments);
  if (comments == null) return <div></div>;
  // return console.log(dish);
    return comments.map((comment) => {
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
    <div className='container mb-2'>
      <div className='row'>
        <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
            <RenderDish dish={props.dish} />
        </div>
        <div className='col-12 col-md-5 m-1'>
            <h2>{props.dishes != null ? 'Comment' : ''}</h2>
            <Rendercomment comments={props.comments} />
        </div>
      </div>
    </div>
  )
}

export default DishDetail;