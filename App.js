// import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button, 
  FlatList,
  ActivityIndicator
} from 'react-native';

import RecipeList from './components/recipeList'
import Nav from './components/nav'
import Recipe from './components/recipe'




export default function App() {
  
  const [ isLoading, setIsLoading ] = useState(true)
  const [ recipeList, setRecipeList ] = useState([])
  
  const URL = 'https://whiskit.herokuapp.com/recipes'

  const getRecipeList = async () => {
    try {
      const response =  await fetch(URL)
      const data =  await response.json()
      setRecipeList(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getRecipeList()
  }, [])



  const addNewRecipe = async(recipe) => {
    await fetch(URL, {
      method: 'POST', 
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(recipe),
  })
  getRecipeList()
      }
    
  

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={recipeList}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.name}, {item.author}
            </Text>
          )}
          />
      )}
      <Nav />
      
      <RecipeList />

      <Recipe />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: '#e8400c',
    fontWeight: 'bold',
  }
});
