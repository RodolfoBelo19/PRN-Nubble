import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
