import axios from "axios";

export const exerciceOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "d153d6b6b7mshb1d2247b5110942p198e6ejsn5367cbd85007",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};
export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "d153d6b6b7mshb1d2247b5110942p198e6ejsn5367cbd85007",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};
export const fetchData = async (url, options) => {
    const response = await axios.get(url, options);
    const data = response.data;
    return data;
};
