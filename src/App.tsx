import React from 'react';
import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";
import UserProfilePage from "./components/UserProfilePage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink exact to={'/users'}>users</NavLink>
                    |
                    <NavLink exact to={'/todos'}>todos</NavLink>
                    |
                    <NavLink to={'/'}>
                        main
                    </NavLink>
                </div>
                <Route exact path={'/'}>
                    <EventsExample/>
                    <Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width={'200px'} height={'200px'}>
                        <button>Click</button>
                    </Card>
                </Route>
                <Route exact path={'/users'}>
                    <UserPage/>
                </Route>
                <Route exact path={'/todos'}>
                    <TodoPage/>
                </Route>
                <Route exact path={'/users/:id'}>
                    <UserProfilePage/>
                </Route>
                <Route exact path={'/todos/:id'}>
                    <TodoItemPage/>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;
