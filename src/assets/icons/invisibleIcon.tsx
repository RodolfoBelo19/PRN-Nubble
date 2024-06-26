import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon';

export function InvisibleIcon({size, color}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M3.62914 3.6244C4.62188 2.9793 5.7722 2.5 6.99997 2.5C9.78997 2.5 12.18 4.97503 13.23 6.2463C13.3958 6.45302 13.4876 6.72159 13.4876 7.00006C13.4876 7.27853 13.3958 7.5471 13.23 7.75382C12.6512 8.45457 11.6652 9.52108 10.4296 10.3372M8.49997 11.2697C8.01759 11.4156 7.51561 11.5001 6.99997 11.5001C4.20997 11.5001 1.81997 9.02509 0.769968 7.75382C0.604128 7.5471 0.512329 7.27853 0.512329 7.00006C0.512329 6.72159 0.604128 6.45302 0.769968 6.2463C1.10264 5.84352 1.56982 5.31991 2.14162 4.79247"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41424 8.41421C9.19529 7.63316 9.19529 6.36683 8.41424 5.58578C7.63319 4.80474 6.36687 4.80474 5.58582 5.58578"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5 13.5L0.5 0.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
