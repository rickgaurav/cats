import {createStore} from 'redux';
import RootReducer from './RootReducer';

let state = createStore(RootReducer);
window.root_state = state;
export default state;