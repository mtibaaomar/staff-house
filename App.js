import React from 'react';
 import {createStackNavigator} from "@react-navigation/stack";
 import { NavigationContainer } from '@react-navigation/native';

 import {Beer, Wine, Tobacco, Drinks, Quantity, Credit} from './navigation/Screens'

 const Stack = createStackNavigator();

 const App = () => {
   return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown:false
            }}
            initialRouteName={"Beer"}
        >
          <Stack.Screen name="Beer" component={Beer}/>
          <Stack.Screen name="Wine" component={Wine}/>
          <Stack.Screen name="Tobacco" component={Tobacco}/>
          <Stack.Screen name="Drinks" component={Drinks}/>
          <Stack.Screen name="Quantity" component={Quantity}/>
          <Stack.Screen name="Credit" component={Credit}/>
        </Stack.Navigator>
      </NavigationContainer>
   )
 }


 export default App