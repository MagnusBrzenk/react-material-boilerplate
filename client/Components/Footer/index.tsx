import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import scssStyles from './styles.scss';

export const Footer = () => {
  return <div className={'footer ' + scssStyles.container}>This is a footer</div>;
};

export default Footer;
