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
    margin: 30px;
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
    width: 85px;
    padding-left: 20px;
`;

export const TxtUpdate = styled.Text`
    background-color: ${colors.taupe};
    color: ${colors.brown};
    width: 85px;
    padding-left: 20px;
`;

export const ShowModal = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.beige};
    margin: 5px;
    padding: 5px;
    border-width: 2px;
    border-color: ${colors.taupe};
    border-radius: 5px;
`;

export const ShowScrollView = styled.ScrollView`
    background-color: ${colors.beige};
`;


export const ShowBtns = styled.View`
    flex-direction: row;
    justify-content: space-around;
    height: 80px;
`;

export const AddNewModal = styled.SafeAreaView`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    padding-top: 60px;
    padding: 15px;
    margin: 10px;
`;

export const AddScrollView = styled.ScrollView`
    background-color: ${colors.beige};
    padding: 5px;
    padding-top: 10px;
    border-radius: 5px;
`;

export const TextInputStl = styled.TextInput`
    border-width: 2px;
    border-color: ${colors.taupe};
    width: 300px;
    margin: 5px;
`;

export const UpdateModal = styled.SafeAreaView`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    background-color: ${colors.taupe};
    padding-top: 60px;
    padding: 15px;
`;

export const ShowTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${colors.orange};
`;

export const ShowAuthor = styled.Text`
    font-weight: bold;
    font-size: 12px;
`;

export const ShowItemName = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: ${colors.red};
    border-bottom-width: 2px;
    border-bottom-color: ${colors.red};
    margin-top: 15px;
`;

export const ShowImage = styled.Image`
    margin-top: 15px;
    height: 100px;
    
`;

export const ShowSafeView = styled.SafeAreaView`
    flex: 1;
`;

export const TxtHome = styled.Text`
    color: ${colors.taupe};
    font-weight: bold;
`;

export const RecipeCardTitle = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: ${colors.orange};
    padding: 3px;
`;

export const AddNewBtns = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const AddNewClose = styled.TouchableOpacity`
    border-width: 1px;
    margin: 4px;
    margin-left: 30px;
    padding: 5px;
    padding-left: 30px;
    background-color: ${colors.orange};
    border-color: ${colors.taupe};
    width: 100px;
`;

export const AddNewAdd = styled.TouchableOpacity`
    border-width: 1px;
    margin: 4px;
    margin-left: 105px;
    padding: 5px;
    padding-left: 10px;
    background-color: ${colors.red};
    border-color: ${colors.orange};
    width: 100px;
`;

export const FormText = styled.Text`
    font-weight: bold;
    font-style: italic;
    color: ${colors.brown};
`;