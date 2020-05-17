import React from 'react';
import cls from './AboutUs.module.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const AboutUs = ({scrollConfig}) => {

  return (
    <section id='aboutus' className={cls['container']}>
      <div className={cls['content-container']}>
        <h1 className={cls['main-title']}>
          关于我们
        </h1>
        <h2 className={cls['sub-title']}>
          About Us
        </h2>
        <p className={cls['paragraph']}>
          作为一家在加拿大具有影响力的移民留学顾问服务公司，我们对留学生和海外优才移民都有着丰厚经验和成功案例。公司拥有高效资深的挂牌顾问、律师和会计师团队，为每一位顾客排忧解难。
        </p>
        <p className={cls['paragraph']}>
          坐落于多伦多这个加拿大最大城市的我们与当本地雇主建立了广泛、深厚的信任关系，经常为各大型企业进行工作招聘活动。不仅为留学生，也为海外雇员进入加拿大工作市场提供了便捷的服务。作为专业的移民顾问，我们会让雇主公司明白办理的原因和流程，并且有效地配合客户和公司的需求，可以让公司用最短的时间最少的投入完成这个申请。
        </p>
        <p className={cls['paragraph']}>
          我们宇泽移民基于对当前移民政策的精准解读和政策趋势的把握，并依托所属的宇泽集团在加拿大本地得天独厚的企业资源，可为海外客户个性化推荐匹配最合适符合资格的优质雇主以及工作机会，与实力雄厚的雇主公司独家签约，确保客人成功实现事业和移民的双向规划，帮助客户顺利、快速地达成移民目的！
        </p>
        <p className={cls['paragraph']}>
          需要我们帮您判断移民可行性，请先提交<Link className={cls['link']} to='/evaluation' exact='ture'>「客户评估」</Link>，详细说明自己学历和工作履历，简单问题询问可以<ScrollLink to='contact' className={cls['link']} {...scrollConfig}>联系我们</ScrollLink>。
        </p>
      </div>
    </section>
  );
}



export default AboutUs;
