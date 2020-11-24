import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/";
});

export default instance;

// const jsonEndpoint = "https://jsonplaceholder.typicode.com/"
// //axios interceptors are rules that can be applied to any http request
// //I am going to apply one rule to all requests
// axios.interceptors.request.use(
//     config => {
//       //If there is a params object use it, otherwise make a new object
//       config.params = config.params ? config.params : {}
//       //this is  url of request(anytime I use axios.get the use() will be called
//       const configUrl = config.url
//       /*if url of the request includes the nasaEndpoint(which is the url for  the imagesAPI)
//       then I add a url param of the api key*/
//       if (configUrl.includes(jsonEndpoint)) {
//           //return config object for the request (so axios can make request to Nasa)
//       return config
//       }
//     },
//     error => {
//       return Promise.reject(error)
//     }
//   )

//   export default = {
//     (image_id) {
//         /*this get needs to change to whatever my API is not the APOD API
//           - This API will return an object which is the response body
//           - The Object has a 'collection' property which has an 'href' property
//           - When I get the response body from the call, I need to dig into the response body and return href
//         */
//       axios.get().then(res => {
       
//       })
//     },
  }
