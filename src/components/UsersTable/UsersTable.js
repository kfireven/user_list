import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";

import './usersTableStyles.scss';

function UsersTable(props) {

    return (
        <div className="search-table scroll-area">
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.users}
                </tbody>
            </Table>
        </div>
    )
}

export default UsersTable;