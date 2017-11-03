import {createAction} from 'redux-actions';
import keyMirror from 'keymirror';
import _ from 'underscore';
import cats_data from '../../data/cats.json';

const default_state = {
    cats: [],
    filtered_cats: [],
    categories: [],
    selected_category: null,
    show_cat_modal: false,
    selected_cat_id: null
};

const Action_Types = keyMirror({
    'GET_CATS': null,
    'SET_CATS': null,
    'SET_CAT_CATEGORY': null,
    'SET_CAT_CATEGORIES': null,
    'SET_FILTERED_CATS': null,
    'TOGGLE_CAT_MODAL': null,
    'SET_SELECTED_CAT': null
});

export const getCats = createAction(
    Action_Types.GET_CATS,
    (dispatch) => {
        const cats = cats_data.cats;
        dispatch(setCats(dispatch, cats));
        dispatch(setFilteredCats(dispatch, cats));
        dispatch(setCatCategories(dispatch, cats));
        dispatch(setSelectedCatCategory(dispatch, cats, 'All Cats'));
    }
);

export const toggleCatModal = createAction(
    Action_Types.TOGGLE_CAT_MODAL,
    (dispatch, cat_id) => {
        dispatch(setSelectedCat(dispatch, cat_id));
    }
);

export const setSelectedCat = createAction(
    Action_Types.SET_SELECTED_CAT,
    (dispatch, cat_id) => ({cat_id})
);

export const setCats = createAction(
    Action_Types.SET_CATS,
    (dispatch, cats) => {
        return {
            cats
        }
    }
);

export const setFilteredCats = createAction(
    Action_Types.SET_FILTERED_CATS,
    (dispatch, filtered_cats) => {
        return {
            filtered_cats
        }
    }
);

export const setCatCategories = createAction(
    Action_Types.SET_CAT_CATEGORIES,
    (dispatch, cats) => {
        const categories = _.chain(cats).pluck('category').uniq().value();
        categories.unshift('All Cats');
        return {
            categories
        }
    }
);

export const setSelectedCatCategory = createAction(
    Action_Types.SET_CAT_CATEGORY,
    (dispatch, cats, category) => {
        if(category === 'All Cats') {
            dispatch(setFilteredCats(dispatch, cats));
        } else {
            const category_cats = cats.filter(cat => cat.category === category);
            dispatch(setFilteredCats(dispatch, category_cats));
        }

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

        case Action_Types.SET_FILTERED_CATS:
            return {
                ...state,
                filtered_cats: action.payload.filtered_cats
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

        case Action_Types.TOGGLE_CAT_MODAL:
            return {
                ...state,
                show_cat_modal: !state.show_cat_modal
            };

        case Action_Types.SET_SELECTED_CAT:
            return {
                ...state,
                selected_cat_id: action.payload.cat_id
            };

        default:
            return state;

    }
};