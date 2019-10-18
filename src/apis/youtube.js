import axios from 'axios';

const KEY = 'AIzaSyDU9uzBiIIn04MH_xHZmc8WQ-piS1MA0S4';

export default axios.create({
    baseURL: 'https://developers.google.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
// "https://console.developers.google.com/apis"
// "https://developers.google.com/youtube/v3/docs"