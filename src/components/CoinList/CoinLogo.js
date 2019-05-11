import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled.img`
    height: 22px;
    margin-right: 5px;
`;

class CoinLogo extends React.Component {
    render() {
        const {id} = this.props;
        const link = `https://static.coinpaprika.com/coin/${id}/logo-thumb.png`
        return (
            <StyledImg src={link} alt={id}/> 
        );
    }
}

CoinLogo.propTypes = {
    id: PropTypes.string.isRequired
};

export default CoinLogo;