import axios from "axios";

// axios config
const api = axios.create({
  baseURL: "https://http://my-ncnews-backend.herokuapp.com/api",
});

// get articles
export const getArticles = async () => {
  return api({
    method: "get",
    url: "/articles",
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
