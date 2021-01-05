import * as React from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

function CloseIcon(props: SvgProps) {
  return (
    <Svg width={17} height={16} fill="none" viewBox="0 0 17 16" {...props}>
      <Path stroke="#fff" strokeLinecap="round" strokeWidth={3} d="M15 2L2.5 14.5M2 2l12.5 12.5" />
    </Svg>
  );
}

export default CloseIcon;
