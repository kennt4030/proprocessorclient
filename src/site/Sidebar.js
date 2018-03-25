import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
        {/* <li><Link to="/Home"></Link></li> */}
            {/* <ul className="sidebar-list list-unstyled">
                <li><Link to="/Press">Press</Link></li>
                <li><Link to="/Tool">Tool</Link></li>
                <li><Link to="/Plate">Plate</Link></li>
                <li><Link to="/Natural">Natural</Link></li>
                <li><Link to="/Colorant">Colorant</Link></li>
                <li><Link to="/Additive">Additive</Link></li>
                <li><Link to="/SetupSheet">SetupSheet</Link></li>
            </ul> */}
        </div>
    <div className="sidebar-route"></div>
    </div>
)

export default Sidebar;