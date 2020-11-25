import axios from "axios";


const getTodos = async ()=> {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/todos?_limits=5');
  } catch {
    console.error(err);
  }
});

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(response => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});



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
