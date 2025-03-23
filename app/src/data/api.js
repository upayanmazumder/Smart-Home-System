const isDevelopment = process.env.NODE_ENV === 'development';

const API_URL = isDevelopment
  ? "http://localhost:5000"
  : "https://api.smart-home-system.upayan.dev";

export default API_URL;
