import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ICSort = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12H4V10H0V12ZM0 0V2H12V0H0ZM0 7H8V5H0V7Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default ICSort;
