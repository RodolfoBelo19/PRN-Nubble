import {InvisibleIcon} from '../../assets/icons/invisibleIcon';
import {VisibleIcon} from '../../assets/icons/visibleIcon';
import {ThemeColor} from '../../theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {arrowLeftIcon} from '../../assets/icons/arrowLeftIcon';
import {Pressable} from 'react-native';
import {SuccessIcon} from '../../assets/icons/successIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

interface IconProps {
  name: keyof typeof IconRegister;
  color?: ThemeColor;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 20,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const IconComponent = IconRegister[name];

  if (onPress) {
    return (
      <Pressable hitSlop={12} onPress={onPress}>
        <IconComponent size={size} color={colors[color]} />
      </Pressable>
    );
  }

  return <IconComponent size={size} color={colors[color]} />;
}

const IconRegister = {
  eyeOn: VisibleIcon,
  eyeOff: InvisibleIcon,
  arrowLeftIcon: arrowLeftIcon,
  successIcon: SuccessIcon,
};
