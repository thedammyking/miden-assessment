import React, { SVGAttributes } from 'react';
import clsx from 'clsx';

const strokeWidth = 3;
const viewBoxSize = 24;
const coordinate = viewBoxSize / 2;
const radius = viewBoxSize / 2 - strokeWidth / 2;
const outline = Math.PI * radius * 2;
const outlineHalf = outline / 2;

const Spinner: React.FC<SVGAttributes<any>> = ({
  className,
  height = viewBoxSize,
  width = viewBoxSize,
  viewBox = `0 0 ${viewBoxSize} ${viewBoxSize}`,
  ...props
}) => {
  return (
    <svg
      className={clsx(className, 'spinner')}
      height={height}
      width={width}
      viewBox={viewBox}
      {...props}
    >
      <circle opacity='.25' cx={coordinate} cy={coordinate} r={radius} />
      <circle cx={coordinate} cy={coordinate} r={radius} strokeDasharray={outlineHalf} />
    </svg>
  );
};

export default Spinner;
