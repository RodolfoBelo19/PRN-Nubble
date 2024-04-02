import {Path, Svg} from 'react-native-svg';

interface arrowLeftIconProps {
  size?: number;
  color?: string;
}

export function arrowLeftIcon({size, color}: arrowLeftIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M13.5001 7.00845L0.500122 6.99133"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.0047 3.49595L0.500093 6.99134L3.99548 10.4959"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
