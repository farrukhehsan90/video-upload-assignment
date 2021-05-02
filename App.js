/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 import { StatusBar } from 'react-native';
 import Navigation from './src/navigation';
 import { store, persistor } from './src/store';
 import { PersistGate } from "redux-persist/integration/react";
 import { Provider } from 'react-redux';
 
 import { NavigationContainer } from '@react-navigation/native';
 
 const App = () => {
   return (
     <NavigationContainer>
       <Provider store={store}>
         <PersistGate persistor={persistor}>
           <StatusBar barStyle="dark-content" />
             <Navigation />
         </PersistGate>
       </Provider>
     </NavigationContainer>
   );
 };
 
 export default App;