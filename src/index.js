import React from 'react';
import ReactDOM from 'react-dom';
import { MainApp } from './MainApp';

import './index.css';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Animate on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.render(
    <MainApp />,
  document.getElementById('root')
);
