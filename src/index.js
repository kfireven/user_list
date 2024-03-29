import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import UsersList from './components/UsersList/UsersList';
import UserPosts from './components/UserPosts/UserPosts';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App>
    <BrowserRouter>
    <Routes>
      <Route exact path="/user_list" element={<UsersList/>}/>
      <Route exact path="/userPosts" element={<UserPosts/>}/>
    </Routes>
    </BrowserRouter>
    </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
