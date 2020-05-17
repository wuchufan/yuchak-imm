import React from 'react';
import cls from './Service.module.scss';
import ServiceItem from './ServiceItem/ServiceItem';

const Service = ({scrollConfig}) => {

  return (<section id='service' className={cls['container']}>
    <div className={cls['title']}>
      <div className={cls['title__inner']}>
        <h1 className={cls['title__main']}>
          移民业务
        </h1>
        <h2 className={cls['title__sub']}>
          Immigration Service
        </h2>
      </div>
    </div>
    <div className={cls['service-items']}>
      <ServiceItem
        titleConfig={{
        title:'Express Entry',
        titleType:'anchor',
        to:'https://wuchufan.github.io/ques/',
        linkConfig:'__blank'}}
        >加拿大移民每年大部分配额给了快速通道，而且大部分快速通道的申请会在半年以内审理完毕。快速通道移民申请全部采用电子化、网络化递交，所有材料只需要扫描件（除非被签证官特殊要求）。可以说，快速通道是目前移民加拿大最快捷也是最稳定的途径。</ServiceItem>
      <ServiceItem titleConfig={{
        title:'Education Application',
        titleType:'scroll',
        to:'application',
        linkConfig:scrollConfig
      }}>加拿大属于北美教育体系，全球认可的高质量教育体系。其对院校教育质量管理非常严格，是公信度最好的国家之一，其文凭含金量很高，因此毕业于加拿大院校的国际学生在获得事业成功和发展上处于有利地位。</ServiceItem>
      <ServiceItem
        titleConfig={{
          title:'Provincial Nomination',
          titleType:'route',
          to:'/evaluation'
        }}
      >各省省提名计划根据基本要求的不同，可以分为技术和商业两大类。前者一般需要本地雇主的雇佣证明方能申请，后者一般需要申请人有一定的个人资产、成功的管理经验，并能促进当地的经济发展。</ServiceItem>
      <ServiceItem titleConfig={{
        title:'Career Consulting',
        titleType:'scroll',
        to:'contact',
        linkConfig:scrollConfig
      }}>在加拿大找工作，不论就业市场形势好坏，对每个求职者来说，整个找工作的过程都是一件充满压力，令人轻松不起来的事情。如何才能降低找工作时的痛苦，尽快找到一份合适的工作。这就是我们职业培训的优势所在。</ServiceItem>
      <ServiceItem
        titleConfig={{
          title:'Visa & Permit Application',
          titleType:'route',
          to:'/evaluation'
        }}
      >学签、工签、旅游签等签证申请，以及各签证的续签申请服务</ServiceItem>
      <ServiceItem
        titleConfig={{
              title:'Canadian Information',
              titleType:'route',
              to:'/evaluation'
      }}>了解加拿大最新最全方位的生活资讯，为未来生活做好准备</ServiceItem>

    </div>
  </section>);
}

export default Service;
