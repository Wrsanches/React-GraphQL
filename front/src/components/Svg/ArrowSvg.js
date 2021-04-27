import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg fill="none" height={24} viewBox="0 0 24 24" width={24} {...props}>
      <path d="M20 12H4m0 0l6-6m-6 6l6 6" stroke="#000" strokeWidth={1.5} />
    </svg>
  );
}

export default SvgComponent;
