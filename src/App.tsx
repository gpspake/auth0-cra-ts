import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {Router} from 'react-router-dom'
import {Nav} from "./components/Nav";
import history from './utils/history'
import './tailwind.generated.css'


function App() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading === undefined && isAuthenticated === undefined) {
        return <div>Loading...</div>
    }

    return (
        <Router history={history}>
            <Nav/>
        </Router>
    );
}

export default App;
