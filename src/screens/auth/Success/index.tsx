import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '../../../components/Button';
import {Icon} from '../../../components/Icon';
import {Text} from '../../../components/Text';
import {RootStackParamList} from '../../../routes';
import {Screen} from '../../../components/Screen';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>;

export function Success({navigation}: ScreenProps) {
  function handleBackToLogin() {
    // TODO: navigate to the login screen
    navigation.navigate('Login');
  }

  return (
    <Screen>
      <Icon name="successIcon" size={50} color='primary' />
      <Text my='m' preset="headingLarge">Success</Text>
      <Text preset="paragraphLarge">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Text>
      <Button mt='l' onPress={handleBackToLogin} title="Voltar ao início" />
    </Screen>
  );
}
