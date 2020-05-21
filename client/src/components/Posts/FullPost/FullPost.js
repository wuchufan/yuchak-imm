import React from 'react';
import cls from './FullPost.module.scss';
import {getCurrentArticle} from '../../../utilities/getCurrentArticle';
import content from '../content.json';
import images from '../imgs.js';

const FullPost = ({match:{
  params:{
    title
  }
}}) => {
  //
  const {articles} = content;
  const {article, indexOfArticle} = getCurrentArticle(articles, title);
  const {date, paragraphs} = article;
  let imgIndex = 0;

  return (<section className={cls['container']}>
    <div className={cls['inner-container']}>
      <h1 className={cls['title']}>{title}</h1>
      <time className={cls['date']}><span>Posted: </span>{date}</time>
      {
        paragraphs.map((paragraph, index) => {
          if (paragraph === 'img') {

            return <img key={`img${index}`} alt='' className={cls['image']}  src={images[indexOfArticle].images[imgIndex]}/>;
          }
          return <p key={index} className={cls['content']}>{paragraph}</p>
        })
      }
    </div>

  </section>);
};

export default FullPost;
