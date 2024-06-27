import React from 'react';
import '../styles/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notfound'>
      <div>
        <p className="notfound__text">NotFound</p>
        <p className="notfound__subtext">Go to 
        <Link to='/' className='notfound__link'> Home page</Link></p>
      </div>
      
    </div>
  )
}

export default NotFound