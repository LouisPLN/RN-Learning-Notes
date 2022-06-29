import axios from "axios";

const baseURLApi = process.env.BASE_URL_API;

/**
 * crée une instance axios
 * avec des parametres custom
 */
const api = axios.create({
  baseURL: baseURLApi,
  timeout: 2500,
  // headers: {'X-Custom-Header': 'foobar'},
});

api.defaults.headers.post["Content-Type"] = "application/json";

/**
 * handleError
 * retourne une erreur en fonction
 * de la réponse de la requete
 * @param {*} error
 * @returns error
 */
const handleError = (error: any) => {
  // Error 😨
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    return {
      status: error.response.status,
      message: error.response.data.error.message,
    };
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    console.warn("error.request:", error.request);
  } else {
    // Something happened in setting up the request and triggered an Error
    console.warn("error.message:", error.message);
  }
  console.warn("error:", error);
};

export { api, baseURLApi, handleError };
