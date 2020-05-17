import React from 'react';
import cls from './UniApplication.module.scss';
import { Link as ScrollLink } from 'react-scroll';
import george from '../../assets/imgs/UniApplication/george.jpg';
import uoft from '../../assets/imgs/UniApplication/uoft.jpg';
import centinential from '../../assets/imgs/UniApplication/centinential.jpg';
import humber from '../../assets/imgs/UniApplication/humber.jpg';
import mcmaster from '../../assets/imgs/UniApplication/mcmaster.jpg';
import seneca from '../../assets/imgs/UniApplication/seneca.jpg';
import shridan from '../../assets/imgs/UniApplication/shridan.jpg';
import uofwindsor from '../../assets/imgs/UniApplication/uofwindsor.jpg';
import western from '../../assets/imgs/UniApplication/western.jpg';
import yorku from '../../assets/imgs/UniApplication/yorku.jpg';



const UniApplication = ({scrollConfig}) => {

  return (<section id='application' className={cls['container']}>

    <div className={cls['university']}>
      <h1 className={cls['university__title']}>
        Canadian University 大学
      </h1>
      <hr className={cls['university__hr']}/>
      <div className={cls['images']}>
        <img loading='lazy' className={cls['images__image']} alt='' src={uoft}/>
        <img loading='lazy' className={cls['images__image']} alt='' src={yorku}/>
        <img loading='lazy' className={cls['images__image']} alt='' src={western}/>
        <img loading='lazy' className={cls['images__image']} alt='' src={mcmaster}/>
        <img loading='lazy' className={cls['images__image']} alt='' src={uofwindsor}/>
      </div>
    </div>
    <div className={cls['collage']}>
      <h1 className={cls['collage__title']}>
        Canadian College 学院
      </h1>
      <hr className={cls['collage__hr']}/>
      <div className={cls['images']}>
        <img loading='lazy' className={cls['images__image']} alt='' src={seneca}/>
        <img loading='lazy' className={cls['images__image']} alt='' src={centinential}/>
        <img loading='lazy' className={cls['images__image']} alt='' src={humber}/>
        <img loading='lazy' className={cls['images__image']} alt='' src={george}/>
        <img loading='lazy' className={cls['images__image']} alt='' src={shridan}/>
      </div>
    </div>

    <p className={cls['contact-us']}>​如需申请院校，请填写下方表格<ScrollLink {...scrollConfig} className={cls['contact-us__link']} to='contact'>联系我们</ScrollLink>。</p>

  </section>);
}

export default UniApplication;
