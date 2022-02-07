import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { retrieveUsers, retrieveUsersPosts } from './components/UsersList/usersListActions';
import logo from './img/logo.png';
import { Navbar } from 'react-bootstrap';
import './App.scss';

function App(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.usersList.currentPage);

  useEffect(() => {
    dispatch(retrieveUsers());
    dispatch(retrieveUsersPosts());
  }, []);

  return (
    <div className="app">
      <Navbar className="navbar">
          <img
            src={logo}
            width="55px"
            height="50px"
          />
          <div className="navbarTitle">
            {currentPage}
          </div>
      </Navbar>
      { props.children }
    </div>
  );
}

export default App;
