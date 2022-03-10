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