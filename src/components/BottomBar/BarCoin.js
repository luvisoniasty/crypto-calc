import React from 'react';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';
import CoinLogo from '../CoinList/CoinLogo';

const Container = styled.span`
    font-weight: ${theme.font.weight.bold};
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    padding: 0 20px;
`;
class BarCoin extends React.Component {
    render() {
        const {coin} = this.props;
        let roundedPrice = coin.quotes.USD.price;
        roundedPrice = +roundedPrice.toFixed(2);
        return (
            <Container>
                <CoinLogo id={coin.id}/> {roundedPrice}$
            </Container>
        )
    }
}

export default BarCoin;