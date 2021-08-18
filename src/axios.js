import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://amazon-clone-node-backend.herokuapp.com/api'
  // "http://localhost:5001/clone-b687e/us-central1/api"
  // "http://localhost:5001/api"
});

export default instance;
