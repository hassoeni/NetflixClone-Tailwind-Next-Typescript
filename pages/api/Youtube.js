import axios from 'axios'

const KEY = "AIzaSyCBcL4D-cczyvr3WH8jgrPl5rtVcGhTymQ"


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});

