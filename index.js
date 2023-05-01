const axios = require('axios');

async function getNumberFact(number) {
  const response = await axios.get(`http://numbersapi.com/${number}`);
  return response.data;
}

module.exports = { getNumberFact };
