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

// export const fonts = {
//     dancing: 'https://fonts.googleapis.com/css2?family=Barlow&family=Dancing+Script:wght@500&family=Josefin+Slab:wght@300&display=swap';

// }

export const Logo = styled.Image`
    align-self: center;
    height: 50px;
    width: 50px;
`;

export const NavBar = styled.View`
    display: flex;
    flex-direction: row;
    align-items: space-between; 
    justify-content: center;
`;

export const NavAddBtn = styled.TouchableOpacity`
    border-bottom-width: 2px;
    border-bottom-color: ${colors.red};
`;

export const NavText = styled.Text`
    color: ${colors.red};
    font-size: 16px;
`;

export const WhiskItText = styled.Text`
    color: ${colors.brown};
    font-size: 16px;
    font-weight: bold;

`;

export const RecipeCard = styled.View`
    display: flex;
    flex-direction: row;
    margin: 10px;
    border-width: 2px;
    border-color: ${colors.taupe};
    border-radius: 5px;
    height: 200px;
    background-color: ${colors.beige};
    width: 350px;
`;

export const CardText = styled.View`
    align-items: flex-start;
    justify-content: space-between;
    color: ${colors.brown};
    padding-left: 4px;
`;

export const CardImage = styled.View`
    width: 80px;
    justify-content: flex-end;
    margin: 4px;
`;

export const TxtDelete = styled.Text`
    background-color: ${colors.red};
    color: ${colors.brown};
    width: 45px;
`;

export const TxtUpdate = styled.Text`
    background-color: ${colors.taupe};
    color: ${colors.brown};
    width: 55px;
`;

export const ShowModal = styled.ScrollView`
    background-color: ${colors.beige};

`;

export const ShowBtns = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


