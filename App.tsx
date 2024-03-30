import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Icon} from './src/components/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="m" preset="headingLarge">
            Olá!
          </Text>
          <Text marginBottom="m">
            Digite seu e-mail e senha para acessar o app.
          </Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
