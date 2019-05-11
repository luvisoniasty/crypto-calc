import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';
import CoinLogo from './CoinLogo';

const normalCell = () => `
    color: ${theme.darkblue};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.extrasmall};
    border: 1px solid ${theme.gray};
    height: 28px;
    padding: 0 5px;
    text-align: left;
    vertical-align: center; 
    white-space: nowrap;  
    @media (min-width: 1024px) {
        font-size: ${theme.font.size.small};
        height: 40px;
    }
`;

const fixedCell = () => `
    position: absolute;
    top: auto;
    left: 0;
    width: 150px;
    height: 28px;
    padding: 2px 5px;
    display: flex;
    justify-content: left;
    align-items: center;
    border: 1px solid ${theme.gray};
    color: ${theme.darkblue};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.extrasmall};
    text-align: left;
    white-space: unset;
    backface-visibility: hidden;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    @media (min-width: 1024px) {
        font-size: ${theme.font.size.small};
        height: 40px;
    }
`;

const HeadCell = styled.th`
    ${normalCell}  
`;

const BodyCell = styled.td`
    ${normalCell}
    color: ${props => props.checkSign ? (props.content < 0) ? 'red' : 'green' : theme.darkblue};
    ::after {
        content: "${props => props.checkSign ? ' %' : ''}";
    }
`;

const HeadFixedCell = styled.th`
    ${fixedCell}
    border-top-left-radius: 5px;
`;

const BodyFixedCell = styled.td`
    ${fixedCell}
`;

class Cell extends React.Component {
    render() {
        const {header, fixed, content, image, checkSign} = this.props;
        return (
            header ? 
            fixed ? <HeadFixedCell> {content} </HeadFixedCell> : <HeadCell> {content} </HeadCell>
            : image ? <BodyFixedCell><CoinLogo id={image}/> {content}</BodyFixedCell> : 
            <BodyCell checkSign={checkSign} content={content}> {content}</BodyCell>
        );
    }
}

Cell.propTypes = {
    header: PropTypes.bool,
    fixed: PropTypes.bool,
    content: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
             ]).isRequired,
    image: PropTypes.string,
    checkSign: PropTypes.bool
};

export default Cell;