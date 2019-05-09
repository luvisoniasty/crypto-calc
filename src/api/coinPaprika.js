import axios from 'axios';

const coinPaprikaInstance = axios.create({
    baseURL: 'https://api.coinpaprika.com/v1/',
});

export const getCoins = () => 
    coinPaprikaInstance.get(`tickers`);


export const getConvertedPrice = (from, to, amount) => 
    coinPaprikaInstance.get(`price-converter?base_currency_id=${from}&quote_currency_id=${to}&amount=${amount}`);


  