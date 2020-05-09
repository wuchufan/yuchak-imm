import React from 'react';
import cls from './ServiceItem.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ServiceItem = ({
  title,
  children,
  route
  }) => {

  const svg = (<svg fill='rgba(65, 183, 196, 1)' preserveAspectRatio="xMidYMid meet" id="comp-ifwa6qoa1svgcontent" data-bbox="15.305 10.052 123 123" xmlns="http://www.w3.org/2000/svg" viewBox="15.305 10.052 123 123" role="img">
    <g>
      <path d="M138.305 10.052v123h-123v-123h123z"></path>
    </g>
  </svg>)




  return (<div className={cls['container']}>
    <div>
      {svg}
    </div>
    <div className={cls['title']}>
      <Link className={cls['title__link']} to={route} exact='true'>{title}</Link>
    </div>
    <div className={cls['paragraph']}>
      <p className={cls['paragraph__p']}>
        {children}
      </p>
    </div>
  </div>);
}

ServiceItem.propTypes = {
  title:PropTypes.string.isRequired,
  children:PropTypes.string.isRequired,
  route:PropTypes.string.isRequired
}

export default ServiceItem;
