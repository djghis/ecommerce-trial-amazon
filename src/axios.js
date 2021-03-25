import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-99b81.cloudfunctions.net/api'  //live URL
    
    // 'http://localhost:5001/clone-99b81/us-central1/api'  //API URL FOR TESTING/Debugging
});

export default instance;