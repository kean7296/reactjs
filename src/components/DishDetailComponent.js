import React from 'react'
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Label
} from 'reactstrap';
import { 
  Control,
  LocalForm,
  Errors
} from 'react-redux-form';
import { Link } from 'react-router-dom';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

export default class DishDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleModal() {
    this.setState({isModalOpen:!this.state.isModalOpen});
  }

  onSubmit(values) {
    this.toggleModal();
    console.log(`Dish ID: ${this.props.dish.id}`);
    this.props.addComment(this.props.dish.id, values.rating, values.name, values.comment);
  }

  render() {
    const RenderComments = () => {
      if (this.props.comments == null) return <div></div>;

      return this.props.comments.map((comment) => {
        return (
            <div key={comment.id} className="my-4">
                <p>{comment.comment}</p>
                <small>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date (Date.parse(comment.date)))}</small>
            </div>
        );
      });
    }

    
    const RenderDish = () => {
      if (this.props.dish == null) return <div></div>;
      const dish = this.props.dish;
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
      
    const ModalComment = () => {
      return(
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.onSubmit}>
              <Row className='form-group '>
                <Col>
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    model='.rating'
                    className="form-control"
                    id="rating" 
                    name="rating" 
                    // validators={{
                    //     required, minLength: minLength(3), maxLength: maxLength(15)
                    // }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className='form-group'>
                <Col>
                  <Label htmlFor='name'>Your Name</Label>
                  <Control.text 
                    className='form-control'
                    model='.name'
                    id='name'
                    name='name'
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                    placeholder='Your Name'/>
                    <Errors
                      className='text-danger'
                      model='.name'
                      show='touched'
                      messages={{
                        required: 'Require',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less'
                      }}
                    />
                </Col>
              </Row>
              <Row className='form-group'>
                <Col>
                  <Label htmlFor='comment'>Comment</Label>
                  <Control.textarea 
                    model='.comment'
                    id='comment'
                    name='comment'
                    rows='8'
                    className='form-control'
                  />
                </Col>
              </Row>
              <Row className='form-group'>
                <Col>
                  <Button className='bg-primary'>Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      );
    }


    return (
      <div className='container mb-2'>
        <div className='row'>
          <Breadcrumb>
              <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
              <h3>{this.props.dish.name}</h3>
              <hr/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
              <RenderDish/>
          </div>
          <div className='col-12 col-md-5 m-1'>
              <h2>Comment</h2>
              <RenderComments/>
              <Button outline 
                className='btn btn-light' 
                style={{border: '1px solid #c5c9c6'}}
                onClick={this.toggleModal}>
                  <span className='fa fa-pencil'></span> Submit Comment
              </Button>
          </div>
        </div>
        <ModalComment/>
      </div>
    )
  }
}