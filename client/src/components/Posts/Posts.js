import React from 'react';
import cls from './Posts.module.scss';
import Post from './Post/Post';
import content from './content.json';
import imgs from './imgs';

const Posts = () => {
  const {articles} = content;

  // const titleImage = findTitleImage(url);

  return (

  // The way to handle blogs is not the best
  // Better way is to save it to Database
  // But it is too much effort for the site that barely updates
  // Therefore i'm doing it statically
  // upgrade the approach if neccessary

  <div className={cls['container']}>
    {
      articles.map((article, i) => {
      
        return <Post
          titleImage={imgs[i].titleImage}
          title={articles[i].title}
          paragraphs={articles[i].paragraphs}
          key={i}/>
      })
    }
  </div>);
}

export default Posts;
