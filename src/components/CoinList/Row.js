import React from 'react';
import Cell from './Cell';

class Row extends React.Component {
    render() {
        const {header, content} = this.props;
        if(header) {  
            return (
                <tr>
                    {content.map((inCell) => (inCell === 'Name') ? <Cell key={inCell} header={header} fixed='true' content={inCell} /> : <Cell key={inCell} header={header} content={inCell} />)}
                </tr>
            );
        } else {
            const rowContent = [
                content.name,
                `${content.quotes.USD.price} $`,
                content.quotes.USD.percent_change_1h,
                content.quotes.USD.percent_change_24h,
                content.quotes.USD.percent_change_7d,
                `${content.quotes.USD.market_cap} $`,
            ];
            return (
                <tr>
                    {rowContent.map((inCell,index) => (inCell === content.name) ?
                    <Cell key={`${content.id}-${inCell}-${index}`} image={content.id} fixed='true' content={inCell} />
                    : (typeof inCell == 'number') ? <Cell key={`${content.id}-${inCell}-${index}`} checkSign='true' content={inCell} /> 
                    : <Cell key={`${content.id}-${inCell}-${index}`} content={inCell} />)}
                </tr>
            )
        }
    }
}

export default Row;