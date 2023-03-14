import { AppRegistry } from "react-native"



const Root = createStackNavigator()

const Home = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Home Screen</Text>
    <Button
      title='Go To WhiskIt!'
      onPress={() => {
        navigation.push('Recipes')
      }}
    />

  </View>
)

const Recipes = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>WhiskIt Directory</Text>

    <Button
      title='Go Back'
      onPress={() => {
        navigation.pop()
      }}
      />
  </View>
)


<NavigationContainer>
<Root.Navigator>
  <Root.Screen name='Home' component={Home} />
  <Root.Screen name='Directory' component={Directory} />
</Root.Navigator>
</NavigationContainer>






// app.js


// import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { useState, useEffect } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button, 
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Pressable,
} from 'react-native';


import RecipeList from './components/recipeList'
import Nav from './components/nav'
import Recipe from './components/recipe'
import AddRecipe from './components/addRecipe'



export default function App() {
  

  const [ modalIsVisible, setModalIsVisible ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ recipeList, setRecipeList ] = useState([])
  
  // function startAddRecipeHandler() {
  //   setModalIsVisible(true)
  // }

  // function endAddRecipeHandler() {
  //   setModalIsVisible(false)
  // }

 

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



  const createRecipe = async(recipe) => {
    await fetch(URL, {
      method: 'POST', 
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(recipe),
    })
  getRecipeList()
  }
  

  const deleteRecipeHandler = async (id) => {
    await fetch(URL + id, {
      method: 'DELETE',
    })
    getRecipeList()
  }


  return (

    <SafeAreaView style={styles.container}>
      
      <Nav 
        visible={modalIsVisible}
        createRecipe={createRecipe}
        startAddRecipe={startAddRecipeHandler}
        onCancel={endAddRecipeHandler}
              />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={recipeList}
            renderItem={(itemData) => {
              return (
              <View style={styles.recipeCard} >
                  <Text >
                    {itemData.item.name} </Text>
                  <Text>{itemData.item.author}</Text>

     
                
        
              </View>
              )
            }}
            keyExtractor={(item, index) => {
              return ( id = item._id.toString())
            }}
            />
          </View>
      )}
      
      <RecipeList />

      <Recipe
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
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
  },


    screen: {
      marginTop: 40,
      alignItems: 'center',
    },
    title: {
      padding: 20,
      fontSize: 42,
    },

});




// nav.js

import { Text, View, Image, Button } from 'react-native'
import AddRecipe from './addRecipe'
import { Logo, NavBar,  } from './appStyles'

export default function Nav({ createRecipe, visible, startAddRecipe, onCancel }) {
    return (
        <NavBar> 
            <Text> Welcome to WhiskIt! </Text>
            <Logo source={require("../assets/Logo2.png")} />
            <View>
                <Button
                    title='Add New Recipe'
                    onPress={startAddRecipe}
                    color='#f4701c'
                />
            </View>
            <AddRecipe 
                visible={visible}
                createRecipe={createRecipe}
                onCancel={onCancel}
                />
            {/* <Text> Recipe Gallery</Text>
            <Text> Add Recipe </Text>
            <Text> Search Recipes </Text> */}
        </NavBar>
        
    )
}




// appStyles.js

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
