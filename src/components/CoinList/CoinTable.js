import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './Row';
import theme from '../../assets/styles/theme';

const DataTable = styled.div`
    position: relative;
    max-width: 100vw;
    background: ${theme.white};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding-right: 5px;
    margin-bottom: 40px;
`;

const ScrollContainer = styled.div`
    overflow-x: auto;
    margin-left: 150px;
`;

const Table = styled.table`
    border-spacing: 0px;
    width: 100%;
`;

class CoinTable extends React.Component {
  getCoinRow = (coin) => {
      return (
          <Row key={coin.id} content={coin} />
      )
  }
  render() {
    const {headings, coins} = this.props;
    return (
      <DataTable>
        <ScrollContainer>
          <Table>
            <thead><Row header={true} content={headings} /></thead>
            <tbody>{coins.map(this.getCoinRow)}</tbody>
          </Table>
        </ScrollContainer>
      </DataTable>
    );
  }
}

CoinTable.propTypes = {
  headings: PropTypes.array.isRequired,
  coins: PropTypes.array.isRequired
};

export default CoinTable;