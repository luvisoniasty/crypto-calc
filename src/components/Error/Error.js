import React from "react";
import styled from 'styled-components';

const ErrorText = styled.h2`
  text-align: center;
  margin-top: 50px;
`;

class Error extends React.Component {
  render() {
    return (
      <div>
        <ErrorText>404: Page not found</ErrorText>
      </div>
    );
  }
}

export default Error;