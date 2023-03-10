import { Text, View } from 'react-native'
import AddRecipe from './addRecipe'

export default function Nav() {
    return (
        <View> 
            <Text> Navigation Station </Text>
            <AddRecipe />
            {/* <Text> Recipe Gallery</Text>
            <Text> Add Recipe </Text>
            <Text> Search Recipes </Text> */}
        </View>
        
    )
}