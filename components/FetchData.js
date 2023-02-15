import axios from "axios";

export const exerciceOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export const fetchData = async (url, options) => {
    const response = await axios.get(url, options);
    const data = response.data;
    return data;
};
