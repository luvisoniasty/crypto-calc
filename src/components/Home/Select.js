import React from 'react';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

const StyledSelect = styled.select`
    padding: 10px 5px;
    text-transform: uppercase;
    background: ${theme.white};
    color: ${theme.black};
    border: 1px solid ${theme.darkblue};
    border-radius: 2px;
    margin-bottom: 10px;
    @media (min-width: 1024px) {
        margin-bottom: 0;
    }
`;

class Select extends React.Component {
    getOption = coin => {
        return (
            <option key={coin.id} value={coin.id}>{coin.name}</option>
        );
    };

    render() {
        const { coins, value, name, handleChange } = this.props;
        return (
            <StyledSelect value={value} name={name} onChange={handleChange}>
                <option key="usd-us-dollars" value="usd-us-dollars">US Dollars</option>
                <option key="pln-polish-zloty" value="pln-polish-zloty">Polish zloty</option>
                {coins.map(this.getOption)}
            </StyledSelect>
        );
    }

}

export default Select;