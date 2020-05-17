import React from 'react';
import cls from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  
  return (<footer className={cls['footer']}>
    <div className={cls['top-container']}>

      <div className={cls['address']}>
        <h3 className={cls['address__header']}>Address</h3>
        <p className={cls['address__content']}>Suite 802. 100 Allstate Pkwy, Markham, ON L3R 6H3</p>

      </div>
      <div className={cls['contact']}>
        <h3 className={cls['contact__header']}>Contact</h3>
        <p className={cls['contact__content']}>Office Number: +1 (365)608-5186</p>
        <p className={cls['contact__content']}>Email: info@yuchakcorp.com</p>
      </div>
      <div className={cls['phone-fax-container']}>
        <div className={cls['phone-fax']}>

          <h1 className={cls['phone-fax__header']}>Tel:&nbsp;</h1>
          <p className={cls['phone-fax__content']}>+1 365 608 5068</p>
        </div>
        <div className={cls['phone-fax']}>
          <h1 className={cls['phone-fax__header']}>Fax:&nbsp;</h1>
          <p className={cls['phone-fax__content']}>+1 365 608 5286</p>
        </div>

      </div>
    </div>
    <p className={cls['copyright']}>© {currentYear}
      {' '}by Yuchak Corporation</p>
  </footer>);
}

export default Footer;
