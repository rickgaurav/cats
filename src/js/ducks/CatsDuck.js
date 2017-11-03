import {createAction} from 'redux-actions';
import keyMirror from 'keymirror';
import cats_data from '../../data/cats.json';

const default_state = {
    cats: [],
    category: null
};

const Action_Types = keyMirror({
    'GET_CATS': null,
    'SET_CATS': null,
    'SET_CAT_CATEGORY': null
});

export const getCats = createAction(
    Action_Types.GET_CATS,
    (dispatch) => {
        dispatch(setCats(dispatch, cats_data.cats));
    }
);

export const setCats = createAction(
    Action_Types.SET_CATS,
    (dispatch, cats) => {
        return {
            cats
        }
    }
);

export const setCatCategory = createAction(
    Action_Types.SET_CAT_CATEGORY,
    (dispatch, cats, category) => {
        const category_cats = cats.filter(cat => cat.category === category);
        dispatch(setCats(dispatch, category_cats));

        return {
            category
        }
    }
);

export default function reducer(state, action) {
    state = state || default_state;

    switch(action.type) {
        case Action_Types.SET_CATS:
            return {
                ...state,
                cats: action.payload.cats
            };

        case Action_Types.SET_CAT_CATEGORY:
            return {
                ...state,
                category: action.payload.category
            };

        default:
            return state;

    }
};