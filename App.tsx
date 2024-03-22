import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView>
      <Text preset="headingLarge" fonts="black">
        lorem
      </Text>
      <View style={{paddingHorizontal: 20}}>
        <Button title="Click me" />
      </View>
    </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
