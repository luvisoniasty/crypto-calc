import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from './Select';
import Button from './Button';
import theme from '../../assets/styles/theme';

const StyledConverter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-bottom: 100px;
  padding: 10px 15px;
  background: ${theme.white};
  border-radius: 5px;
  @media (min-width: 1024px) {
    padding: 20px 30px;
    margin-top: 20%;
  }
`;

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    position: relative;
  }
`;

const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 49%;
  }
`;

const StyledLabel = styled.label`
  color: ${theme.black};
  text-transform: uppercase;
  text-align: left;
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.size.small};
`;

const StyledInput = styled.input`
  padding: 10px 5px;
  background: ${theme.white};
  color: ${theme.black};
  border: 1px solid ${theme.darkblue};
  border-radius: 2px;
  margin-bottom: 10px;
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const Result = styled.p`
  color: ${theme.darkblue};
  font-weight: ${theme.font.weight.bold};
  text-align: center;
  text-transform: uppercase;
`;

class CoinConverter extends React.Component {
  convertCrypto = () => {
    const { handleConversion } = this.props;
    handleConversion(this.input.value);
  }
  
  render() {
    const { coins, convert, coinChange } = this.props;
    return (
      <StyledConverter>
        <BasicContainer>
          <LabelInputContainer>
            <StyledLabel htmlFor="firstCoin">from</StyledLabel>
            <Select coins={coins} value={convert.firstCoin} name='firstCoin' handleChange={coinChange}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <StyledLabel htmlFor="secondCoin">to</StyledLabel>
            <Select coins={coins} value={convert.secondCoin} name='secondCoin' handleChange={coinChange}/>
          </LabelInputContainer>
        </BasicContainer>
        <BasicContainer>
          <LabelInputContainer>
            <StyledLabel htmlFor="amount">amount</StyledLabel>
            <StyledInput type='text' name="amount" ref={input => this.input = input} defaultValue="1"/>
          </LabelInputContainer>
          <Button handleClick={this.convertCrypto}>convert</Button>
        </BasicContainer>
        {(convert.data.price) ?
          <Result>{convert.data.amount} {convert.data.base_currency_name} = {convert.data.price} {convert.data.quote_currency_name}</Result>
          : ''
        }
      </StyledConverter>
    );
  }
}

CoinConverter.propTypes = {
  coins: PropTypes.array.isRequired,
  convert: PropTypes.object.isRequired,
  coinChange: PropTypes.func.isRequired,
  handleConversion: PropTypes.func.isRequired
};

export default CoinConverter;