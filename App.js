
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
  AddNewBtns,
  AddNewClose,
  AddNewAdd,
  Logo,
  AddNewModal, 
  CardTextStyle,
  UpdateScrollView,
  Container,
  FormText} from './components/appStyles'



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
    setShowModalIsVisible(false)
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
      endShowModal()
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
      setUpdateModalIsVisible(false)
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
    setName(name)
    setAuthor(author)
    setPrepTime(prepTime)
    setCookTime(cookTime)
    setIngredients(ingredients)
    setInstructions(instructions)
    setImage(image)
    setUpdateModalIsVisible(true)
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


    <Container >
      <View>

        <TouchableWithoutFeedback onPress={() => {
         Keyboard.dismiss()
         console.log('dismissed keyboard')
        }} > 
          <Modal
            visible={modalIsVisible}
          >
            <AddNewModal>
            <Logo source={require('./assets/Logo2.png')} />
              <AddScrollView>
              
              <FormText>Name</FormText>
              <TextInputStl 
                placeholder='Dish Name'
                value={name}
                onChangeText={(text)=>{
                  setName(text)
                }}
              />

              <FormText>Author</FormText>
              <TextInputStl 
                placeholder='Created By'
                value={author}
                onChangeText={(text)=>{
                  setAuthor(text)
                }}
              />

              <FormText>Prep Time</FormText>
              <TextInputStl 
                placeholder='Prep Time'
                value={prepTime}
                onChangeText={(text)=>{
                  setPrepTime(text)
                }}
              />

              <FormText>Cook Time</FormText>
              <TextInputStl 
                placeholder='Cook Time'
                value={cookTime}
                onChangeText={(text)=>{
                  setCookTime(text)
                }}
              />

              <FormText>Ingredients</FormText>
              <TextInputStl 
                multiline
                placeholder='Please List Ingredients'
                value={ingredients}
                onChangeText={(text)=>{
                  setIngredients(text)
                }}
              />

              <FormText>Instructions</FormText>
              <TextInputStl 
                multiline
                placeholder='Please List Instructions'
                value={instructions}
                onChangeText={(text)=>{
                  setInstructions(text)
                }}
              />

              <FormText>Image</FormText>
              <TextInputStl 
                placeholder='Image Address'
                value={image}
                onChangeText={(text)=>{
                  setImage(text)
                }}
              />

            </AddScrollView>

            <AddNewBtns>
              <AddNewClose onPress={endModal}>
                <Text>Close</Text>
              </AddNewClose>
              
              <AddNewAdd onPress={addNewRecipe} >
                <Text>Add Recipe!</Text>
              </AddNewAdd>
            </AddNewBtns>

            
            </AddNewModal>


          </Modal>
        </TouchableWithoutFeedback>

        

        {/* <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
          console.log('dismissed keyboard')
          }} >  */}

        <Modal
            visible={updateModalIsVisible}
          >
          <UpdateModal>
          <Logo source={require('./assets/Logo2.png')} />          
          <UpdateScrollView>
            <FormText>Name</FormText>
            <TextInputStl
              placeholder='Dish Name'
              value={name}
              onChangeText={(text)=>{
                setName(text)
              }}
            />

            <FormText>Author</FormText>
            <TextInputStl 
              placeholder='Created By'
              value={author}
              onChangeText={(text)=>{
                setAuthor(text)
              }}
            />

            <FormText>Prep Time</FormText>
            <TextInputStl
              placeholder='Prep Time'
              value={prepTime}
              onChangeText={(text)=>{
                setPrepTime(text)
              }}
            />

            <FormText>Cook Time</FormText>
            <TextInputStl
              placeholder='Cook Time'
              value={cookTime}
              onChangeText={(text)=>{
                setCookTime(text)
              }}
            />

            <FormText>Ingredients</FormText>
            <TextInputStl
              multiline
              placeholder='Please List Ingredients'
              value={ingredients}
              onChangeText={(text)=>{
                setIngredients(text)
              }}
            />

            <FormText>Instructions</FormText>
            <TextInputStl
              multiline
              placeholder='Please List Instructions'
              value={instructions}
              onChangeText={(text)=>{
                setInstructions(text)
              }}
            />

            <FormText>Image</FormText>
            <TextInputStl
              placeholder='Image Address'
              value={image}
              onChangeText={(text)=>{
                setImage(text)
              }}
            />
            </UpdateScrollView>

            <AddNewBtns>
              <AddNewClose onPress={endUpdateModal}>
                <FormText>Close</FormText>
              </AddNewClose>

              <AddNewAdd onPress={updateRecipe}>
                <FormText>Update!</FormText>
              </AddNewAdd>
            </AddNewBtns>

          
          </UpdateModal>



        </Modal>

        {/* </TouchableWithoutFeedback> */}

        <Modal
            visible={showModalIsVisible}
            >

            <ShowSafeView>
                <Logo source={require('./assets/Logo2.png')} />
                <ShowModal>
                  <ShowScrollView>
                    <ShowTitle> {name} </ShowTitle>
                    <ShowAuthor> Created By {author} </ShowAuthor>
                    <ShowItemName> Prep Time  |   Cook Time </ShowItemName>
                    <Text> {prepTime}  |  {cookTime} </Text>
                    <ShowImage source={{ uri: image}} 
                            style={{
                            resizeMode: 'cover',
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

                    <TouchableOpacity onPress={startUpdateModal} >
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
                  <TouchableOpacity onPress={() => handleShow(itemData.item)}>
                <RecipeCard >
                    <CardText> 
                      <RecipeCardTitle> {itemData.item.name} </RecipeCardTitle>
                      <CardTextStyle> {itemData.item.author} </CardTextStyle>
                      <CardTextStyle> Prep Time: {itemData.item.prepTime} </CardTextStyle>
                      <CardTextStyle> Cook Time: {itemData.item.cookTime} </CardTextStyle>
                      
                    </CardText>

                    <CardImage>
                      <Image source={{ uri: itemData.item.image}} 
                      style={{
                        resizeMode: 'contain',
                        margin: 5,
                        height: 100,
                      }} 
                      />
                    </CardImage>
                </RecipeCard>
                  </TouchableOpacity>  


              </View>
              
            )
          }}
          keyExtractor={(item, index) => {
            return ( _id = item._id)
          }}
        />       
        )}
      </View>

    </Container>


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
