import React from "react";

export const StarIcon: React.FC = () => {
  return (
    <svg
      width="102"
      height="100"
      viewBox="0 0 102 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_669_553)">
        <path
          d="M38.1742 7.02256C44.0503 -2.34082 57.6939 -2.34082 63.57 7.02256C66.6342 11.9053 72.2267 14.5985 77.9547 13.9499C88.9389 12.706 97.4456 23.373 93.7887 33.805C91.8817 39.2451 93.2629 45.2967 97.3414 49.3706C105.162 57.1829 102.126 70.4844 91.6903 74.1296C86.2481 76.0304 82.378 80.8835 81.7358 86.6122C80.5043 97.5978 68.2118 103.518 58.855 97.631C53.9757 94.5613 47.7685 94.5613 42.8892 97.631C33.5324 103.518 21.2399 97.5978 20.0084 86.6122C19.3662 80.8835 15.4961 76.0304 10.0539 74.1296C-0.382278 70.4844 -3.41828 57.1829 4.4028 49.3706C8.48129 45.2967 9.86254 39.2451 7.95554 33.805C4.2986 23.373 12.8053 12.706 23.7895 13.9499C29.5175 14.5985 35.11 11.9053 38.1742 7.02256Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_669_553"
          x="0"
          y="0"
          width="101.744"
          height="101.95"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_669_553"
          />
        </filter>
      </defs>
    </svg>
  );
};
