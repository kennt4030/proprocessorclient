import React from 'react';
import { Component } from 'react';
import logo from '../../logo.svg';
import {
    Link
} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        );
    }
}