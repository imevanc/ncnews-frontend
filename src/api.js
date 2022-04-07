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
export const getArticles = async (
  topic,
  sort_by = "created_at",
  order = "desc"
) => {
  const params = topic
    ? {
        sort_by: sort_by,
        order: order,
        topic: topic,
      }
    : {
        sort_by: sort_by,
        order: order,
      };

  return api({
    method: "get",
    url: "/articles",
    params: params,
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

export const patchArticleByArticleId = async (article_id, data) => {
  return api({
    method: "patch",
    url: `/articles/${article_id}`,
    data: data,
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const postCommentByArticleId = async (article_id, data) => {
  return api({
    method: "POST",
    url: `/articles/${article_id}/comments`,
    data: data,
  })
    .then((response) => response.data.comment.body)
    .catch((error) => console.log(error));
};
