import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from '../components/Posts/Posts';
import FullPost from '../components/Posts/FullPost/FullPost';
import ScrollToTop from '../utilities/ScrollToTop';



const Blogs = () => {
  const containerStyle ={
    padding:'4rem',
    backgroundColor:'rgb(184, 215, 252)'
  }


  return (
    <section style={containerStyle}>
      <ScrollToTop/>
      <Switch>
        <Route exact path='/news' component={Posts}/>
        <Route exact path='/news/:title' component={FullPost}/>
      </Switch>
    </section>
  );
}

export default Blogs;
