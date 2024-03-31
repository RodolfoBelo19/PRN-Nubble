import {InvisibleIcon} from '../../assets/icons/invisibleIcon';
import {VisibleIcon} from '../../assets/icons/visibleIcon';
import {ThemeColor} from '../../theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface IconProps {
  name: keyof typeof IconRegister;
  color?: ThemeColor;
  size?: number;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 20,
}: IconProps) {
  const {colors} = useAppTheme();
  const IconComponent = IconRegister[name];

  return <IconComponent size={size} color={colors[color]} />;
}

const IconRegister = {
  eyeOn: VisibleIcon,
  eyeOff: InvisibleIcon,
};
