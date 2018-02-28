import React from 'react';
import Press from '../components/Press';
import Tool from '../components/Tool';
import Plate from '../components/Plate';
import Natural from '../components/Natural';
import Colorant from '../components/Colorant';
import Additive from '../components/Additive';
import SetupSheet from '../components/SetupSheet';
// import Login from '../auth/Login';
// import App from '../App';


export const routes = [

    {
        path: '/Press',
        exact: true,
        sidebar: () => <div>Press</div>,
        main: () => <Press />
    },
    {
        path: '/Tool',
        exact: true,
        sidebar: () => <div>Tool</div>,
        main: () => <Tool />
    },
    {
        path: '/Plate',
        exact: true,
        sidebar: () => <div>Plate</div>,
        main: () => <Plate />
    },
    {
        path: '/Natural',
        exact: true,
        sidebar: () => <div>Natural</div>,
        main: () => <Natural />
    },
    {
        path: '/Colorant',
        exact: true,
        sidebar: () => <div>Colorant</div>,
        main: () => <Colorant />
    },
    {
        path: '/Additive',
        exact: true,
        sidebar: () => <div>Additive</div>,
        main: () => <Additive />
    },
    {
        path: '/SetupSheet',
        exact: true,
        main: () => <SetupSheet />
    },



]
