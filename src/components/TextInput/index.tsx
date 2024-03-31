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

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: React.ReactNode;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  rightComponent,
  boxProps,
  ...rest
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $BoxStyle: BoxProps = {
    flexDirection: 'row',
    borderRadius: 'm',
    padding: 'm',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderWidth: errorMessage ? 2 : 1,
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text marginBottom="s">{label}</Text>
        <Box {...$BoxStyle}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$TextInputStyle}
            {...rest}
          />
          {rightComponent && (
            <Box justifyContent="center" ml="s">
              {rightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" fonts="bold" color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $TextInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamilies.regular,
  padding: 0,
  ...$fontSizes.paragraphMedium,
};
