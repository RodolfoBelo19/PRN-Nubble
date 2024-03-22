import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Box} from './src/components/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" fonts="black">
            lorem
          </Text>
          <Button marginBottom="s" title="Click me" />
          <Button loading title="Click me" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
