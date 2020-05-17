import React,{ Fragment ,useState } from 'react';
import cls from './Form.module.scss';
import { sendContact } from '../../../ajax/email';


const Form = () => {

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })

  const {
    name,
    email,
    subject,
    message
  } = formData;

  const onChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  return (
    <Fragment>
    <div className={cls['title']}>
      <h1 className={cls['title__main']}>
        如果您有什么问题需要咨询我们，请填写下方联系表格
      </h1>
      <h2 className={cls['title__sub']}>
        For any general inquiries, please fill in the following contact form:
      </h2>
    </div>
    <form className={cls['form']} onSubmit={async (e)=>{
      e.preventDefault();
      const res = await sendContact({
        name,
        email,
        subject,
        message
      });
  
      setFormData({
        name:'',
        email:'',
        subject:'',
        message:''
      })

    }}>
      <input onChange={(e)=>onChange(e)} value={name} name='name' type='text' placeholder='Name' className={cls['form__input'] + ' ' + cls['form__input--1']} required/>

      <input onChange={(e)=>onChange(e)} value={email} name='email' type='email' placeholder='Email' className={cls['form__input'] + ' ' + cls['form__input--2']} required/>


      <input onChange={(e)=>onChange(e)} value={subject} name='subject' type='text' placeholder='Subject' className={cls['form__input'] + ' ' + cls['form__input--3']} required/>

      <textarea onChange={(e)=>onChange(e)} value={message} name='message' placeholder='Message' className={cls['form__textarea']} required/>


      <button type='submit' className={cls['form__button']}>
        Submit
      </button>
    </form>
    </Fragment>
  );
}



export default Form;
