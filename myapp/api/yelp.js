import axios from "axios";
export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:'Bearer _uIWvRMPY8bnnYjS83HifoYy5oSONWgZi1LV0gRaAUQil76Q7EDBTZ5zKwvjokSG9uUDaQPOtmrSG1lamf2F2kiJKBh0JYEUx9rDww5oGFTYQhBnfvlgl10VbtOrZ3Yx',
    },
});
