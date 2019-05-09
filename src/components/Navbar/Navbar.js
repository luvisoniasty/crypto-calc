import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    margin: 0 auto;
    @media (min-width: 1024px) {
        max-width: 1024px;
    }
`;

const Name = styled.h1`
    font-size: ${theme.font.size.big};
    font-weight: ${theme.font.weight.light};
    color: ${theme.darkblue};
    background: ${theme.white};
    border-radius: 2px;
    padding: 5px 10px;
    margin: 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.white};
    font-weight: ${theme.font.weight.light};
    padding: 5px 15px 5px 5px;
    position: relative;
    transition: padding .5s ease;
    ::after {
        content: '';
        position: absolute;
        top: 10%;
        right: 0;
        width: 10px;
        height: 80%;
        background: ${theme.white};
        transition: transform .5s ease;
    }
    :hover {
        padding: 5px 30px 5px 5px;
        ::after {
            transform: translateX(-50%) rotate(90deg);
        }
    }
`;

const Navbar = withRouter(props => {
    return (
        <Header>
            <Name>crypto.calc</Name>
            {(props.location.pathname === '/') ? 
            <StyledLink to="/coinlist">coin list</StyledLink> :
            <StyledLink to="/">home</StyledLink>}
        </Header>
    );
});

export default Navbar;