'use strict';

// Import axios
import axios from "axios";

export async function fetchPhotos(name, page) {
	const API_KEY = '35967279-8c24489aaedeeb926c95777ea';
	const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`

	try {
		const response = await axios.get(API_URL);
		return response;
	} catch (error) {
		console.error(error);
	}
}

