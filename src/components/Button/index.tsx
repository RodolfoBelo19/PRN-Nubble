import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}
export function Button({
  title,
  loading,
  ...TouchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="m"
      height={56}
      alignItems="center"
      justifyContent="center"
      borderRadius=''
      {...TouchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text fonts="bold" style={{color: 'white'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
