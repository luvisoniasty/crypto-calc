import React from 'react';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

const StyledButton = styled.button`
  padding: 10px;
  width: 100%;
  text-align: center;
  background: ${theme.darkblue};
  color: ${theme.white};
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .5s ease;
  transition-property: background, color, border;
  @media (min-width: 1024px) {
    height: 37px;
    width: 49%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  :hover {
      background: ${theme.white};
      color: ${theme.darkblue};
      border: 1px solid ${theme.darkblue};
  }
`;

class Button extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <StyledButton onClick={handleClick}>convert</StyledButton>
      </div>
    );
  }
}

export default Button;