import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/auth/Login';
import {SignUp} from '../screens/auth/SignUp';
import {Success} from '../screens/auth/Success';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Success: undefined;
  // TODO: Success: icon, title, description
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
