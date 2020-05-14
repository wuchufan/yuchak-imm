import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import cls from './App.module.scss';

//components
import NavBar from './components/NavBar/NavBar';
import Main from './layout/Main';
import Evaluation from './layout/Evaluation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (<Fragment>
    <Router>
      <ParallaxProvider>
      <NavBar/>
      <main className={cls['container']}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/evaluation' component={Evaluation} />
        </Switch>
      </main>
      <Footer/>
    </ParallaxProvider>
    </Router>
  </Fragment>);
}

export default App;
