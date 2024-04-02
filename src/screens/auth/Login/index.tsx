import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {Icon} from '../../../components/Icon';
import {Screen} from '../../../components/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function Login({navigation}: ScreenProps) {
  function handleSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Screen isScrollable>
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
        label="Senha"
        secureTextEntry
        placeholder="Digite sua senha"
      />
      <Text boxProps={{mb: 'xl'}} fonts="black" color="primary">
        Esqueceu a senha?
      </Text>
      <Button mb="m" title="Entrar" />
      <Button onPress={handleSignUp} title="Registrar-se" preset="outline" />
    </Screen>
  );
}
