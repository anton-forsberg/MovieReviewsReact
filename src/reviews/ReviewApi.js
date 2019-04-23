import axios from 'axios';
import { api, apiKey } from '../config';

/**
 * Loads a number of reviews from the api based on supplied parameters
 * @param {string} query string to search among movie titles
 * @param {number} page the current page being loaded
 * @param {boolean} simulateNew if true, adds an additional element to the start of the review list
 */
export const searchReviews = async (query, page = 0, simulateNew = false) => {
    const response = await axios.get(`${api}seach.json?api-key=${apiKey}&query=${query || ''}&offset=${page * 20}`);
    const results = response.data.results;

    if (simulateNew)
        results.unshift({ publication_date: '2099-01-01'});

    return results;
};