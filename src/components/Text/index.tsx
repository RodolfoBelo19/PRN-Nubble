import {createText} from '@shopify/restyle';
import {TextStyle} from 'react-native';
import {Theme} from '../../theme';

const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  preset?: TextVariants;
  fonts?: FontVariants;
}

export function Text({children, style, ...rest}: TextProps) {
  const {preset = 'paragraphMedium', fonts} = rest;
  const styleVariant = $fontSizes[preset];
  const fontFamily = fonts ? $fontFamilies[fonts] : undefined;

  return (
    <SRText
      color="backgroundContrast"
      style={[styleVariant, {fontFamily: fontFamily}, style]}
      {...rest}>
      {children}
    </SRText>
  );
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 24, lineHeight: 28.8},
  headingSmall: {fontSize: 20, lineHeight: 24},

  paragraphLarge: {fontSize: 16, lineHeight: 19.2},
  paragraphMedium: {fontSize: 14, lineHeight: 16.8},
  paragraphSmall: {fontSize: 12, lineHeight: 14.4},

  paragraphCaption: {fontSize: 10, lineHeight: 12},
  paragraphCaptionSmall: {fontSize: 8, lineHeight: 9.6},
};

type FontVariants =
  | 'black'
  | 'blackItalic'
  | 'bold'
  | 'boldItalic'
  | 'italic'
  | 'light'
  | 'lightItalic'
  | 'medium'
  | 'mediumItalic'
  | 'regular';

export const $fontFamilies = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
