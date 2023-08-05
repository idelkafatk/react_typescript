import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";

interface UserProfilePageParams {
    id: string
}

const UserProfilePage: FC = () => {
    const params = useParams<UserProfilePageParams>()
    const [user, setUser] = useState<IUser>()
    const history = useHistory()

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <h2>Email: {user?.email}</h2>
        </div>
    );
};

export default UserProfilePage;