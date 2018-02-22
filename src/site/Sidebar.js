import React from 'react';

import {
    Route,
    Link
} from 'react-router-dom'

import { routes } from './_routes';

const Sidebar = () => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/Press">Press</Link></li>
                <li><Link to="/Tool">Tool</Link></li>
                <li><Link to="/Natural">Natural</Link></li>
                <li><Link to="/Colorant">Colorant</Link></li>
                <li><Link to="/Additive">Additive</Link></li>
                <li><Link to="/SetupSheet">SetupSheet</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
            </ul>
        </div>
    <div className="sidebar-route">
        {routes.map((route, index) =>(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            />
        ))}
    </div>
    </div>
)

export default Sidebar;