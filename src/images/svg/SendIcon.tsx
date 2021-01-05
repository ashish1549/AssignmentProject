import * as React from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

function SendIcon(props: SvgProps) {
  return (
    <Svg width={14} height={14} viewBox="0 0 103.536 103.536" {...props}>
      <Path
        d="M.65 91.928a7.311 7.311 0 009.671 3.65l88.917-40.195a7.308 7.308 0 00-.392-13.482L9.929 7.794C6.17 6.352 1.933 8.23.489 12.001a7.306 7.306 0 004.207 9.44l72.569 27.834-72.966 32.98A7.312 7.312 0 00.65 91.928z"
        fill="#fff"
        data-original="#000000"
      />
    </Svg>
  );
}

export default SendIcon;
