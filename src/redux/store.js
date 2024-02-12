import { createStore } from 'redux';
import rootReducer from '../reducers';

const stor = createStore(rootReducer);

export default store;
