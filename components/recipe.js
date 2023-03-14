import { useState } from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native'
import { TxtDelete, TxtUpdate, ShowModal, ShowBtns } from './appStyles'


export default function Recipe({ visible, name, author, prepTime, cookTime, ingredients, instructions, image, handleRemove, handleUpdate, endShowModal}) {

    const [ showModalIsVisible, setShowModalIsVisible ] = useState(false)


    return (
        
        <Modal
            visible={visible}
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

                <TouchableOpacity onPress={() => handleUpdate(item)}>
                    <TxtUpdate >Update</TxtUpdate>
                </TouchableOpacity>

                <TouchableOpacity onPress={endShowModal}>
                <Text>Back To Directory!</Text>
                </TouchableOpacity>

                </ShowBtns>


            </SafeAreaView>
        </Modal>

    )
 }