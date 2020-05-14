import React,{ Fragment } from 'react';
import Landing from '../components/Landing/Landing';
import Service from '../components/Service/Service';
import AboutUs from '../components/AboutUs/AboutUs';
import UniApplication from '../components/UniApplication/UniApplication';
import ContactUs from '../components/ContactUs/ContactUs';


const Main = () => {
  return (
    <Fragment>
      <Landing/>
      <Service/>
      <AboutUs/>
      <UniApplication/>
      <ContactUs/>
    </Fragment>
  );
}


export default Main;
