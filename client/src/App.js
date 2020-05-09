import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import cls from './App.module.scss';

//components
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Service from './components/Service/Service';
import AboutUs from './components/AboutUs/AboutUs';


const App = () => {
  return (<Fragment>
    <Router>
      <ParallaxProvider>
      <NavBar/>
      <main style={{height:'300vh'}} className={cls['container']}>
        <Landing/>
        <Service/>
        <AboutUs/>
      </main>
    </ParallaxProvider>
    </Router>
  </Fragment>);
}

export default App;
