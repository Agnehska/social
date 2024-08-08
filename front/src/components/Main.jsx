import React from 'react';
import logo from '../assets/img/logo.png';
import avatar from '../assets/img/person.svg';
import Header from './Header';
import SideBar from './SideBar';
import userStore from '../stores/user-store';
import Login from '../pages/Login';

const Main = () => {
    const { user, errorBack } = userStore;

	return (
        <>
        <Header />
        console.log(user.fullname)
        {user.fullname !== '' ? <SideBar /> : <Login />}
        
        </>
    );
};

export default Main;
