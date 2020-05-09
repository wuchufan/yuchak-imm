import React from 'react';
import cls from './NavBar.module.scss';
import { Link as ScrollLink, animeScroll as scroll } from 'react-scroll';

const NavBar = () => {
  const scrollConfig = {
    smooth:true,
    duration:500

  }

  return (<nav className={cls['container']}>
    <div className={cls['brand']}>
      Yuchak Immigration | 宇泽移民
    </div>
    <ScrollLink to='1' {...scrollConfig} className={cls['navbar-item']}>
      首页
    </ScrollLink>
    <ScrollLink className={cls['navbar-item']}>
      移民业务
    </ScrollLink>
    <ScrollLink className={cls['navbar-item']}>
      关于我们
    </ScrollLink>
    <ScrollLink className={cls['navbar-item']}>
      院校申请
    </ScrollLink>
    <ScrollLink className={cls['navbar-item']}>
      联系方式
    </ScrollLink>
    <ScrollLink className={cls['navbar-item']}>
      最新动态
    </ScrollLink>

  </nav>);
}

export default NavBar;
