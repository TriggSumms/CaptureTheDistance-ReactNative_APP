import React, { useContext } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
//import { Text, Input, Button } from 'react-native-elements';
//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
    useFonts,
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
    Cinzel_700Bold
} from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';
import { Icon } from 'react-native-elements'




const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    //state is what needs to be retained/changed/gained...email/password

    let [fontsLoaded, error] = useFonts({
        Cinzel_700Bold
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <>
            {/* <Spacer> <Text>Sign up Babi</Text></Spacer>  <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize= "none" autoCorrect={false} /><Spacer /> <Input label="Password" /><Spacer /><Spacer><Button title="Sign Up" /></Spacer>  */}
            {/* TESTING: {state.errorMessage ? <Text>{state.errorMessage}</Text> : null} */}


            <View style={styles.container}>
                <NavigationEvents onWillBlur={clearErrorMessage} />

                <Text style={styles.logoHeader} >
                    <Image style={styles.tinyLogo} source={{
                        uri: 'https://img.icons8.com/cotton/64/000000/mountain.png', }} />
     Capture The Distance
        </Text>

                <AuthForm
                    // headerText="Sign Up for...Distance Capturer"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign Up"
                    //anytime it gets called
                    onSubmit={signup}
                />
                <NavLink
                    routeName="Signin"
                    text="Already have an account? Sign in instead!"
                />
            </View>

        </>
    );
};

//Hides the header ...v39 EXPO
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
        //(v37) header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
        borderColor: 'green',
        borderWidth: 2,

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logoHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Cinzel_700Bold',
        fontSize: 30
    },

});

export default SignupScreen;
