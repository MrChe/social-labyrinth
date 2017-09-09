import axios from 'axios';

export const getUserInfo = (username) => axios.get(`https://api.github.com/users/${username}`); // TODO add instagraam API

export const getImages = (images) => axios.get(`https://api.github.com/users/${images}`); // TODO add instagraam API