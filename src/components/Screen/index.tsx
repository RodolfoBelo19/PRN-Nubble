import {Box} from '../Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  isScrollable?: boolean;
}

export function Screen({children, canGoBack, isScrollable}: ScreenProps) {
  const {paddingTop, paddingBottom} = useAppSafeArea();

  const Container = isScrollable ? ScrollViewContainer : ViewContainer;
  const {colors} = useAppTheme();

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
            <Box mb="m" flexDirection="row" alignItems="center">
              <Icon name="arrowLeft" color="primary" size={25} />
              <Text preset="paragraphMedium" ml="s" fonts="bold">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
