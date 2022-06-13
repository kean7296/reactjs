import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Card, 
    CardImg, 
    CardImgOverlay, 
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ dish }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle className="h3">{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={ dish }/>
            </div>
        );
    });

    if (props.dishes.isLoading) return(
            <div className='container'>
                <div className='row'>
                    <Loading/>
                </div>
            </div>
        );
    else if (props.dishes.errMess) return(
        <div className='container'>
            <div className='row'>
                <h4>{props.dishes.errMess}</h4>
            </div>
        </div>
    );
    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className='row my-3'>
                {menu}
            </div>
        </div>
    )
}


export default Menu;