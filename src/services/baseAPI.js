const API = async () => {
  const url = fetch('https://economia.awesomeapi.com.br/json/all');
  const [infoCurrency] = await Promise.all([url]);
  const dataCurrency = await infoCurrency.json();
  return dataCurrency;
};

export default API;
