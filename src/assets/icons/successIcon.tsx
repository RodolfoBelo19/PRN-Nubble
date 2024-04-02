import {Path, Svg} from 'react-native-svg';

interface SuccessIconProps {
  size?: number;
  color?: string;
}

export function SuccessIcon({size, color}: SuccessIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M10.5 0.5H3.5C1.84315 0.5 0.5 1.84315 0.5 3.5V10.5C0.5 12.1569 1.84315 13.5 3.5 13.5H10.5C12.1569 13.5 13.5 12.1569 13.5 10.5V3.5C13.5 1.84315 12.1569 0.5 10.5 0.5Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.91711 4.75L5.91711 9.75L3.91711 8.25"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
