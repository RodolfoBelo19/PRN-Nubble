import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from '../useAppTheme';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    top,
    paddingTop: Math.max(top, spacing.m),
    paddingBottom: Math.max(bottom, spacing.m),
  };
}
