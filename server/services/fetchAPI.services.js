const axios = require("axios");

async function fetchInternships(page = 1) {
  const url = "https://internships-api.p.rapidapi.com/active-ats-7d";

  const response = await axios.get(url, {
    params: {  page },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    },
  });

  return response.data;
}

module.exports = { fetchInternships };
