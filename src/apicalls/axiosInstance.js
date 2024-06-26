import axios from "axios";

// Function to update the authorization header with the token


export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
});

const token = localStorage.getItem('token');
axiosInstance.defaults.headers['authorization'] = `Bearer ${token}`;

// Call the function to set the initial token
// updateAuthorizationHeader();

// Interceptor to update the token on each request
axiosInstance.interceptors.request.use(
    (config) => {
        // updateAuthorizationHeader();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
