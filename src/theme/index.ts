import {createTheme} from '@shopify/restyle';

const palette = {
  greenPrimary: '#6EE7B7',
  greenPrimaryLight: '#F0FFF4',
  greenSecondary: '#93C5FD',
  greenSecondaryLight: '#EFF6FF',
  greenSuccess: '#34D399',
  greenSuccessLight: '#D1FAE5',
  redError: '#F87171',
  redErrorLight: '#FEF2F2',

  grayBlack: '#1F2937',
  gray1: '#6B7280',
  gray2: '#9CA3AF',
  gray3: '#D1D5DB',
  gray4: '#E5E7EB',
  gray5: '#F3F4F6',
  grayWhite: '#F9FAFB',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.greenPrimary,

    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,
  },
  spacing: {},
});

export type Theme = typeof theme;
