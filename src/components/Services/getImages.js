import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '34840339-667e92b06a5cc18aaab785dc8';

export async function getImages(inputData, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: inputData,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });
  const images = await axios.get(`${BASE_URL}?${searchParams}`);

  return images.data;
}
