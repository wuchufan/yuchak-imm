import React, {Fragment} from 'react';
import cls from './NavBar.module.scss';
import {withRouter, Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import logo from '../../assets/imgs/logo/logo.jpg';

const NavBar = ({location: {
    pathname
  }}) => {
    
  const scrollConfig = {
    smooth: true,
    duration: 500,
    offset: -80
  }


  let navbar = (<nav className={cls['container']}>

    <div className={cls['brand']}>
      <Link to='/' exact='true'>
        <img className={cls['brand__image']} src={logo} alt='logo'/>
      </Link>

      <h1 className={cls['brand__title']}>Yuchak Immigration | 宇泽移民</h1>
    </div>

    <ScrollLink to='landing' {...scrollConfig} className={cls['navbar-item']}>
      首页
    </ScrollLink>

    <ScrollLink to='service' {...scrollConfig} className={cls['navbar-item']}>
      移民业务
    </ScrollLink>
    <ScrollLink to='aboutus' {...scrollConfig} className={cls['navbar-item']}>
      关于我们
    </ScrollLink>
    <ScrollLink to='application' {...scrollConfig} className={cls['navbar-item']}>
      院校申请
    </ScrollLink>
    <ScrollLink to='contact' {...scrollConfig} className={cls['navbar-item']}>
      联系方式
    </ScrollLink>
    <Link to='/news' className={cls['navbar-item']}>
      最新动态
    </Link>
  </nav>);

  if (pathname !== '/') {
    navbar = (<nav className={cls['container']}>

      <div className={cls['brand']}>
        <Link to='/' exact='true'>
          <img className={cls['brand__image']} src={logo} alt='logo'/>
        </Link>

        <h1 className={cls['brand__title']}>Yuchak Immigration | 宇泽移民</h1>
      </div>

      <Link to='/' className={cls['navbar-item']}>
        首页
      </Link>

      <a href='/#service' className={cls['navbar-item']}>
        移民业务
      </a>
      <a href='/#aboutus' className={cls['navbar-item']}>
        关于我们
      </a>
      <a href='/#application' className={cls['navbar-item']}>
        院校申请
      </a>
      <a href='/#contact' className={cls['navbar-item']}>
        联系方式
      </a>
      <Link to='/news' className={cls['navbar-item']}>
        最新动态
      </Link>
    </nav>)
  }

  return (<Fragment>
    {navbar}

  </Fragment>);
}

export default withRouter(NavBar);
