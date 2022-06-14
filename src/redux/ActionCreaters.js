import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    }).then(response => {
        if (!response.ok) {
            var err = new Error(`Error: ${response.status}: ${response.statusText}`);
            err.response = response;
            throw err;
        }
        return response;            
    },
    error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(comment => dispatch(addComment(comment)))
    .catch(error => { console.log(`Post comments: ${error.message}`); alert(`Your comment could not be posted \nError: ${error.message}`); })
};

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (!response.ok) {
                var err = new Error(`Error: ${response.status}: ${response.statusText}`);
                err.response = response;
                throw err;
            }
            return response;            
        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
        // .then(data => console.log(`DISHES DATA: ${JSON.stringify(data)}`));
};

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (!response.ok) {
                var err = new Error(`Error: ${response.status}: ${response.statusText}`);
                err.response = response;
                throw err;
            }
            return response;            
        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
        // .then(data => console.log(`PROMOS DATA: ${JSON.stringify(data)}`));
};

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (!response.ok) {
                var err = new Error(`Error: ${response.status}: ${response.statusText}`);
                err.response = response;
                throw err;
            }
            return response;            
        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(comment => dispatch(addComments(comment)))
        .catch(error => dispatch(commentsFailed(error.message)));
        // .then(data => console.log(`COMMENTS DATA: ${JSON.stringify(data)}`));
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});