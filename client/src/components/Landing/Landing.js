import React, {Fragment} from 'react';
import {Parallax} from 'react-scroll-parallax';
import cls from './Landing.module.scss';
import bgImage from '../../assets/imgs/landing/landing.jpg';
import irccLogo from '../../assets/imgs/landing/ircc-logo.jpg';

const Landing = () => {

  return (<Fragment>
    <section className={cls['container']}>
      <div className={cls['landing-info']}>
        <div className={cls['landing-info__inner-box']}>
          <h1 className={cls['landing-info__title']}>
            <span style={{fontWeight:'bold'}}>Yuchak</span> Immigration
          </h1>
          <div className={cls['landing-info__content-container']}>

            <img loading='lazy' className={cls['landing-info__image']} src={irccLogo}/>
            <div>
              <p style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold'
                }}>
                加拿大联邦认证专业持牌移民顾问
              </p>
              <p className={cls['landing-info__paragraph']}>
                经验丰富，为您度身定制最适合的留学移民方案，实现移民梦想。
              </p>
            </div>
          </div>
        </div>
      </div>
      <Parallax className={cls['parallax']} y={[-60, 60]}>
        <div className={cls['img']}></div>
      </Parallax>
    </section>
  </Fragment>);
}

export default Landing;
