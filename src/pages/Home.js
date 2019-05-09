import React from 'react';
import { Helmet } from 'react-helmet';
import CoinConverter from '../components/Home/CoinConverter';

class Home extends React.Component {
  render() {
    const { coins, convert, coinChange, handleConversion } = this.props;
    return (
      <div>
        <Helmet>
            <title>crypto.calc</title>
            <meta name="description" content="Calculator for cryptocurrencies" />
        </Helmet>
        <CoinConverter coins={coins} convert={convert} handleConversion={handleConversion} coinChange={coinChange}/>
      </div>
    );
  }
}

export default Home;