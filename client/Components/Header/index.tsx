import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import scssStyles from './styles.scss';
export const Header = () => {
  return (
    <div className={'header-container ' + scssStyles.headerContainer}>
      <ul className={scssStyles.unorderedList}>
        <li>
          <Link to="/">Home!!!</Link>
        </li>
        <li>
          <Link to="/testing">Testing</Link>
        </li>
        <li>
          <Link to="/template">Template</Link>
        </li>
        <li>
          <Link to="/dynamic">Dynamic</Link>
        </li>
        <li>
          <Link to="/start">StartCoding</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
