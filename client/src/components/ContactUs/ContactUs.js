import React from 'react';
import cls from './ContactUs.module.scss';
//components
import Form from './Form/Form';
import Address from './Address/Address'


const ContactUs = () => {


  return (
    <section className={cls['container']}>
      <div className={cls['title']}>
        <div className={cls['title__flex-container']}>
        <h1 className={cls['title__main']}>
          ​联系方式
        </h1>
        <h1 className={cls['title__main']}>
          CONTACT
        </h1>
        <h2 className={cls['title__sub']}>
          ​Yuchak Immigration
        </h2>
        </div>
      </div>
      <div className={cls['form']}>
        <Form/>
      </div>
      <div className={cls['address']}>
        <Address/>
      </div>
    </section>
  );
}

export default ContactUs;
