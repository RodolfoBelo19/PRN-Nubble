import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Icon} from './src/components/Icon';
import {Button} from './src/components/Button';
import {TextInput} from './src/components/TextInput';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="m" preset="headingLarge">
            Olá!
          </Text>
          <Text marginBottom="xl">
            Digite seu e-mail e senha para acessar o app.
          </Text>
          <TextInput
            boxProps={{mb: 'm'}}
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
          <TextInput
            boxProps={{mb: 'm'}}
            rightComponent={<Icon name="eyeOff" color="gray2" />}
            errorMessage="Senha incorreta"
            label="Senha"
            secureTextEntry
            placeholder="Digite sua senha"
          />
          <Text boxProps={{mb: 'xl'}} fonts="black" color="primary">
            Esqueceu a senha?
          </Text>
          <Button mb="m" title="Entrar" />
          <Button title="Registrar-se" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
