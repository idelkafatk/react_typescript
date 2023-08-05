import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const fetchTodos= async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, []);

    return (
        <div>
            <List items={todos} renderItems={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}/>
        </div>
    );
};

export default TodoPage;