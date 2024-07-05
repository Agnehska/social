import React from 'react';
import logo from '../assets/img/logo.png';
import avatar from '../assets/img/person.svg';
import Header from './Header';
import SideBar from './SideBar';

const Main = () => {
	return (
        <>
        <Header />
        {/* <header>
            <div className="">
                <img src={logo} alt="logo" className="header__logo" />
                <h4>myApp</h4>
            </div>
            <div className="">
                <p>ник</p>
                <img src={avatar} alt="avatar" />
            </div>
        </header> */}
        <SideBar />
        </>
    );
};

export default Main;
