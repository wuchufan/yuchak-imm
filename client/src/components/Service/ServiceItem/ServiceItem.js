import React from 'react';
import cls from './ServiceItem.module.scss';
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import PropTypes from 'prop-types';


const ServiceItem = ({
  children,
  titleConfig:{
    title,
    titleType,
    to,
    linkConfig
  }

  }) => {

  let titleRender = null;
  switch (titleType){
    case 'scroll':
    titleRender = <ScrollLink className={cls['title__link']} {...linkConfig} to='contact'>{title}</ScrollLink>
    break;

    case 'anchor':

    titleRender = <a href={to} target={linkConfig} className={cls['title__link']}>{title}</a>
    break;

    case 'route':
    titleRender= <Link className={cls['title__link']} to={to} exact='true'>{title}</Link>
    break;


    default:
    titleRender = <Link className={cls['title__link']} to={to} exact='true'>{title}</Link>
    break;
  }

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
      {/* {scroll ? <ScrollLink className={cls['title__link']} {...scrollConfig} to={route}>{title}</ScrollLink>:<Link className={cls['title__link']} to={route} exact='true'>{title}</Link>} */}
      {titleRender}
    </div>
    <div className={cls['paragraph']}>
      <p className={cls['paragraph__p']}>
        {children}
      </p>
    </div>
  </div>);
}

ServiceItem.propTypes = {
  children:PropTypes.string.isRequired,
  titleConfig:PropTypes.object.isRequired,
}

export default ServiceItem;
