import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Header from './Sidebar/Header';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidebar />

                <Dashboard />
                
            </div>
        );
    }
}

export default App;