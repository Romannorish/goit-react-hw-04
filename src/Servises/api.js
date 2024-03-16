import axios from "axios";

const CLIENT_AUTH = "gNJ1KBYf5fmGOR1m0GmchPGUBuNjy7L_vr0plP7YX-M";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchPhoto = async (currentPage, per_page, photo) => {
  const response = await axios.get(
    `/photos?client_id=${CLIENT_AUTH}&page=${currentPage}&per_page=${per_page}&query=${photo}`
  );
  return response.data;
};