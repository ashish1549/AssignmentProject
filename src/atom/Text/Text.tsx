import React from "react";
import { Text as LibText, TextProps as LibTextProps } from "react-native";

export type TextSizeProp = "small" | "normal" | "large";
export type TextAccentProp = "normal" | "hint" | "error";

export type TextProps = LibTextProps & {
  size?: TextSizeProp;
  accent?: TextAccentProp;
};

const Text: React.FC<TextProps> = ({ ...rest }) => {
  return <LibText {...rest} />;
};

export default Text;
