import { Text, View, FlatList, TouchableOpacity, Image, Modal, Pressable } from 'react-native'
import { RecipeCard, CardText, CardImage } from './appStyles'

// import { } from './appStyles'

export default function RecipeList({ recipeList, handleShow }) {

    

    return (
        <View>
            <FlatList 
          data={recipeList}
          renderItem={(itemData) => {
            return (
              <View>
                <RecipeCard >
                  <TouchableOpacity onPress={() => handleShow(itemData.item)}>
                    <CardText> 
                      <Text> {itemData.item.name} </Text>
                      <Text> {itemData.item.author} </Text>
                      <Text> Prep: {itemData.item.prepTime} </Text>
                      <Text> Cook Time: {itemData.item.cookTime} </Text>
                      
                    </CardText>

                    <CardImage>
                      <Image source={{ uri: itemData.item.image}} 
                      style={{
                        resizeMode: 'contain',
                        margin: 2,
                        height: 50,
                      }} 
                      />
                    </CardImage>
                  </TouchableOpacity>  
                </RecipeCard>


              </View>
              
            )
          }}
          keyExtractor={(item, index) => {
            return ( _id = item._id)
          }}
        />
        </View>
        )
}