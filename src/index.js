import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './home/Home';
import Profile from './profile/Profile';
import Projects from './Projects/Projects';
import Recommendations from './recommendations/Recommendations'
import Sidebar from './sidebar/Sidebar';

ReactDOM.render(
  <Sidebar/>,document.getElementById("sidebar")
);
//ReactDOM.render(
//    <Recommendations/>,document.getElementById('root')
//);

