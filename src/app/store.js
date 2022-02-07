import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { usersList } from '../components/UsersList/usersListReducers';

const reducers = combineReducers({
    usersList
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
);

export default store;