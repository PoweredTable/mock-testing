const axios = require('axios');
const { getNumberFact } = require('./index');

jest.mock('axios');

test('Deve retornar um fato aleatório sobre o número 6', async () => {
  const response = {
    data: '6 is the highest number on one end of a standard domino.',
  };
  axios.get.mockResolvedValue(response);
  const result = await getNumberFact(6);
 
  expect(axios.get).toHaveBeenCalledWith('http://numbersapi.com/6');
  expect(result).toEqual(response.data);
});
