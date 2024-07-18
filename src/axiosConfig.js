
import axios from 'axios';

const getCSRFToken = () => {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.trim().split('=');
    acc[name] = value;
    return acc;
  }, {});
  const csrfToken = cookies.csrftoken || null;
  console.log("CSRF Token:", csrfToken); 
  return csrfToken;
};

axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken();

export default axios;
