import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import styled from 'styled-components';
import * as coinPaprika from '../../api/coinPaprika';
import Home from '../../pages/Home';
import CoinList from '../../pages/CoinList';
import Error from '../Error/Error';
import Navbar from '../Navbar/Navbar';
import BottomBar from '../BottomBar/BottomBar';

const Wrapper = styled.div`
    padding: 0 15px;
    @media (min-width: 1024px) {
      margin: 0 auto;
      max-width: 1024px;
    }
`;

class App extends React.Component {
  state = {
    coins: [],
    convert: {
      data: {},
      firstCoin: 'btc-bitcoin',
      secondCoin: 'usd-us-dollars',
      amount: 1
    }
  }

  changeCoin = (e) => {
    this.setState({convert: {...this.state.convert, [e.target.name]:e.target.value}})
  }

  handleConversion = (amount) => {
    if(isNaN(amount))
      amount = Number(amount.replace(',','.'));

    if(!isNaN(amount)) 
      this.doConversion(amount);
  }

  doConversion = (amount = this.state.convert.amount) => {
    const { firstCoin, secondCoin } = this.state.convert;
    this.setState({convert: {...this.state.convert, amount: amount}});

    coinPaprika.getConvertedPrice(firstCoin, secondCoin, amount).then(res => {
      if(res.data.quote_currency_id === 'usd-us-dollars' || res.data.quote_currency_id === 'pln-polish-zloty')
      res.data.price =  parseFloat(Math.round(res.data.price * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);

      this.setState({convert: {...this.state.convert, data: res.data}});
    });
  }

  refreshData = () => {
    coinPaprika.getCoins().then(res => {
      const coins = res.data.sort((a,b) => (a.rank > b.rank) ? 1 : -1).slice(0,100);
      this.setState({coins});
    });

    if(Object.keys(this.state.convert.data).length !== 0) {
      this.doConversion();
    }
  }

  componentDidMount() {
    coinPaprika.getCoins().then(res => {
        const coins = res.data.sort((a,b) => (a.rank > b.rank) ? 1 : -1).slice(0,100);
        this.setState({coins});
    });
    this.interval = setInterval( () => this.refreshData(), 30000);
  };

  componentWillUnmount() {
    clearInterval(this.inverval);
  }
  
  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar/>
          <Wrapper>
            <Switch>
              <Route exact path="/" 
              render={() => <Home coins={this.state.coins} convert={this.state.convert} handleConversion={this.handleConversion} coinChange={this.changeCoin}/>} 
              />
              <Route path="/coinlist" render={() => <CoinList coins={this.state.coins} />} />
              <Route component={Error} />
            </Switch>
          </Wrapper>
          <BottomBar coins={this.state.coins} />
        </BrowserRouter>
      </>
    );
  }
};

export default App;
