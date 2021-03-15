import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { Button, Icon,  } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';




const AccountScreen = () => {
  const { signout } = useContext(AuthContext);



  //SafeAreaView is a react native element that makes sure your content doesnt render inside/overlay the status bar of youer device 
  return (
    <>
    
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <View >
        <Text style={{ fontSize: 25 }}>Account for { } ....

      <Image style={styles.tinyLogo} source={{
                        uri: 'https://img.icons8.com/ios-filled/50/000000/user-male--v2.png'}} />
        </Text>  
        <Spacer>
          <Button
            iconRight
            title="Sign Out"
            icon={
              <Icon
                title='icon'
                name="arrow-right"
                type="outline"
                size={15}
                color="white"
                onPress={signout}
              />
            }
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['blue', 'green', 'yellow'],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
          />

        </Spacer>
      </View>
    </SafeAreaView>
    </>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100

  },
  tinyLogo: {
    width: 50,
    height: 50,
},
});

export default AccountScreen;
