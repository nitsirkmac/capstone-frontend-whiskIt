import { Text, View, Image } from 'react-native'
import AddRecipe from './addRecipe'
import { Logo, NavBar } from './appStyles'

export default function Nav() {
    return (
        <NavBar> 
            <Text> Full Directory </Text>
            <Logo source={require("../assets/Logo2.png")} />
            <AddRecipe />
            {/* <Text> Recipe Gallery</Text>
            <Text> Add Recipe </Text>
            <Text> Search Recipes </Text> */}
        </NavBar>
        
    )
}