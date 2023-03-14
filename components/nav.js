import { Logo, NavBar, NavAddBtn, NavText, WhiskItText } from './appStyles'
import { TouchableOpacity, Text, SafeAreaView, } from 'react-native'

export default function Nav({ startModal }) {

    return (
        <SafeAreaView>
            <NavBar>
                <WhiskItText> WhiskIt! </WhiskItText>
                <Logo source={require('../assets/Logo2.png')} />
                <NavAddBtn onPress={startModal}>
                    <NavText> Add New Recipe </NavText>
                </NavAddBtn>
            </NavBar>
        </SafeAreaView>
    )
}