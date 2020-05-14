import React from 'react';
import cls from './Address.module.scss';
import wechat from '../../../assets/imgs/contactUs/wechat.jpg';

const Address = () => {
  return (<address className={cls['container']}>
    <div>

      <h1 className={cls['title']}>
        联系地址
      </h1>
      <h1 style={{
          marginBottom: '4rem'
        }} className={cls['title']}>
        OUR ADDRESS
      </h1>
      <p className={cls['info']}>
        Suite 802. 100 Allstate Pkwy, Markham, ON L3R 6H3
      </p>
      <p className={cls['info']}>
        Email:
        <a className={cls['email']} href='mailto:info@ycimm.com'>
          info@ycimm.com
        </a>
      </p>
      <p style={{marginBottom:'4rem'}} className={cls['info']}>
        Tel: 365-608-5068
      </p>
    </div>
    <div className={cls['wechat']}>
      <p className={cls['info']}>Follow our WeChat channel for more information</p>
      <img className={cls['wechat__img']} alt='wechat' src={wechat}/>
    </div>

  </address>);
}

export default Address;
