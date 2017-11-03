import {createAction} from 'redux-actions';
import keyMirror from 'keymirror';
import cats_data from '../../data/cats.json';

const default_state = {
    cats: []
};

const Action_Types = keyMirror({
    'GET_CATS': null
});

export const getCats = createAction(
    Action_Types.GET_CATS,
    () => {
        return {
            cats: cats_data.cats
        }
    }
);

export default function reducer(state, action) {
    state = state || default_state;

    switch(action.type) {
        case Action_Types.GET_CATS:
            return {
                ...state,
                cats: action.payload.cats
            };

        default:
            return state;

    }
};