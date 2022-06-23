import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nwfifkz4t8.execute-api.us-east-1.amazonaws.com/testdata',
    headers: {
        'x-api-key': 'bGlO1IKqI56ebzJCFNlkaMH90HiXgVY4tbF8tiS0',
    },
});

export default instance;