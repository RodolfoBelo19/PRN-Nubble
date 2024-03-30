import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon';

export function VisibleIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M7 3.625C2.81271 3.625 1.05469 7.39062 1.05469 7.46875C1.05469 7.54688 2.81271 11.3125 7 11.3125C11.1873 11.3125 12.9453 7.54688 12.9453 7.46875C12.9453 7.39062 11.1873 3.625 7 3.625Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.16895 5.8125L0.610352 4.25391"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.13483 3.89834L4.49951 1.84302"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.8311 5.8125L13.3896 4.25391"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.86511 3.89834L9.50043 1.84302"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.6121 9.16321C7.54775 9.37747 8.47994 8.79266 8.69419 7.85701C8.90845 6.92136 8.32365 5.98917 7.388 5.77491C6.45234 5.56065 5.52016 6.14546 5.3059 7.08111C5.09164 8.01676 5.67644 8.94895 6.6121 9.16321Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
