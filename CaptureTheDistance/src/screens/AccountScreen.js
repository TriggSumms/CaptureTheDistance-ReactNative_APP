import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    //SafeAreaView is a react native element that makes sure your content doesnt render inside/overlay the status bar of youer device 
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <View >
<Text style={{ fontSize: 25 }}>Account for {}...</Text>
     
      <Spacer>
    
        <Button
          icon={
            <Icon
             title='icon'
              name="arrow-right"
              type="outline"
              size={15}
              color="white"
              backgroundColor= "#FFBB34"
              borderColor= "#555555"
              borderWidth= {50}
              borderRadius= {50}
               onPress={signout}
            />
          }
          iconRight
          title="Sign Out"
        />

      </Spacer>
</View>
    </SafeAreaView>
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
    
  }
});

export default AccountScreen;
