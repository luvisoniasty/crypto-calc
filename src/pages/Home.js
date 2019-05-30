import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CoinConverter from '../components/Home/CoinConverter';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

class Home extends React.Component {
  render() {
    const { coins, convert, coinChange, handleConversion } = this.props;
    return (
      <Container>
        <Helmet>
            <title>crypto.calc</title>
            <meta name="description" content="Calculator for cryptocurrencies" />
        </Helmet>
        <CoinConverter coins={coins} convert={convert} handleConversion={handleConversion} coinChange={coinChange}/>
      </Container>
    );
  }
}

Home.propTypes = {
  coins: PropTypes.array.isRequired,
  convert: PropTypes.object.isRequired,
  coinChange: PropTypes.func.isRequired,
  handleConversion: PropTypes.func.isRequired
};

export default Home;