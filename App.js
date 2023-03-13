// import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button, 
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';

import RecipeList from './components/recipeList'
import Nav from './components/nav'
import Recipe from './components/recipe'
import AddRecipe from './components/addRecipe'




export default function App() {
  
  const [ modalIsVisible, setModalIsVisible ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ recipeList, setRecipeList ] = useState([])
  
  function startAddRecipeHandler() {
    setModalIsVisible(true)
  }

  function endAddRecipeHandler() {
    setModalIsVisible(false)
  }

 

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
    <SafeAreaView style={styles.container}>
      
      <Nav 
        visible={modalIsVisible}
        onAddRecipe={addNewRecipe}
        startAddRecipe={startAddRecipeHandler}
        onCancel={endAddRecipeHandler}
              />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={recipeList}
          renderItem={({item}) => (
            <View style={styles.recipeCard} >
              <Text>{item.name} </Text>
              <Text>{item.author}</Text>
      
            </View>
          )}
          keyExtractor={(item, index) => {
            return item._id.toString()
          }}
          />
      )}
      
      <RecipeList />

      <Recipe />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: '#e8400c',
    fontWeight: 'bold',
  },
  recipeCard: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'red',
  }
});
