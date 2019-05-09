import React from "react";
import { Helmet } from 'react-helmet';
import CoinTable from '../components/CoinList/CoinTable';

class CoinList extends React.Component {
    render() {
        const { coins } = this.props;
        const headings = [
            'Name',
            'Price',
            '1h',
            '24h',
            '7d',
            'MarketCap'
        ]
        return (
            <div>
                <Helmet>
                    <title>coin list - crypto.calc</title>
                    <meta name="description" content="List of 200 most popular cryptocurrencies" />
                </Helmet>
                <CoinTable headings={headings} coins={coins} />
            </div>
        );
    }
}

export default CoinList;