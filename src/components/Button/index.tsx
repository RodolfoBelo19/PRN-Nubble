import {TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

type ButtonProps = {
  title: string;
};
export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: colors.gray1,
        borderRadius: 16,
        alignItems: 'center',
      }}>
      <Text fonts='bold' style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}
