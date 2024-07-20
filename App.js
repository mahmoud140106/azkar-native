import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/main';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Azkar from './src/azkar';

const Stack = createStackNavigator();

export default function App() {

  return (
      <>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold',fontSize:25 },
          }}
          >
            <Stack.Screen name='home' component={Main} 
               options={{
                title: 'أذكار اليوم والليلة',
               }}
            />
            <Stack.Screen name='details' component={Azkar} />
          </Stack.Navigator>
        </NavigationContainer>
      </>

  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});
