import {createAction} from 'redux-actions';
import keyMirror from 'keymirror';
import _ from 'underscore';
import cats_data from '../../data/cats.json';

const default_state = {
    cats: [],
    categories: [],
    selected_category: null
};

const Action_Types = keyMirror({
    'GET_CATS': null,
    'SET_CATS': null,
    'SET_CAT_CATEGORY': null,
    'SET_CAT_CATEGORIES': null,
});

export const getCats = createAction(
    Action_Types.GET_CATS,
    (dispatch) => {
        const cats = cats_data.cats;
        dispatch(setCats(dispatch, cats));
        dispatch(setCatCategories(dispatch, cats));
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

export const setCatCategories = createAction(
    Action_Types.SET_CAT_CATEGORIES,
    (dispatch, cats) => {
        const categories = _.chain(cats).pluck('category').uniq().value();
        return {
            categories
        }
    }
);

export const setSelectedCatCategory = createAction(
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

        case Action_Types.SET_CAT_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories
            };

        case Action_Types.SET_CAT_CATEGORY:
            return {
                ...state,
                selected_category: action.payload.category
            };

        default:
            return state;

    }
};