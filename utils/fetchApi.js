import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com/';

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '3108cd7a24msh97bce3245c2e0f9p1ab3a0jsn786d10df2bc5',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });

  return data;
}
