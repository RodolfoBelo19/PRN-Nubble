import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {Icon} from '../../../components/Icon';
import {Screen} from '../../../components/Screen';

export function Login() {
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
    </Screen>
  );
}
