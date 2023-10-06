import axios from "axios";
import ClientService from "./ClientService";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "http://127.0.0.1:3001/api";

let createRequest = (baseURL: string) => {
  let timeout = 1000 * 60 * 5;
  const request = axios.create({
    baseURL: baseURL,
    timeout: timeout,
  });

  request.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      /**
       * perform redirect to login page when server response with status 401 ( un authorization )
       *
       */
      if (
        error &&
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        ClientService.logout();
      }
      return Promise.reject(error);
    }
  );

  request.interceptors.request.use(
    function (config: any) {
      /**
       * add Authorization header to request if user authenticated, run before sent request
       */

      if (ClientService.isAuthenticated()) {
        const accessToken = ClientService.getUser().token;
        const language = localStorage.getItem("MY_LANGUAGE") 
        
        config.headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
          "Accept-Language":`${language}`
        };
        
      } else {
        // const language = ClientService.getLanguage().locale;
        const language = localStorage.getItem("MY_LANGUAGE") 
        config.headers = {
          "Content-Type": "application/json",
          "Accept-Language":`${language}`
        };
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return request;
};

export default createRequest(DOMAIN);
