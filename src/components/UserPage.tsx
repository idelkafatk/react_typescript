import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import axios from "axios";
import {useHistory} from "react-router-dom";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()

    const fetchUsers= async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <div>
            <List items={users}
                  renderItems={(user: IUser) =>
                      <UserItem
                          key={user.id}
                          user={user}
                          onClick={(user) => history.push(`/users/${user.id}`)}/>}/>
        </div>
    );
};

export default UserPage;