'use client';

import { useState } from 'react';
import { CareerContent } from './CareerContent';

export function CareerTimelineSVG() {
  const [dialogIndex, setDialogIndex] = useState<null | number>(null);

  return (
    <>
      <CareerContent
        dialogIndex={dialogIndex}
        setDialogIndex={setDialogIndex}
        closeDialog={() => setDialogIndex(null)}
      />

      <div className="hidden md:block">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1611.0140570568765 1210.9616113962911"
          width="100%"
          height="auto"
          className=""
        >
          <rect x="0" y="0" width="1611.0140570568765" height="1210.9616113962911" fill="#ffffff" fillOpacity="0" />
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(0)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(0);
              }
            }}
          >
            <g
              transform="translate(108.15931568322412 10) rotate(0 156.57017036687694 165.7096422789491)"
              strokeLinecap="round"
            >
              <rect
                x="-1.5241774329626558"
                y="-2.505055936131217"
                width="316.8641774329626"
                height="334.8650559361312"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M-1.15 -0.41 C122.52 2.66, 241.21 3, 311 -2.39 M-0.53 0.26 C67.19 -3.73, 133.21 -2.79, 313.77 -0.74 M315.34 1.83 C306.77 88.9, 307.09 173.34, 310.9 329.74 M312.72 0.32 C313.04 72.21, 314.04 141.9, 313.89 332.36 M313.29 332.3 C242.19 331.79, 167.9 333.82, 1.46 329.07 M311.85 331.44 C243.92 328.99, 177.85 330.26, -0.84 331.6 M0.7 329.54 C2.42 253.72, 3.82 172.52, -0.97 -1.62 M0.67 331.22 C-2.05 204.83, -2.58 77.15, 1.03 -0.66"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(116.23781734892918 18.209642278947285) rotate(0 148.49166870117188 157.5)">
              <text
                x="148.49166870117188"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2016)
              </text>
              <text
                x="148.49166870117188"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="148.49166870117188"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Completed a BSc in
              </text>
              <text
                x="148.49166870117188"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Biomedical Science &#x1f9ea;
              </text>
              <text
                x="148.49166870117188"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="148.49166870117188"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Decided the medical
              </text>
              <text
                x="148.49166870117188"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                industry is not my
              </text>
              <text
                x="148.49166870117188"
                y="269.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                interest and changed
              </text>
              <text
                x="148.49166870117188"
                y="304.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                my focus{' '}
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(1)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(1);
              }
            }}
          >
            <g
              transform="translate(541.638595899133 41.04306821440696) rotate(0 198.33782156306552 124.72964473569846)"
              strokeLinecap="round"
            >
              <rect
                x="-0.5000654962894331"
                y="0"
                width="397.49707903694156"
                height="250.49239417858755"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M0 0 C129.93 0.91, 259.48 0.75, 396.68 0 M0 0 C142.35 1.33, 284.49 1.34, 396.68 0 M396.68 0 C396.98 89.94, 397.21 184.23, 396.68 249.46 M396.68 0 C394.5 91.34, 394.38 182.71, 396.68 249.46 M396.68 249.46 C310.83 250.64, 224.59 251.02, 0 249.46 M396.68 249.46 C286.8 250.3, 176.61 250.87, 0 249.46 M0 249.46 C-1.14 172.12, 0.03 98.06, 0 0 M0 249.46 C1.4 194.51, 1.69 140.45, 0 0"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(575.5430831116125 78.2727129501036) rotate(0 164.43333435058594 87.5)">
              <text
                x="164.43333435058594"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Started teaching myself
              </text>
              <text
                x="164.43333435058594"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                how to code &#x1f468;&#x1f3fb;&#x200d;&#x1f4bb;
              </text>
              <text
                x="164.43333435058594"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="164.43333435058594"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Pursue a career in{' '}
              </text>
              <text
                x="164.43333435058594"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                software engineering
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(2)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(2);
              }
            }}
          >
            <g
              transform="translate(1096.1031031036518 57.794103796470154) rotate(0 252.45547697661232 92.97266592220876)"
              strokeLinecap="round"
            >
              <rect
                x="-2.7323193373075663"
                y="-2.7384853804747133"
                width="511.30433766429496"
                height="191.7084853804747"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M1.07 0.71 C193.19 -4.06, 386.56 -3.83, 506.2 1.08 M-0.26 -0.66 C110.75 2.07, 222.71 3.06, 504.67 0.19 M502.08 2.2 C509.79 35.15, 510.41 77.16, 505.12 187.18 M505.71 1.03 C502.1 58.09, 502.89 118.79, 503.09 185.98 M505.32 185 C390.55 188.06, 275.25 187.97, 0.41 184.84 M505.38 185.66 C335.71 190.07, 167.77 188.81, 0.39 185.83 M-2.29 188.97 C-2.35 133.31, -1.04 80.63, 0.06 1.96 M-1.31 186.62 C-3.72 143.34, -3.27 104.56, 1.61 0.31"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(1115.2585770285064 80.7667697186771) rotate(0 233.3000030517578 70)">
              <text
                x="233.3000030517578"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2017)
              </text>
              <text
                x="233.3000030517578"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="233.3000030517578"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Enrolled in a MSc in Computer
              </text>
              <text
                x="233.3000030517578"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Science at the University of Kent.
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(3)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(3);
              }
            }}
          >
            <g
              transform="translate(1121.1168699992088 398.37778121932206) rotate(0 212.366668701172 134.0574179326577)"
              strokeLinecap="round"
            >
              <rect
                x="-2.06"
                y="-1.73"
                width="428.06"
                height="271.46000000000004"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M-0.48 1.69 C106.67 2.48, 211.89 2.73, 424.04 -1.73 M0.42 -0.32 C101.52 -2.19, 203.13 -1.42, 423.99 0.58 M425.62 0.16 C422.69 99.57, 420.74 195.45, 426 269.73 M424.2 -1.43 C421.29 57.11, 420.26 117.7, 425.13 267.19 M423.39 268.66 C290.5 267.36, 161.12 268.45, 1.24 267.36 M423.94 268.63 C322.42 269.57, 220.53 269.16, -0.6 268.91 M-2.06 268.17 C2.9 198.07, 2.82 134.62, -2.06 1.06 M-0.04 269.38 C4.33 213.69, 3.41 160.01, -0.64 -1.07"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(1126.9752074015526 409.93519915197976) rotate(0 206.50833129882824 122.5)">
              <text
                x="206.50833129882812"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2018)
              </text>
              <text
                x="206.50833129882812"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="206.50833129882812"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Graduated with my MSc in
              </text>
              <text
                x="206.50833129882812"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Computer Science and started
              </text>
              <text
                x="206.50833129882812"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                my first professional role as a
              </text>
              <text
                x="206.50833129882812"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                software engineer.
              </text>
              <text
                x="206.50833129882812"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                {' '}
                &#x1f468;&#x200d;&#x1f4bc;
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(4)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(4);
              }
            }}
          >
            <g
              transform="translate(622.1890893952168 354.39196500427715) rotate(0 177.39260948916296 180)"
              strokeLinecap="round"
            >
              <rect
                x="-1.6746469578658807"
                y="-1.3082030856996452"
                width="357.59676866319484"
                height="362.28516678974364"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M0 0 C141.06 -0.94, 283.58 -1.47, 354.79 0 M0 0 C127.89 -1.48, 254.15 -1.99, 354.79 0 M354.79 0 C356.46 109.8, 356.13 221.08, 354.79 360 M354.79 0 C352.59 118.66, 353.56 238.28, 354.79 360 M354.79 360 C253.77 361.59, 151.7 360.98, 0 360 M354.79 360 C232.47 361.27, 110.54 360.46, 0 360 M0 360 C0.19 257.34, 0.11 152.6, 0 0 M0 360 C-2.07 256.08, -2.39 151.47, 0 0"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(646.1566958326221 359.39196500427715) rotate(0 153.4250030517578 175)">
              <text
                x="153.4250030517578"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2019)
              </text>
              <text
                x="153.4250030517578"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="153.4250030517578"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Joined a smaller tech
              </text>
              <text
                x="153.4250030517578"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                consultancy, CACI.
              </text>
              <text
                x="153.4250030517578"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="153.4250030517578"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Gained hands-on
              </text>
              <text
                x="153.4250030517578"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                experience building full
              </text>
              <text
                x="153.4250030517578"
                y="269.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                stack web applications
              </text>
              <text
                x="153.4250030517578"
                y="304.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                on security-conscious
              </text>
              <text
                x="153.4250030517578"
                y="339.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                projects.
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(5)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(5);
              }
            }}
          >
            <g
              transform="translate(21.965520813387002 397.378532845094) rotate(0 203.3038977867575 191.78371578855877)"
              strokeLinecap="round"
            >
              <rect
                x="-1.7071743979847191"
                y="-2.3776761802916138"
                width="411.0534836926803"
                height="387.5776761802916"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M-0.83 0.41 C87.57 -3.78, 173.29 -2.31, 407.6 -1.16 M0.9 0.75 C105.99 1.76, 213.01 0.67, 405.7 -0.68 M405.88 0.56 C405.55 84.03, 407.3 163.66, 407.92 385.2 M406.67 0.37 C410.71 87.28, 409.57 175.77, 407.22 382.58 M404.59 383.61 C316.45 380.61, 231.22 382.59, -1.31 383.85 M406.9 382.8 C308.53 381.73, 210.64 381.34, -0.4 382.91 M1.17 383.21 C-2.31 237.15, -3.23 88.83, 1.8 -1.15 M0.02 384.15 C-0.26 281.38, 1.27 177.31, 0.4 -1.18"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(33.82775295073043 414.1622486336528) rotate(0 191.44166564941406 175)">
              <text
                x="191.44166564941406"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2021)
              </text>
              <text
                x="191.44166564941406"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="191.44166564941406"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Joined Made Tech, a small
              </text>
              <text
                x="191.44166564941406"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                to mid-sized tech
              </text>
              <text
                x="191.44166564941406"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                consultancy.
              </text>
              <text
                x="191.44166564941406"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="191.44166564941406"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Continued building full stack
              </text>
              <text
                x="191.44166564941406"
                y="269.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                applications while taking on
              </text>
              <text
                x="191.44166564941406"
                y="304.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                more ownership and
              </text>
              <text
                x="191.44166564941406"
                y="339.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                mentoring junior engineers.
              </text>
            </g>
          </g>
          <g strokeLinecap="round">
            <g transform="translate(433.299656416978 158.77254690778864) rotate(0 48.169469741077364 -6.000397494290155)">
              <path
                d="M0 0 C9.13 -0.67, 38.75 -2.02, 54.81 -4.02 C70.86 -6.02, 89.42 -10.67, 96.34 -12 M0 0 C9.13 -0.67, 38.75 -2.02, 54.81 -4.02 C70.86 -6.02, 89.42 -10.67, 96.34 -12"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(433.299656416978 158.77254690778864) rotate(0 48.169469741077364 -6.000397494290155)">
              <path
                d="M78.43 -0.75 C85.15 -4.98, 91.87 -9.2, 96.34 -12 M78.43 -0.75 C84.86 -4.79, 91.28 -8.83, 96.34 -12"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(433.299656416978 158.77254690778864) rotate(0 48.169469741077364 -6.000397494290155)">
              <path
                d="M75.39 -14.9 C83.25 -13.81, 91.12 -12.72, 96.34 -12 M75.39 -14.9 C82.91 -13.86, 90.42 -12.82, 96.34 -12"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(1330.4258589781775 254.45557872931022) rotate(0 10.761258696977848 66.31913866085415)">
              <path
                d="M-0.38 -0.04 C1.52 8.71, 8.76 30.91, 12.47 52.96 C16.19 75.01, 20.59 118.9, 21.9 132.26 M1.62 -1.11 C3.8 7.24, 11.35 28.64, 14.69 51.12 C18.02 73.59, 20.7 120.41, 21.63 133.75"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(1330.4258589781775 254.45557872931022) rotate(0 10.761258696977848 66.31913866085415)">
              <path
                d="M11.56 110.87 C15.48 118.19, 20.34 130.21, 21.63 133.75 M11.56 110.87 C14.36 118, 17.93 125.75, 21.63 133.75"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(1330.4258589781775 254.45557872931022) rotate(0 10.761258696977848 66.31913866085415)">
              <path
                d="M28.62 109.75 C25.94 117.45, 24.17 129.91, 21.63 133.75 M28.62 109.75 C25.83 117.42, 23.8 125.53, 21.63 133.75"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(950.314239025264 130.10628889618602) rotate(0 67.14331004285077 2.668555838354223)">
              <path
                d="M-0.37 0.36 C8.98 2.03, 33.42 11.9, 55.92 11.21 C78.42 10.52, 121.85 -1.32, 134.65 -3.79 M1.64 -0.5 C10.87 1.32, 33 10.27, 55.11 9.37 C77.23 8.47, 121.45 -3.38, 134.34 -5.91"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(950.314239025264 130.10628889618602) rotate(0 67.14331004285077 2.668555838354223)">
              <path
                d="M113.34 7.65 C119.79 4.3, 126.05 1.43, 134.34 -5.91 M113.34 7.65 C121.22 3.3, 128.18 -2.18, 134.34 -5.91"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(950.314239025264 130.10628889618602) rotate(0 67.14331004285077 2.668555838354223)">
              <path
                d="M109.54 -9.02 C117.23 -7.61, 124.58 -5.73, 134.34 -5.91 M109.54 -9.02 C118.55 -7.8, 126.78 -7.69, 134.34 -5.91"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(1112.9684407339475 491.3972003249255) rotate(0 -61.49867829162088 2.822717146424111)">
              <path
                d="M-0.02 0.08 C-7.78 -0.14, -25.76 -1.36, -46.22 -0.27 C-66.69 0.81, -109.67 5.5, -122.83 6.57 M-1.49 -0.93 C-9.45 -0.45, -27.01 0.11, -47.26 1.07 C-67.5 2.03, -109.93 4.36, -122.98 4.84"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(1112.9684407339475 491.3972003249255) rotate(0 -61.49867829162088 2.822717146424111)">
              <path
                d="M-99.91 -4.79 C-107.3 -1.89, -115.64 3.5, -122.98 4.84 M-99.91 -4.79 C-108.18 -0.59, -118.54 2.74, -122.98 4.84"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(1112.9684407339475 491.3972003249255) rotate(0 -61.49867829162088 2.822717146424111)">
              <path
                d="M-99.12 12.3 C-106.92 9.57, -115.52 9.32, -122.98 4.84 M-99.12 12.3 C-107.54 9.72, -118.21 6.28, -122.98 4.84"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(6)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(6);
              }
            }}
          >
            <g
              transform="translate(10 948.9016101588677) rotate(0 212.36666870117188 98.42267188331061)"
              strokeLinecap="round"
            >
              <rect
                x="-0.4120391992597191"
                y="-0.4610466716958511"
                width="427.0106222806777"
                height="198.22646010117896"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M0 0 C160.48 0.63, 319.21 -0.27, 424.73 0 M0 0 C102.66 -0.98, 204.58 -0.11, 424.73 0 M424.73 0 C427.1 46.08, 427.34 91.55, 424.73 196.85 M424.73 0 C423.63 73.9, 423.74 147, 424.73 196.85 M424.73 196.85 C257.85 197.04, 89.67 195.56, 0 196.85 M424.73 196.85 C293.5 197.9, 162.25 198.23, 0 196.85 M0 196.85 C0.79 130.69, -0.55 66.75, 0 0 M0 196.85 C-1.02 144.38, 0.2 92.21, 0 0"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(35.23333740234375 959.8242820421765) rotate(0 187.13333129882812 87.5)">
              <text
                x="187.13333129882812"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2022)
              </text>
              <text
                x="187.13333129882812"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="187.13333129882812"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Worked at Aviva helping to
              </text>
              <text
                x="187.13333129882812"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                develop a new car insurance
              </text>
              <text
                x="187.13333129882812"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                platform.
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(7)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(7);
              }
            }}
          >
            <g
              transform="translate(657.8415267106491 842.0834285041856) rotate(0 343.592237466083 179.43909144605277)"
              strokeLinecap="round"
            >
              <rect
                x="-2.4380162046694576"
                y="-2.1"
                width="691.4160565205772"
                height="363.77806854336404"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M-1.31 -0.99 C249.9 2.23, 503.14 1.31, 687.56 -1.53 M0.44 0.55 C244.8 4.56, 490.96 3.93, 687.43 0.17 M688.49 -2.1 C681.68 95.39, 682.9 190.67, 687.23 357.02 M686.44 0.16 C689.88 84.32, 689.81 169.81, 686.31 359.31 M686.61 357.93 C418 362.74, 144.96 362.91, -0.24 358.5 M687.79 358.49 C472.98 355.61, 258.77 355.74, 0.39 358.23 M0.86 356.35 C-4.6 232.51, -2.21 112.08, 0.4 -1.04 M-0.86 359.39 C1.96 265.87, 1.29 175.1, -0.7 1.12"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(669.7420832685291 864.0225199502383) rotate(0 331.691680908203 157.5)">
              <text
                x="331.6916809082031"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2023 - Present)
              </text>
              <text
                x="331.6916809082031"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="331.6916809082031"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Joined BJSS, working across a variety of
              </text>
              <text
                x="331.6916809082031"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                projects.
              </text>
              <text
                x="331.6916809082031"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="331.6916809082031"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Continued developing full stack web applications
              </text>
              <text
                x="331.6916809082031"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                with additional responsibilities including technical
              </text>
              <text
                x="331.6916809082031"
                y="269.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                architecture and technical leadership.
              </text>
              <text
                x="331.6916809082031"
                y="304.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
            </g>
          </g>
          <g strokeLinecap="round">
            <g transform="translate(610.1890893952168 549.4106546614203) rotate(0 -84.80788650415752 5.231169676246282)">
              <path
                d="M0 0 C-13.74 0.23, -54.18 -0.35, -82.45 1.39 C-110.72 3.14, -155.09 8.95, -169.62 10.46 M0 0 C-13.74 0.23, -54.18 -0.35, -82.45 1.39 C-110.72 3.14, -155.09 8.95, -169.62 10.46"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(610.1890893952168 549.4106546614203) rotate(0 -84.80788650415752 5.231169676246282)">
              <path
                d="M-147.26 -0.73 C-152.13 1.71, -157.01 4.15, -169.62 10.46 M-147.26 -0.73 C-152.23 1.76, -157.2 4.25, -169.62 10.46"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(610.1890893952168 549.4106546614203) rotate(0 -84.80788650415752 5.231169676246282)">
              <path
                d="M-145.3 16.26 C-150.6 15, -155.9 13.73, -169.62 10.46 M-145.3 16.26 C-150.71 14.97, -156.11 13.68, -169.62 10.46"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(205.7025412143148 807.082338436725) rotate(0 1.9370497224998076 61.05806512633353)">
              <path
                d="M0 0 C-1.17 8.56, -8.9 30.99, -7.03 51.35 C-5.16 71.7, 8.16 110.32, 11.19 122.12 M0 0 C-1.17 8.56, -8.9 30.99, -7.03 51.35 C-5.16 71.7, 8.16 110.32, 11.19 122.12"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(205.7025412143148 807.082338436725) rotate(0 1.9370497224998076 61.05806512633353)">
              <path
                d="M-3.67 102.01 C0.55 107.72, 4.76 113.42, 11.19 122.12 M-3.67 102.01 C0.35 107.44, 4.36 112.88, 11.19 122.12"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(205.7025412143148 807.082338436725) rotate(0 1.9370497224998076 61.05806512633353)">
              <path
                d="M12.73 97.16 C12.29 104.24, 11.86 111.32, 11.19 122.12 M12.73 97.16 C12.31 103.9, 11.9 110.64, 11.19 122.12"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(454.62558643381135 1038.1707024912066) rotate(0 91.1144709478906 -9.37314650820008)">
              <path
                d="M0 0 C14 -0.06, 53.65 2.95, 84.02 -0.37 C114.39 -3.7, 165.86 -16.68, 182.23 -19.94 M0 0 C14 -0.06, 53.65 2.95, 84.02 -0.37 C114.39 -3.7, 165.86 -16.68, 182.23 -19.94"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(454.62558643381135 1038.1707024912066) rotate(0 91.1144709478906 -9.37314650820008)">
              <path
                d="M161.15 -6.5 C166.97 -10.21, 172.8 -13.93, 182.23 -19.94 M161.15 -6.5 C167.38 -10.47, 173.61 -14.44, 182.23 -19.94"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(454.62558643381135 1038.1707024912066) rotate(0 91.1144709478906 -9.37314650820008)">
              <path
                d="M157.44 -23.2 C164.29 -22.3, 171.14 -21.4, 182.23 -19.94 M157.44 -23.2 C164.77 -22.23, 172.09 -21.27, 182.23 -19.94"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
        </svg>
      </div>

      <div className="md:hidden">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 768.1076121754654 2993.151012983817"
          width="100%"
          height="auto"
          className=""
        >
          <rect x="0" y="0" width="768.1076121754654" height="2993.151012983817" fill="#ffffff" fillOpacity="0" />
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(0)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(0);
              }
            }}
          >
            <g
              transform="translate(254.74082629665247 10) rotate(0 156.57017036687688 165.7096422789491)"
              strokeLinecap="round"
            >
              <rect
                x="-1.27"
                y="-2.8865333320836033"
                width="316.58"
                height="336.597404087856"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M-0.41 0.68 C63.44 -3.69, 126.45 -2.16, 315.31 -0.14 M-1.27 0.19 C93.9 -4.56, 187.54 -3, 312.04 -0.53 M313.89 -2.67 C309.81 132.39, 314.25 262.88, 313.51 329.77 M312.63 -0.52 C312.41 100.24, 311.77 196.95, 313.04 331.11 M313.69 331.2 C249.81 335.25, 182.56 333.74, 0.76 331.29 M311.79 331.02 C216.42 327.41, 118.93 326.69, 0.77 330.89 M-0.18 331.68 C0.35 197.51, -1.75 70.15, 2.31 0.85 M0.19 331.26 C1.04 249.83, 2.02 168.47, 0.71 -0.26"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(262.81932796235753 18.209642278947285) rotate(0 148.49166870117193 157.5)">
              <text
                x="148.49166870117188"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2016)
              </text>
              <text
                x="148.49166870117188"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="148.49166870117188"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Completed a BSc in
              </text>
              <text
                x="148.49166870117188"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Biomedical Science &#x1f9ea;
              </text>
              <text
                x="148.49166870117188"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="148.49166870117188"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Decided the medical
              </text>
              <text
                x="148.49166870117188"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                industry is not my
              </text>
              <text
                x="148.49166870117188"
                y="269.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                interest and changed
              </text>
              <text
                x="148.49166870117188"
                y="304.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                my focus{' '}
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(1)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(1);
              }
            }}
          >
            <g
              transform="translate(122.75443387452424 447.53346845503256) rotate(0 289.76639299163696 124.72964473569846)"
              strokeLinecap="round"
            >
              <rect
                x="-0.3383975015018921"
                y="-1.7102055426956002"
                width="580.9987903556247"
                height="251.1702055426956"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M0 0 C187.56 1.48, 376.18 1.57, 579.53 0 M0 0 C173.27 -2.23, 347.27 -2.33, 579.53 0 M579.53 0 C580.92 74.82, 581.15 146.39, 579.53 249.46 M579.53 0 C577.98 82.39, 577.85 163.61, 579.53 249.46 M579.53 249.46 C440.13 248.29, 301.81 249.15, 0 249.46 M579.53 249.46 C350.71 247.76, 121.59 247.67, 0 249.46 M0 249.46 C0.88 150.4, -0.1 50.73, 0 0 M0 249.46 C-0.15 167.3, -0.68 86.22, 0 0"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(132.83750777436433 502.2631131907292) rotate(0 279.6833190917968 70)">
              <text
                x="279.6833190917969"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Started teaching myself how to code &#x1f468;&#x1f3fb;&#x200d;&#x1f4bb;
              </text>
              <text
                x="279.6833190917969"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="279.6833190917969"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Pursue a career in{' '}
              </text>
              <text
                x="279.6833190917969"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                software engineering
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(2)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(2);
              }
            }}
          >
            <g
              transform="translate(207.8240470603505 801.5512462113766) rotate(0 206.0430447840438 97.50070808733653)"
              strokeLinecap="round"
            >
              <rect
                x="-3.0225646215692183"
                y="-1.5"
                width="418.90256462156924"
                height="197.44"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M-0.01 1.82 C119.36 -1.72, 234.7 0.36, 411.83 -0.14 M1.04 -0.25 C163.76 1.98, 326.64 0.75, 412.68 0.86 M412.03 -1.5 C409.14 64.45, 411.09 134.72, 415.88 195.94 M410.27 -0.89 C413.71 45.33, 411.64 91.45, 411.77 195.37 M412.32 194.34 C315.12 192.72, 221.01 195.64, -0.72 195.51 M413.15 194.99 C323 193.24, 233.61 193.44, -0.88 194.28 M-2.09 193.37 C-3.65 121.69, -3.76 44.93, 1.62 0.53 M-0.78 193.12 C-2.97 115.52, -0.51 38.65, 0.85 -1.42"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(213.31708879263647 811.5519542987131) rotate(0 200.5500030517578 87.5)">
              <text
                x="200.5500030517578"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2017)
              </text>
              <text
                x="200.5500030517578"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="200.5500030517578"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Enrolled in a MSc in Computer
              </text>
              <text
                x="200.5500030517578"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Science at the University of
              </text>
              <text
                x="200.5500030517578"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Kent.
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(3)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(3);
              }
            }}
          >
            <g
              transform="translate(129.1411367066636 1099.6225752800783) rotate(0 277.86147451651533 134.0574179326577)"
              strokeLinecap="round"
            >
              <rect
                x="-0.78"
                y="-1.22"
                width="559.0231400215898"
                height="270.89000000000004"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M0.21 0.1 C212.88 3.86, 427.69 2.73, 555.13 1.52 M-0.78 -0.68 C154.56 -0.61, 308.55 -1.12, 555.24 -0.01 M554.52 2.21 C555.05 71.14, 549.88 140.56, 555.01 265.26 M555.6 1.23 C559.52 68.85, 558.69 137.54, 555.65 268.28 M555.27 268.73 C405.27 264.26, 254.55 264.76, -0.6 269.67 M555.8 268.2 C389.06 267.29, 224.32 268.49, 0.25 267.7 M-0.36 266.27 C1.64 199.02, 3.44 130.73, -0.59 -1.22 M1.19 267.08 C2.66 211.73, 1.36 159.01, -0.7 -1.11"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(161.3942738208351 1111.179993212736) rotate(0 245.6083374023437 122.5)">
              <text
                x="245.60833740234375"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2018)
              </text>
              <text
                x="245.60833740234375"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="245.60833740234375"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Graduated with my MSc in Computer
              </text>
              <text
                x="245.60833740234375"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Science and started my first
              </text>
              <text
                x="245.60833740234375"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                professional role as a software
              </text>
              <text
                x="245.60833740234375"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                engineer.
              </text>
              <text
                x="245.60833740234375"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                {' '}
                &#x1f468;&#x200d;&#x1f4bc;
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(4)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(4);
              }
            }}
          >
            <g
              transform="translate(218.24763861444046 1477.707223581674) rotate(0 177.3926094891629 180)"
              strokeLinecap="round"
            >
              <rect
                x="-1.5975792174957673"
                y="-0.5501131789689699"
                width="357.6262135027232"
                height="362.07664179347313"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M0 0 C109.8 -0.85, 216.62 1.36, 354.79 0 M0 0 C97.77 -1.17, 197.14 -0.13, 354.79 0 M354.79 0 C355.07 121.29, 353.99 243.05, 354.79 360 M354.79 0 C356.54 93.83, 356.34 188.41, 354.79 360 M354.79 360 C280.76 362.09, 207.24 361.98, 0 360 M354.79 360 C241.82 360.68, 128.71 360.1, 0 360 M0 360 C0.22 286.5, -0.41 213.1, 0 0 M0 360 C-2.1 265.41, -2.16 170.98, 0 0"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(242.21524505184573 1482.707223581674) rotate(0 153.42500305175787 175)">
              <text
                x="153.4250030517578"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2019)
              </text>
              <text
                x="153.4250030517578"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="153.4250030517578"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Joined a smaller tech
              </text>
              <text
                x="153.4250030517578"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                consultancy, CACI.
              </text>
              <text
                x="153.4250030517578"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="153.4250030517578"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Gained hands-on
              </text>
              <text
                x="153.4250030517578"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                experience building full
              </text>
              <text
                x="153.4250030517578"
                y="269.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                stack web applications
              </text>
              <text
                x="153.4250030517578"
                y="304.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                on security-conscious
              </text>
              <text
                x="153.4250030517578"
                y="339.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                projects.
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(5)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(5);
              }
            }}
          >
            <g
              transform="translate(10 1935.4513027302783) rotate(0 374.0538060877327 141.42071477355057)"
              strokeLinecap="round"
            >
              <rect
                x="-2.86"
                y="-4.541512219306158"
                width="752.22"
                height="291.5277582624329"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M-0.36 -0.14 C167.26 -7.25, 332.28 -4.82, 749.36 0.61 M-0.3 -0.69 C234.24 -0.22, 469.64 0.84, 748.3 -0.56 M746.76 2.93 C747.72 82.48, 749.51 164.95, 748.67 280.74 M747.65 -1.21 C746.46 91.98, 748.5 184.32, 748.46 281.57 M748.09 283.14 C483.02 288.83, 218.31 287.38, -1.06 284.1 M747.78 282.77 C460.44 279.63, 172.08 280.04, 0.11 283.62 M-2.86 281.41 C-2.19 185.6, -1.19 85.04, -2.16 -1.21 M-1.45 282.47 C2.85 172.27, 1.68 61.05, -0.51 0.14"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(22.953799984217085 1954.3720175038288) rotate(0 361.1000061035156 122.5)">
              <text
                x="361.1000061035156"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2021)
              </text>
              <text
                x="361.1000061035156"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="361.1000061035156"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Joined Made Tech, a small to mid-sized tech
              </text>
              <text
                x="361.1000061035156"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                consultancy.
              </text>
              <text
                x="361.1000061035156"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="361.1000061035156"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Continued building full stack applications while taking
              </text>
              <text
                x="361.1000061035156"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                on more ownership and mentoring junior engineers.
              </text>
            </g>
          </g>
          <g strokeLinecap="round">
            <g transform="translate(412.8131007013119 355.4108311040691) rotate(0 0.6103314131112256 39.731480014126646)">
              <path
                d="M0 0 C0.34 4.32, 2.19 12.67, 2.05 25.91 C1.91 39.16, -0.36 70.54, -0.84 79.46 M0 0 C0.34 4.32, 2.19 12.67, 2.05 25.91 C1.91 39.16, -0.36 70.54, -0.84 79.46"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(412.8131007013119 355.4108311040691) rotate(0 0.6103314131112256 39.731480014126646)">
              <path
                d="M-7.91 55.48 C-5.85 62.47, -3.79 69.46, -0.84 79.46 M-7.91 55.48 C-5.69 63, -3.48 70.52, -0.84 79.46"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(412.8131007013119 355.4108311040691) rotate(0 0.6103314131112256 39.731480014126646)">
              <path
                d="M9.16 56.55 C6.24 63.23, 3.33 69.9, -0.84 79.46 M9.16 56.55 C6.02 63.73, 2.89 70.92, -0.84 79.46"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(422.59863559225346 1008.5526623860533) rotate(0 -3.961779613919475 39.91302929920312)">
              <path
                d="M0.65 0.94 C-0.16 7.11, -4.48 23.17, -6.02 36.04 C-7.55 48.9, -8.19 71.29, -8.57 78.13 M-0.47 0.39 C-1.29 6.87, -5.79 24.48, -6.73 37.66 C-7.66 50.83, -5.8 72.77, -6.06 79.44"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(422.59863559225346 1008.5526623860533) rotate(0 -3.961779613919475 39.91302929920312)">
              <path
                d="M-13.72 59.73 C-10.77 64.44, -10.52 66.44, -6.06 79.44 M-13.72 59.73 C-11.88 65.3, -8.52 72.51, -6.06 79.44"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(422.59863559225346 1008.5526623860533) rotate(0 -3.961779613919475 39.91302929920312)">
              <path
                d="M0.74 59.41 C0.76 64.26, -1.91 66.33, -6.06 79.44 M0.74 59.41 C-1.74 64.95, -2.69 72.26, -6.06 79.44"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(420.07239736847055 705.4772334280169) rotate(0 -0.520124499708345 42.79422552725009)">
              <path
                d="M0.46 0.16 C-0.09 7.2, -2.84 28.9, -2.64 43.14 C-2.45 57.38, 0.9 78.44, 1.61 85.62 M-0.76 -0.8 C-0.98 6.36, -0.54 30.13, -0.31 44.67 C-0.09 59.2, 0.29 79.32, 0.61 86.39"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(420.07239736847055 705.4772334280169) rotate(0 -0.520124499708345 42.79422552725009)">
              <path
                d="M-7.51 66.11 C-4.21 72.04, -1.63 79.68, 0.61 86.39 M-7.51 66.11 C-5.15 71.41, -3.89 74.1, 0.61 86.39"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(420.07239736847055 705.4772334280169) rotate(0 -0.520124499708345 42.79422552725009)">
              <path
                d="M7.42 65.63 C5.45 71.79, 2.74 79.6, 0.61 86.39 M7.42 65.63 C6.6 70.98, 4.68 73.77, 0.61 86.39"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(398.0202739509891 1378.663563156093) rotate(0 0.6593573082087687 43.206154096980754)">
              <path
                d="M-0.73 -0.02 C-0.64 6.17, 0.55 22.85, 1.01 37.26 C1.47 51.66, 1.66 77.95, 2.05 86.41 M1.09 -1.07 C0.95 5.21, -0.17 23.49, -0.17 38.25 C-0.18 53.01, 0.34 79.52, 1.04 87.48"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(398.0202739509891 1378.663563156093) rotate(0 0.6593573082087687 43.206154096980754)">
              <path
                d="M-8.4 65.11 C-5.21 71.99, -3.72 79.55, 1.04 87.48 M-8.4 65.11 C-5.54 70.18, -3.37 76.51, 1.04 87.48"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(398.0202739509891 1378.663563156093) rotate(0 0.6593573082087687 43.206154096980754)">
              <path
                d="M8.19 64.27 C5.77 71.33, 1.65 79.18, 1.04 87.48 M8.19 64.27 C6.72 69.72, 4.53 76.27, 1.04 87.48"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(6)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(6);
              }
            }}
          >
            <g
              transform="translate(156.58872311603113 2319.3181858744792) rotate(0 212.36666870117188 98.42267188331061)"
              strokeLinecap="round"
            >
              <rect
                x="-1.7215714970838327"
                y="0"
                width="427.505674374693"
                height="197.84336606493042"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M0 0 C100.75 0.44, 202.91 1.57, 424.73 0 M0 0 C167.64 1.43, 334.88 1.32, 424.73 0 M424.73 0 C426.67 77.65, 425.48 154.55, 424.73 196.85 M424.73 0 C424.34 63.52, 423.69 128.35, 424.73 196.85 M424.73 196.85 C279.99 197.94, 136.6 198.39, 0 196.85 M424.73 196.85 C297.9 196.75, 170.54 196.35, 0 196.85 M0 196.85 C-2.71 121.47, -1.84 47.99, 0 0 M0 196.85 C1.28 141.04, 1.67 83.1, 0 0"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(181.82206051837488 2330.240857757788) rotate(0 187.13333129882812 87.5)">
              <text
                x="187.13333129882812"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2022)
              </text>
              <text
                x="187.13333129882812"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="187.13333129882812"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Worked at Aviva helping to
              </text>
              <text
                x="187.13333129882812"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                develop a new car insurance
              </text>
              <text
                x="187.13333129882812"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                platform.
              </text>
            </g>
          </g>
          <g
            className="group hover:cursor-pointer"
            tabIndex={0}
            role="button"
            focusable="true"
            onClick={() => setDialogIndex(7)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setDialogIndex(7);
              }
            }}
          >
            <g
              transform="translate(37.23662744056526 2624.2728300917115) rotate(0 343.5922374660831 179.43909144605277)"
              strokeLinecap="round"
            >
              <rect
                x="-1.5"
                y="-3.2439914127708596"
                width="689.3477447668488"
                height="362.9139914127709"
                fill="transparent"
                data-hover-helper="true"
              />
              <path
                d="M1.52 0.38 C179.15 -3.98, 360.17 -5.31, 686.48 1.54 M-0.13 0.15 C218.94 -4.07, 438.95 -4.2, 686.94 -0.64 M686.34 0.59 C683.79 74.94, 684.95 149.6, 687.15 359.34 M686.16 -0.84 C688.63 106.34, 688.02 209.86, 686.67 358.77 M687.83 359.09 C473.11 356.49, 255.61 355.04, -1.5 358.13 M687.53 358.31 C548.23 356, 409.56 354.7, -0.76 358.68 M-0.67 358.03 C-0.13 228.21, -1.31 99.83, 0.41 -0.44 M1.04 359.67 C0.69 248.29, 1.98 139.21, -0.53 -0.1"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(49.137183998445266 2646.2119215377643) rotate(0 331.69168090820307 157.5)">
              <text
                x="331.6916809082031"
                y="24.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                (2023 - Present)
              </text>
              <text
                x="331.6916809082031"
                y="59.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="331.6916809082031"
                y="94.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Joined BJSS, working across a variety of
              </text>
              <text
                x="331.6916809082031"
                y="129.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                projects.
              </text>
              <text
                x="331.6916809082031"
                y="164.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
              <text
                x="331.6916809082031"
                y="199.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                Continued developing full stack web applications
              </text>
              <text
                x="331.6916809082031"
                y="234.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                with additional responsibilities including technical
              </text>
              <text
                x="331.6916809082031"
                y="269.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              >
                architecture and technical leadership.
              </text>
              <text
                x="331.6916809082031"
                y="304.668"
                fill="#1e1e1e"
                direction="ltr"
                fontSize="28px"
                textAnchor="middle"
                dominantBaseline="alphabetic"
              />
            </g>
          </g>
          <g strokeLinecap="round">
            <g transform="translate(384.91482638618777 1849.5238634278649) rotate(0 -0.345903810832624 35.375482075161926)">
              <path
                d="M0 0 C-0.3 5.06, -1.96 18.57, -1.77 30.36 C-1.59 42.15, 0.62 64.02, 1.1 70.75 M0 0 C-0.3 5.06, -1.96 18.57, -1.77 30.36 C-1.59 42.15, 0.62 64.02, 1.1 70.75"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(384.91482638618777 1849.5238634278649) rotate(0 -0.345903810832624 35.375482075161926)">
              <path
                d="M-7.4 52.37 C-4.65 58.32, -1.9 64.26, 1.1 70.75 M-7.4 52.37 C-4.69 58.24, -1.97 64.11, 1.1 70.75"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(384.91482638618777 1849.5238634278649) rotate(0 -0.345903810832624 35.375482075161926)">
              <path
                d="M6.4 51.21 C4.69 57.53, 2.97 63.85, 1.1 70.75 M6.4 51.21 C4.71 57.45, 3.01 63.69, 1.1 70.75"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(369.2121545924392 2235.193445226054) rotate(0 0.7647681392636514 36.12684859535511)">
              <path
                d="M0 0 C-0.14 4.78, -1.28 16.63, -0.87 28.67 C-0.45 40.71, 1.93 64.99, 2.49 72.25 M0 0 C-0.14 4.78, -1.28 16.63, -0.87 28.67 C-0.45 40.71, 1.93 64.99, 2.49 72.25"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(369.2121545924392 2235.193445226054) rotate(0 0.7647681392636514 36.12684859535511)">
              <path
                d="M-6.73 52.43 C-4.03 58.23, -1.34 64.03, 2.49 72.25 M-6.73 52.43 C-3.24 59.93, 0.24 67.42, 2.49 72.25"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(369.2121545924392 2235.193445226054) rotate(0 0.7647681392636514 36.12684859535511)">
              <path
                d="M8.17 51.15 C6.51 57.32, 4.85 63.49, 2.49 72.25 M8.17 51.15 C6.02 59.13, 3.87 67.1, 2.49 72.25"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
          <g strokeLinecap="round">
            <g transform="translate(382.4908146378789 2526.913326687303) rotate(0 1.4110274513303693 38.69870000245464)">
              <path
                d="M0 0 C0.54 4.81, 3.29 15.98, 3.22 28.88 C3.15 41.78, 0.2 69.31, -0.4 77.4 M0 0 C0.54 4.81, 3.29 15.98, 3.22 28.88 C3.15 41.78, 0.2 69.31, -0.4 77.4"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(382.4908146378789 2526.913326687303) rotate(0 1.4110274513303693 38.69870000245464)">
              <path
                d="M-6.66 53.89 C-5.35 58.81, -4.04 63.73, -0.4 77.4 M-6.66 53.89 C-4.66 61.37, -2.67 68.86, -0.4 77.4"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
            <g transform="translate(382.4908146378789 2526.913326687303) rotate(0 1.4110274513303693 38.69870000245464)">
              <path
                d="M9.92 55.37 C7.76 59.98, 5.6 64.59, -0.4 77.4 M9.92 55.37 C6.63 62.38, 3.35 69.39, -0.4 77.4"
                stroke="var(--clr-primary-3)"
                fill="none"
                strokeWidth="4"
              />
            </g>
          </g>
          <mask />
        </svg>
      </div>
    </>
  );
}
