import axios from "axios";

const SERVER_URL = "http://localhost:9000";

//@desc Get all Articles
//@routes GET http://localhost:9000/articles
export const getَAllArticlesService = () => {
  const url = `${SERVER_URL}/articles`;
  return axios.get(url);
};

//@desc Get article With articleId
//@routes GET http://localhost:9000/articles/:articleId
export const getArticleService = (articleId) => {
  const url = `${SERVER_URL}/articles/${articleId}`;
  return axios.get(url);
};

//@desc Create New Article
//@routes POST http://localhost:9000/articles
export const  createArticleService = (contentArticle)=>{
  const url = `${SERVER_URL}/articles`;
  return axios.post(url,contentArticle)
}

//@desc Update Article with ArticleId
//@routes POST http://localhost:9000/articles/:articleId
export const  updateArticleService = (contentArticle,articleId)=>{
const url = `${SERVER_URL}/articles/${articleId}`;
return axios.put(url,contentArticle)
}
//@desc delete Article with ArticleId
//@routes DELETE http://localhost:9000/articles/:articleId
export const  deleteArticleService = (articleId)=>{
const url = `${SERVER_URL}/articles/${articleId}`;
return axios.delete(url)
}


//@desc Get all tags
//@routes GET http://localhost:9000/tags
export const getAllTagsService = () => {
    const url = `${SERVER_URL}/tags`;
    return axios.get(url);
  };
  
  //@desc Get tag With tagId
  //@routes GET http://localhost:9000/tag/:tagId
  export const getTagService = (tagId) => {
    const url = `${SERVER_URL}/tag/${tagId}`;
    return axios.get(url);
  };
