import React from 'react';
import logo from '../assets/image 1.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  let nav =[
    'Home',
    'Carrelage',
    'Sanitaire',
    'Cuisine',
    'Notre showroom',
    'Contact'
  ];

  return (
    <header>
      <img src={logo} alt="" />
      <nav id="navelemenant">
          <ul id='navlist'>
            {
              nav.map((item, index) => (
                <li key={index} className="nav-item">
                  <a href="#">{item}</a>
                </li>
              ))
            }
             
          </ul>
      </nav>
      <div className="icon-group">
        <FontAwesomeIcon icon={faSearch} title="Search" style={{ color: 'white' }}/>
        <FontAwesomeIcon icon={faHeart} title="Favorites" style={{ color: 'white' }}/>
        <FontAwesomeIcon icon={faUser} title="Account" style={{ color: 'white' }}/>
      </div>      
 
     
    </header>
  );
};

export default Header;
