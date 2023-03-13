import { Text, TextInput, Button, View, Modal, Image, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { InputInfo, InputList } from './appStyles'

export default function AddRecipe({ onAddRecipe, visible, onCancel }) {


    const [ newRecipe, setNewRecipe ] = useState({
        name: "",
        author: "",
        prepTime: "",
        cookTime: "",
        ingredients: "",
        instructions: "",
        image: "",
      })
    
      function recipeInputHandler(enteredText) {
        setNewRecipe(enteredText)
      }
    
      function addRecipeHandler() {
        onAddRecipe(newRecipe => [
          {[evt.target.name]: evt.target.value}
        ])
        onCancel()
      }



    return (
        <Modal visible={visible} animationType='slide'>
            <SafeAreaView >
                <InputInfo
                    placeholder='Recipe Name'
                    value={newRecipe.name}
                    onChangeText={recipeInputHandler}
                />
                <InputInfo
                    placeholder='Author'
                    value={newRecipe.author}
                />
                <InputInfo
                    placeholder='Prep-Time'
                    value={newRecipe.prepTime}
                />
                <InputInfo 
                    placeholder='Cook Time'
                    value={newRecipe.cookTime}
                />
                <InputList 
                    placeholder='Please List Ingredients'
                    multiline
                    value={newRecipe.ingredients}
                />
                <TextInput 
                    placeholder='Step-by-Step Instructions'
                    multiline
                    value={newRecipe.instructions}
                />
                <InputInfo 
                    placeholder='Add Photo'
                    value={newRecipe.image}
                />
                <Button title='Add New Recipe!' onPress={addRecipeHandler} />
                <Button title='Cancel' onPress={onCancel} />
            </SafeAreaView>
         </Modal>
    )
}