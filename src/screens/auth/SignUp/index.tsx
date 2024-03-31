import {Button} from '../../../components/Button';
import {PasswordInput} from '../../../components/PasswordInput/indext';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';

export function SignUp() {
  const handleSignUp = () => {
    // todo: implement sign up
    console.log('Sign up');
  };

  return (
    <Screen canGoBack isScrollable>
      <Text marginBottom="m" fonts="black" preset="headingLarge">
        Criar uma conta
      </Text>
      <Text marginBottom="xl">
        Digite seu e-mail e senha para criar sua conta.
      </Text>
      <TextInput
        boxProps={{mb: 'm'}}
        label="Seu username"
        placeholder="@"
        errorMessage="Digite um username válido"
      />
      <TextInput
        boxProps={{mb: 'm'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        errorMessage="Digite um nome válido"
      />
      <TextInput
        boxProps={{mb: 'm'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
        errorMessage="Digite um e-mail válido"
      />
      <PasswordInput
        boxProps={{mb: 'xl'}}
        label="Senha"
        placeholder="Digite sua senha"
      />
      <Button onPress={handleSignUp} mb="m" title="Criar uma conta" />
    </Screen>
  );
}
