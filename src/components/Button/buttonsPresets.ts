import {ButtonPreset} from '.';
import {ThemeColor} from '../../theme';
import {TouchableOpacityBoxProps} from '../Box';

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColor;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'buttonPrimary',
      },
      content: 'background',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'buttonPrimary',
      },
      content: 'buttonPrimary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
