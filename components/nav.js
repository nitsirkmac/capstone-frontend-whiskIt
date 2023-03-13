import { Text, View, Image, Button } from 'react-native'
import AddRecipe from './addRecipe'
import { Logo, NavBar } from './appStyles'

export default function Nav({ onAddRecipe, visible, startAddRecipe, onCancel }) {
    return (
        <NavBar> 
            <Text> Full Directory </Text>
            <Logo source={require("../assets/Logo2.png")} />
            <View>
                <Button
                    title='Add New Recipe'
                    onPress={startAddRecipe}
                />
            </View>
            <AddRecipe 
                visible={visible}
                onAddRecipe={onAddRecipe}
                onCancel={onCancel}
                    />
            {/* <Text> Recipe Gallery</Text>
            <Text> Add Recipe </Text>
            <Text> Search Recipes </Text> */}
        </NavBar>
        
    )
}