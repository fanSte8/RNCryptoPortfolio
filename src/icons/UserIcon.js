import React from "react";
import { Svg, Path } from "react-native-svg";

const UserIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 20 20"
      fill="#B9C1D9"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default UserIcon;