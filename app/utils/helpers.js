import axios from 'axios';

export const getUserInfo = (username) => axios.get(`https://api.github.com/users/${username}`); // TODO add instagraam API

export const getImages = (images) => axios.get(`https://api.github.com/users/${images}`); // TODO add instagraam API
export const getImagesTemp = (user) => (
	axios.get(`http://10.1.49.126:9999/proxy.php?user=${user}`).then((res) => (
			res.data.items.map((t) => (t.images.standard_resolution.url))
		)
	)
);
