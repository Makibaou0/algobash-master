import {View, Text, LogBox} from 'react-native';
import React from 'react';
import Index from './src/screens';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  LogBox.ignoreLogs([
    'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
  ]);
  return (
    <NativeBaseProvider>
      <Index />
    </NativeBaseProvider>
  );
};

export default App;
