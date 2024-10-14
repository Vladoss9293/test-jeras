import { Outlet, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from './header/Header.jsx';
import Main from './Main/Main.jsx';


function Root() {
    return <>
        <Header />

        <Main />

        <Outlet />
    </>
}

export default Root;