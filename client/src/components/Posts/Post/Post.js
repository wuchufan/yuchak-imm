import React from 'react';
import cls from './Post.module.scss';
import {Link} from 'react-router-dom';

const Post = ({titleImage, title, paragraphs}) => {


  let wordCount = 0;
  let renderParagraphs = [];
  const wordLimit = 20;
  const articleURL = `/news/${title}`;

  for (let i = 0; i < paragraphs.length; i++) {

    for (let j = 0; j < paragraphs[i].length; j++) {
      if (paragraphs[i] === 'img')
        break;
      if (wordCount < wordLimit)
        wordCount++;
      else
        break;
      }
    if (paragraphs[i] !== 'img')
      renderParagraphs.push(<p className={cls['content']} key={i}>{paragraphs[i]}</p>);
    if (wordCount >= wordLimit)
      break;
    }
  return (<div className={cls['container']}>
    <div className={cls['container__image']}>
      <img alt='' className={cls['image']} src={titleImage}/>
    </div>
    <div className={cls['container__title']}>
      <Link to={articleURL} className={cls['title']}>
        {title}
      </Link>
    </div>
    <div className={cls['container__content']}>
      {renderParagraphs}
    </div>
  </div>);
}

export default Post;
