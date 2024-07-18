import React from "react";

export interface SvgIconProps {
  id: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ id }) => (
  <svg role="img">
    <use xlinkHref={`/src/assets/images/icons/sprite.svg#${id}`} />
  </svg>
);

export default SvgIcon;
