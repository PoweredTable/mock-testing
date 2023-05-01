const axios = require('axios');
const { getNumberFact } = require('./index');

jest.mock('axios');

test('should return a random fact about the number 6', async () => {
  const response = {
    data: '6 is the highest number on one end of a standard domino.',
  };
  axios.get.mockResolvedValue(response);
  const result = await getNumberFact(6);
  expect(axios.get).toHaveBeenCalledWith('http://numbersapi.com/6');
  expect(result).toEqual(response.data);
});
