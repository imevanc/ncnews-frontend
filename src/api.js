import axios from "axios";

// axios config
const api = axios.create({
  baseURL: "http://my-ncnews-backend.herokuapp.com/api",
});

// get topics
export const getTopics = async () => {
  return api({
    method: "get",
    url: "/topics",
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

// get articles
export const getArticles = async (aTopic) => {
  return api({
    method: "get",
    url: "/articles",
    params: {
      sort_by: "created_at",
      order: "DESC",
      topic: `${aTopic}`,
    },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getCommentsByArticleId = async (article_id) => {
  return api({
    method: "get",
    url: `/articles/${article_id}/comments`,
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getArticleByArticleId = async (article_id) => {
  return api({
    method: "get",
    url: `/articles/${article_id}`,
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const patchArticleByArticleId = async (article_id, { data }) => {
  console.log(article_id);
  console.log(data);
  return api({
    method: "patch",
    url: `/articles/${article_id}`,
    data: { data },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
