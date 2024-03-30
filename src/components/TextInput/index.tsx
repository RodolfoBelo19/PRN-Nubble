import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {$fontFamilies, $fontSizes, Text} from '../Text';
import {Box, BoxProps} from '../Box';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useRef} from 'react';
import {Icon} from '../Icon';

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
}

export function TextInput({label, errorMessage, ...rest}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $BoxStyle: BoxProps = {
    borderRadius: 'm',
    padding: 'm',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderWidth: errorMessage ? 2 : 1,
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text marginBottom="s">{label}</Text>
        <Box {...$BoxStyle}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$TextInputStyle}
            {...rest}
          />
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" fonts="bold" color="error">
            {errorMessage}
          </Text>
        )}
      </Box>
    </Pressable>
  );
}

const $TextInputStyle: TextStyle = {
  fontFamily: $fontFamilies.regular,
  padding: 0,
  ...$fontSizes.paragraphMedium,
};
