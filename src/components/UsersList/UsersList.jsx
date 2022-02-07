import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, FormControl } from "react-bootstrap";
import { setCurrentPage } from './usersListActions';
import { useNavigate } from "react-router-dom";
import UsersTable from "../UsersTable/UsersTable";

import './usersListStyles.scss';

function UsersList() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [filteredUsersFromSearch, setfilteredUsersFromSearch] = useState([]);

    const usersList = useSelector(state => state.usersList.users);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setCurrentPage('USERS'));
    }, []);

    useEffect(() => {
        searchUsersList();
    }, [searchValue]);
    
    const fillTable = (user, index) => {
        return (
            <tr key={index}>
                <td>{highlightSearchTerm(user.name)}</td>
                <td>{highlightSearchTerm(user.username)}</td>
                <td className="link" onClick={() => document.location = 'mailto:' + user.email + '?subject=' + 'Algoretail\'s Users List App ' + '&body=' + 'Hello ' + user.name + ',\n'}><div >{highlightSearchTerm(user.email)}</div ></td>
                <td className="link" onClick={() => window.open('http://' + user.website, '_blank').focus()}><div >{highlightSearchTerm(user.website)}</div ></td>
                <td>{highlightSearchTerm(user.company.name)}</td>
                <td className="link" onClick={() => navigate('/userPosts?userid=' + user.id)}><div >{'>'}</div ></td>
            </tr>
        )
    }

    const searchUsersList = () => {
        let filteredUsers = [];

        if(searchValue != '') {
            filteredUsers = usersList.filter(user => {
                return user.name.toLowerCase().includes(searchValue)
                || user.username.toLowerCase().includes(searchValue)
                || user.email.toLowerCase().includes(searchValue)
                || user.website.toLowerCase().includes(searchValue)
                || user.company.name.toLowerCase().includes(searchValue);
            });
        }

        setfilteredUsersFromSearch(filteredUsers);
    }

    const highlightSearchTerm = (value) => {
        if(searchValue !== '') {
            let splitedValue = value.split(new RegExp('(' + searchValue + ')', 'i'));
            
            return <div>
                {splitedValue.map((splitedValue, index) => {
                    return <span className={splitedValue.toLowerCase() === searchValue.toLowerCase() ? 'highlightedSearchValue' : ''}>{splitedValue}</span>;
                })}
                </div>;
        } else {
            return value;
        }
    }

    return (
        <div className="usersList">
            <Form className="search-bar">
                <FormControl type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value.toLowerCase())}/>
            </Form>
            <div style={{height: '100%'}}>
                <UsersTable users={usersList && (searchValue != '' ? filteredUsersFromSearch.map(fillTable) : usersList.map(fillTable))}/>
            </div>
        </div>
    )
}

export default UsersList;