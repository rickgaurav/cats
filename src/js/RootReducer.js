import {combineReducers} from 'redux';
import CatsDuck from "./ducks/CatsDuck";

export default combineReducers({
    cats_duck: CatsDuck
});