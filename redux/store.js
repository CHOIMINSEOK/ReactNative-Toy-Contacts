import {createStore} from 'redux';

import {addContact} from './actions';
import reducer from './reducer';

const store = createStore(reducer);

store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'david m', phone: '5050505050'}))

console.log(store.getState())

export default store;
