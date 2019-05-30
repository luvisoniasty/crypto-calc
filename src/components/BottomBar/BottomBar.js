import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';
import BarCoin from './BarCoin';

const Bar = styled.div`
    position: ${props => (props.path === '/') ? 'absolute' : 'fixed'};
    bottom: 0;
    height: 40px;
    background: ${props => (props.path === '/') ? theme.transparentDarkblue : theme.darkblue};
    width: 100%;
    overflow: hidden;
`;

const AllCoins = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    animation: coins 5s linear infinite;

    @keyframes coins {
        0% {
        transform: translateX(0);
        }
        100% {
        transform: translateX(-83%);
        }
    }

    @media (min-width: 1024px) {
        animation: coins 20s linear infinite;
    }

    @media (min-width: 1600px) {
        animation: coins 30s linear infinite;
    }
`;

class BottomBar extends React.Component {
    constructor() {
        super();
        this.firstInit = true;
    }
    shouldComponentUpdate(nextProps) {
        if(this.firstInit) {
            this.firstInit = !this.firstInit;
            return true;
        }
        return this.props.location.pathname !== nextProps.location.pathname;
    }

    getCoin = (coin) => {
        if(coin.quotes.USD.price >= 0.005)
        return (
            <BarCoin key={coin.id} coin={coin} />
        )
    }
    
    render() {
        const {coins} = this.props;
        return (
            <Bar path={this.props.location.pathname}>
                <AllCoins>
                    {coins.map(this.getCoin)} 
                </AllCoins>
            </Bar>
        )
    }
}

BottomBar.propTypes = {
    coins: PropTypes.array.isRequired
};

export default withRouter(BottomBar);