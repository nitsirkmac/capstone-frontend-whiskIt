
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator,
   StyleSheet, 
   Text, 
   View,  
   FlatList, 
   SafeAreaView, 
   Image, 
   TouchableOpacity, 
   Modal, 
   TextInput, 
   ScrollView } from 'react-native';
import { useEffect, useState } from 'react'

import Nav from './components/nav'
import RecipeList from './components/recipeList'

import {  TxtDelete, TxtUpdate, ShowModal, ShowBtns } from './components/appStyles'
import Recipe from './components/recipe';


// Navigation
  // Welcome To WhiskIt!
  // Logo
  // Add New Recipe - onPress - Add New Recipe Modal
// Recipe Directory
  // Recipe Card - onPress - RecipeShow Modal




export default function App() {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ modalIsVisible, setModalIsVisible ] = useState(false)
  const [ updateModalIsVisible, setUpdateModalIsVisible ] = useState(false)
  const [ showModalIsVisible, setShowModalIsVisible ] = useState(false)


  const [recipeList, setRecipeList] = useState([])

  const [ name, setName ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ prepTime, setPrepTime ] = useState('')
  const [ cookTime, setCookTime ] = useState('')
  const [ ingredients, setIngredients ] = useState('')
  const [ instructions, setInstructions ] = useState('')
  const [ image, setImage ] = useState('')



  const [ newRecipe, setNewRecipe ] = useState({
    name: "",
    author: "",
    prepTime: "",
    cookTime: "",
    ingredients: "",
    instructions: "",
    image: "",
  })
  

  function startModal() {
    setModalIsVisible(true)
  }

  function endModal() {
    setModalIsVisible(false)
  }

  function startUpdateModal() {
    setUpdateModalIsVisible(true)
  }

  function endUpdateModal() {
    setUpdateModalIsVisible(false)
  }



  function endShowModal() {
    setShowModalIsVisible(false)
  }

  const URL = 'https://whiskit.herokuapp.com/recipes/'

  const getRecipeListData = async () => {
    await fetch(URL, {
      method: 'GET'
    }).then(res => {
      return res.json()
    }).then(res => {
      if(res){
        setRecipeList(res)
      }
    }).catch(err => {
      console.log(err)
    }).finally(res=>{
      setIsLoading(false)
    })
  }
  
  useEffect(()=>{
    getRecipeListData()
  }, [])


  const handleRemove = (_id) => {
    fetch(URL + _id, {
      method: 'DELETE',
      body: JSON.stringify({
        id : _id
      })
    }).then(res=>{
      return res.json()
    }).then(res=>{
      getRecipeListData()
    }).catch(err=>{
      console.log(err)
    })
  }

  const addNewRecipe = async () => {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        'name': name,
        'author': author,
        'prepTime': prepTime,
        'cookTime': cookTime,
        'ingredients': ingredients,
        'instructions': instructions,
        'image': image,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'Application/json',
      },
    }).then(res=>{
      return res.json()
    }).then(res=>{
      getRecipeListData()
      setModalIsVisible(false)
      clearForm()
    }).catch(err=> {
      console.log(err)
    })
  }

  const updateRecipe = async () => {
    await fetch(URL + _id, {
      method: 'PUT',
      body: JSON.stringify({
        'name': name,
        'author': author,
        'prepTime': prepTime,
        'cookTime': cookTime,
        'ingredients': ingredients,
        'instructions': instructions,
        'image': image,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'Application/json',
      },
    }).then(res=>{
      return res.json()
    }).then(res=>{
      getRecipeListData()
      setModalIsVisible(false)
      clearForm()
    })
  }

  const clearForm = () => {
    setName('')
    setAuthor('')
    setPrepTime('')
    setCookTime('')
    setIngredients('')
    setInstructions('')
    setImage('')
  }

  const handleUpdate = (item) => {
    setName(item.name)
    setAuthor(item.author)
    setPrepTime(item.prepTime)
    setCookTime(item.cookTime)
    setIngredients(item.ingredients)
    setInstructions(item.instructions)
    setImage(item.image)
    setModalIsVisible(true)
  }

  const handleShow = (item) => {
    setName(item.name)
    setAuthor(item.author)
    setPrepTime(item.prepTime)
    setCookTime(item.cookTime)
    setIngredients(item.ingredients)
    setInstructions(item.instructions)
    setImage(item.image)
    setShowModalIsVisible(true)
  }

  return (

    <>
   




    <SafeAreaView >
      <View>

        <Modal
          visible={modalIsVisible}
        >
          <View style={styles.addNewModal}>
              
            <Text>Name</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Dish Name'
              value={name}
              onChangeText={(text)=>{
                setName(text)
              }}
            />

            <Text>Author</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Created By'
              value={author}
              onChangeText={(text)=>{
                setAuthor(text)
              }}
            />

            <Text>Prep Time</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Prep Time'
              value={prepTime}
              onChangeText={(text)=>{
                setPrepTime(text)
              }}
            />

            <Text>Cook Time</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Cook Time'
              value={cookTime}
              onChangeText={(text)=>{
                setCookTime(text)
              }}
            />

            <Text>Ingredients</Text>
            <TextInput 
              style={styles.textInput}
              multiline
              placeholder='Please List Ingredients'
              value={ingredients}
              onChangeText={(text)=>{
                setIngredients(text)
              }}
            />

            <Text>Instructions</Text>
            <TextInput 
              style={styles.textInput}
              multiline
              placeholder='Please List Instructions'
              value={instructions}
              onChangeText={(text)=>{
                setInstructions(text)
              }}
            />

            <Text>Image</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Image Address'
              value={image}
              onChangeText={(text)=>{
                setImage(text)
              }}
            />
            <TouchableOpacity onPress={endModal}>
              <Text>Close</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={addNewRecipe} >
              <Text>Add Recipe!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={updateRecipe}>
              <Text>Update!</Text>
            </TouchableOpacity>

          
          </View>


        </Modal>

        


        <Modal
          visible={updateModalIsVisible}
        >
          <View style={styles.updateModal}>
              
            <Text>Name</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Dish Name'
              value={name}
              onChangeText={(text)=>{
                setName(text)
              }}
            />

            <Text>Author</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Created By'
              value={author}
              onChangeText={(text)=>{
                setAuthor(text)
              }}
            />

            <Text>Prep Time</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Prep Time'
              value={prepTime}
              onChangeText={(text)=>{
                setPrepTime(text)
              }}
            />

            <Text>Cook Time</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Cook Time'
              value={cookTime}
              onChangeText={(text)=>{
                setCookTime(text)
              }}
            />

            <Text>Ingredients</Text>
            <TextInput 
              style={styles.textInput}
              multiline
              placeholder='Please List Ingredients'
              value={ingredients}
              onChangeText={(text)=>{
                setIngredients(text)
              }}
            />

            <Text>Instructions</Text>
            <TextInput 
              style={styles.textInput}
              multiline
              placeholder='Please List Instructions'
              value={instructions}
              onChangeText={(text)=>{
                setInstructions(text)
              }}
            />

            <Text>Image</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Image Address'
              value={image}
              onChangeText={(text)=>{
                setImage(text)
              }}
            />
            <TouchableOpacity onPress={endModal}>
              <Text>Close</Text>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={updateRecipe}>
              <Text>Update!</Text>
            </TouchableOpacity>

          
          </View>


        </Modal>




        <Modal
            visible={showModalIsVisible}
            >

            <SafeAreaView>
                <ShowModal>
                    <Text> {name} </Text>
                    <Text> {author} </Text>
                    <Text> Prep Time: {prepTime} </Text>
                    <Text> Cook Time: {cookTime} </Text>
                    <Text> Ingredients: </Text>
                    <Text> {ingredients} </Text>
                    <Text> Step by Step: </Text>
                    <Text> {instructions} </Text>
                    <Image source={{ uri: image}} 
                            style={{
                            resizeMode: 'contain',
                            margin: 2,
                            height: 50,
                            }} 
                            />

                </ShowModal>
                
                <ShowBtns>
            
                <TouchableOpacity onPress={() => handleRemove(_id)}>
                    <TxtDelete >Delete</TxtDelete>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleUpdate(itemData.item)}>
                    <TxtUpdate >Update</TxtUpdate>
                </TouchableOpacity>

                <TouchableOpacity onPress={endShowModal}>
                <Text>Back To Directory!</Text>
                </TouchableOpacity>

                </ShowBtns>


            </SafeAreaView>
        </Modal>




        


        <Nav 
        startModal={startModal}
        />
  
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <RecipeList 
            recipeList={recipeList}
            handleShow={handleShow}
          />         
        )}
      </View>

    </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNewModal: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#e8ceb0',
    paddingTop: 60,
    padding: 15,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#f28357',
    width: 300,
    margin: 5,
  },

  updatewModal: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#e8ceb0',
    paddingTop: 60,
    padding: 15,
  },
  
});
