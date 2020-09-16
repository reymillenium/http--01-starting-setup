import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

const requestInterceptor = axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
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
axios.interceptors.request.eject(requestInterceptor);

const responseInterceptor = axios.interceptors.response.use(successResponse => {
    console.log(successResponse);

    // So wen can use it on the 'then' block of the component
    // We could also manipulate the response here or logging in, etc
    return successResponse;
}, error => {
    // Handles any error related to the received response  (example: )
    // Does not handles sending requests
    console.log(error);
    // We still forward it to our request as I wrote it into the component, where wen can handle it again with the catch method
    //This makes sense if we have some local task I wanna do, like showing something on the UI...
    // ... but also globally I want to log it into the log file which I send to a server or something like that
    return Promise.reject(error);
});
axios.interceptors.request.eject(responseInterceptor);


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
