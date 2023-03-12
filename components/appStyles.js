import styled from 'styled-components'

export const colors = {
    orange: '#f4701c',
    red: '#e8400c',
    brown: '#4e1e2d',
    taupe: '#f28357',
    beige: '#e8ceb0'
};

export const images = {
    logo: '../assets/Logo.png',
};

export const Logo = styled.Image`
    height: 50px;
    width: 50px;
`;

export const NavBar = styled.View`
    display: flex;
    flex-direction: row;
    align-items: space-between; 
    justify-content: center;
`;