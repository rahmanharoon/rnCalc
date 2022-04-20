import React from 'react';
import MainScreen from './src/pages';
import {StatusBar, SafeAreaView} from 'react-native';

const App = () => (
  <SafeAreaView>
    <StatusBar barStyle={'dark-content'} />
    <MainScreen />
  </SafeAreaView>
);

export default App;
