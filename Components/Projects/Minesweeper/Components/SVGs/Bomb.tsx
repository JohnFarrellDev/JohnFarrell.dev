import { SVGProps } from 'react';

export const Bomb = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" data-testid="bomb" {...props}>
      <g id="color">
        <rect
          x="42.9998"
          y="15.7214"
          width="10.9999"
          height="15.5562"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.4114 41.1773)"
          fill="#9B9B9A"
        />
        <polygon fill="#3F3F3F" points="46.0339,22.2119 50.512,17.7338 57.8891,25.1109 52.5221,30.4779" />
        <circle cx="31.769" cy="40.4038" r="23" fill="#9B9B9A" />
        <path
          fill="#3F3F3F"
          d="M19.6333,55.7374c12.7025,0,23-10.2975,23-23c0-5.5327-1.9548-10.6081-5.2097-14.5762 c9.8615,2.5932,17.1357,11.5674,17.1357,22.2428c0,12.7025-10.2975,23-23,23c-7.1697,0-13.5723-3.2816-17.7903-8.4237 C15.6416,55.4725,17.6063,55.7374,19.6333,55.7374z"
        />
      </g>
      <g id="hair" />
      <g id="skin" />
      <g id="skin-shadow" />
      <g id="line">
        <polyline
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          points="41.4601,19.5393 46.8889,14.1105 57.8887,25.1103 52.5218,30.4773"
        />
        <circle
          cx="31.769"
          cy="40.4038"
          r="23"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="55.7574"
          x2="64.2426"
          y1="16.2426"
          y2="7.7574"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
