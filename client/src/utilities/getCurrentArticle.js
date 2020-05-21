export const getCurrentArticle = (articles,title) =>{
  return {
    article:articles.find(article=>article.title === title),
    indexOfArticle:articles.findIndex(article=>article.title === title)
  };
}
