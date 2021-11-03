import React from "react";
import { Svg, Path } from "react-native-svg";

const ListViewIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={16}
      width={16}
      fill="#B9C1D9"
      viewBox="0 0 20 20"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default ListViewIcon;