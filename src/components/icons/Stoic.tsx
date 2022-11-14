import React from "react";

const StoicIcon = (props: any) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0" transform="translate(-0.0166666) scale(0.01)" />
        </pattern>
        <image
          id="image0"
          width="340"
          height="100"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default StoicIcon;
