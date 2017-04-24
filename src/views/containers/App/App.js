import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SignupWizard } from '..';
import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/signup" component={SignupWizard}/>
            </div>
        );
    }
}
