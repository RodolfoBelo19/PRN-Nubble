import {Box, TouchableOpacityBox} from '../Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  isScrollable?: boolean;
}

export function Screen({children, canGoBack, isScrollable}: ScreenProps) {
  const {paddingTop, paddingBottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();

  const Container = isScrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          style={{
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
          }}
          paddingHorizontal="l">
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="m"
              flexDirection="row"
              alignItems="center">
              <Icon name="arrowLeftIcon" color="primary" size={25} />
              <Text preset="paragraphMedium" ml="s" fonts="bold">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
