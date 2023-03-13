import styled from 'styled-components'

export const colors = {
    orange: '#f4701c',
    red: '#e8400c',
    brown: '#4e1e2d',
    taupe: '#f28357',
    beige: '#e8ceb0'
};

export const images = {
    logo: '../assets/Logo2.png',
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

export const InputInfo = styled.TextInput`
    width: 300px;
    margin: 10px;
    border-width: 1px;
    border-color: ${colors.beige};
`;

export const InputList = styled.TextInput`
    width: 300px;
    margin: 10px;
    border-width: 1px;
    border-color: ${colors.beige};
    height: 200px;
`;