
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator,
   TouchableWithoutFeedback,
   Keyboard,
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

import { ShowAuthor,
  AddScrollView,
  ShowSafeView,
  ShowImage,
  ShowItemName, 
  ShowScrollView,
  ShowTitle, 
  UpdateModal, 
  TextInputStl, 
  RecipeCard, 
  CardText, 
  CardImage, 
  TxtDelete, 
  TxtUpdate,
  TxtHome, 
  ShowModal, 
  ShowBtns, 
  RecipeCardTitle,
  AddNewModal } from './components/appStyles'



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
    setName(item._id.name)
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


    <SafeAreaView >
      <View>

        <TouchableWithoutFeedback onPress={() => {
         Keyboard.dismiss()
         console.log('dismissed keyboard')
        }} > 
          <Modal
            visible={modalIsVisible}
          >
            <AddNewModal>

              <AddScrollView>
                
              <Text>Name</Text>
              <TextInputStl 
                placeholder='Dish Name'
                value={name}
                onChangeText={(text)=>{
                  setName(text)
                }}
              />

              <Text>Author</Text>
              <TextInputStl 
                placeholder='Created By'
                value={author}
                onChangeText={(text)=>{
                  setAuthor(text)
                }}
              />

              <Text>Prep Time</Text>
              <TextInputStl 
                placeholder='Prep Time'
                value={prepTime}
                onChangeText={(text)=>{
                  setPrepTime(text)
                }}
              />

              <Text>Cook Time</Text>
              <TextInputStl 
                placeholder='Cook Time'
                value={cookTime}
                onChangeText={(text)=>{
                  setCookTime(text)
                }}
              />

              <Text>Ingredients</Text>
              <TextInputStl 
                multiline
                placeholder='Please List Ingredients'
                value={ingredients}
                onChangeText={(text)=>{
                  setIngredients(text)
                }}
              />

              <Text>Instructions</Text>
              <TextInputStl 
                multiline
                placeholder='Please List Instructions'
                value={instructions}
                onChangeText={(text)=>{
                  setInstructions(text)
                }}
              />

              <Text>Image</Text>
              <TextInputStl 
                placeholder='Image Address'
                value={image}
                onChangeText={(text)=>{
                  setImage(text)
                }}
              />

            </AddScrollView>

              <TouchableOpacity onPress={endModal}>
                <Text>Close</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={addNewRecipe} >
                <Text>Add Recipe!</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={updateRecipe}>
                <Text>Update!</Text>
              </TouchableOpacity>

            
            </AddNewModal>


          </Modal>
        </TouchableWithoutFeedback>

        


        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
          console.log('dismissed keyboard')
          }} > 
        <Modal
          visible={updateModalIsVisible}
        >
          <UpdateModal>
              
            <Text>Name</Text>
            <TextInputStl
              placeholder='Dish Name'
              value={name}
              onChangeText={(text)=>{
                setName(text)
              }}
            />

            <Text>Author</Text>
            <TextInputStl 
              placeholder='Created By'
              value={author}
              onChangeText={(text)=>{
                setAuthor(text)
              }}
            />

            <Text>Prep Time</Text>
            <TextInputStl
              placeholder='Prep Time'
              value={prepTime}
              onChangeText={(text)=>{
                setPrepTime(text)
              }}
            />

            <Text>Cook Time</Text>
            <TextInputStl
              placeholder='Cook Time'
              value={cookTime}
              onChangeText={(text)=>{
                setCookTime(text)
              }}
            />

            <Text>Ingredients</Text>
            <TextInputStl
              multiline
              placeholder='Please List Ingredients'
              value={ingredients}
              onChangeText={(text)=>{
                setIngredients(text)
              }}
            />

            <Text>Instructions</Text>
            <TextInputStl
              multiline
              placeholder='Please List Instructions'
              value={instructions}
              onChangeText={(text)=>{
                setInstructions(text)
              }}
            />

            <Text>Image</Text>
            <TextInputStl
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

          
          </UpdateModal>


        </Modal>

        </TouchableWithoutFeedback>


        <Modal
            visible={showModalIsVisible}
            >

            <ShowSafeView>
                <ShowModal>
                  <ShowScrollView>
                    <ShowTitle> {name} </ShowTitle>
                    <ShowAuthor> Created By {author} </ShowAuthor>
                    <ShowItemName> Prep Time  |   Cook Time </ShowItemName>
                    <Text> {prepTime}  |  {cookTime} </Text>
                    <ShowImage source={{ uri: image}} 
                            style={{
                            resizeMode: 'contain',
                            }} 
                            />
                    <ShowItemName> Ingredients: </ShowItemName>
                    <Text> {ingredients} </Text>
                    <ShowItemName> Step by Step: </ShowItemName>
                    <Text> {instructions} </Text>

                            
                  </ShowScrollView>
                </ShowModal>
                
                <ShowBtns>
            
                    <TouchableOpacity onPress={() => handleRemove(_id)}>
                        <TxtDelete >Delete</TxtDelete>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleUpdate(itemData.item)} >
                        <TxtUpdate >Update</TxtUpdate>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={endShowModal}>
                      <TxtHome>Back To Directory!</TxtHome>
                    </TouchableOpacity>

                </ShowBtns>


            </ShowSafeView>
        </Modal>




        


        <Nav 
        startModal={startModal}
        />
  
        {isLoading ? (
          <ActivityIndicator />
        ) : (

       
          <FlatList 
          data={recipeList}
          renderItem={(itemData) => {
            return (
              <View>
                <RecipeCard >
                  <TouchableOpacity onPress={() => handleShow(itemData.item)}>
                    <CardText> 
                      <RecipeCardTitle> {itemData.item.name} </RecipeCardTitle>
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
        )}
      </View>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
