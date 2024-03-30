import {Text} from '../Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box';
import {buttonPresets} from './buttonsPresets';
import {ActivityIndicator} from '../ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}
export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...TouchableOpacityBoxProps
}: ButtonProps) {
  const selectedButtonPreset = buttonPresets[preset];
  const buttonPreset = disabled
    ? selectedButtonPreset.disabled
    : selectedButtonPreset.default;

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="m"
      height={56}
      alignItems="center"
      justifyContent="center"
      borderRadius="l"
      {...TouchableOpacityBoxProps}
      {...buttonPreset.container}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text fonts="bold" color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
