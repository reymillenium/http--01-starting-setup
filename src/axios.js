import axios from 'axios';

// Overrides some of the global settings of axios, wherever this instance of axios is used
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(requestConfig => {
    // console.log(requestConfig);
    // We could also Edit the request configuration before returning the requestConfig (that's the idea behind the interceptor)
    // And we could also add headers (example: an authorization header), etc
    return requestConfig;
}, error => {
    // Handles any error related to the sending request (example: No internet connection)
    // Does not handles received responses
    console.log(error);
    // We still forward it to our response as I wrote it into the component, where wen can handle it again with the catch method
    return Promise.reject(error);
});

export default instance;