import * as React from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

function PhoneIcon(props: SvgProps) {
  return (
    <Svg width={15} height={16} fill="none" viewBox="0 0 15 16" {...props}>
      <Path
        fillRule="evenodd"
        d="M3.303 6.366L5.61 4.013c.281-.287.281-.746 0-.975L2.123.513c-.282-.172-.62-.23-.9 0C-4.232 5.39 10.05 19.965 14.83 14.456a.789.789 0 000-.975l-2.474-3.558c-.225-.287-.675-.23-.956 0l-2.25 2.353c-2.361-1.32-4.554-3.558-5.848-5.91z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default PhoneIcon;
