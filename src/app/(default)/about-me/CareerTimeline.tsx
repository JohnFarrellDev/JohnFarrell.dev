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

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1625.1595543893902 1324.4603916192063"
        width="100%"
        height="auto"
        className=""
      >
        <rect x="0" y="0" width="1625.1595543893902" height="1324.4603916192063" fill="#ffffff" fillOpacity="0" />
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(0)}>
          <g
            transform="translate(143.36477648399523 191.74748862133492) rotate(0 156.57017036687682 91.20294081481734)"
            strokeLinecap="round"
          >
            <rect
              x="-1.43"
              y="-2.505055936131217"
              width="317.8"
              height="186.28505593613122"
              fill="transparent"
              data-hover-helper="true"
            />
            <path
              d="M-1.15 -0.41 C122.52 2.66, 241.21 3, 311 -2.39 M-0.53 0.26 C67.19 -3.73, 133.21 -2.79, 313.77 -0.74 M316.37 2.69 C306.56 50.57, 307.03 94.58, 309.86 179.94 M312.53 0.47 C312.2 40.46, 313.67 77.22, 314.24 183.78 M313.29 183.28 C242.19 182.78, 167.9 184.81, 1.46 180.05 M311.85 182.43 C243.92 179.98, 177.85 181.25, -0.84 182.59 M1.03 179.65 C2.57 141.98, 4.64 96.43, -1.43 -2.38 M0.98 182.11 C-1.87 112.87, -2.65 41.75, 1.51 -0.97"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(151.4432781497003 212.95042943615044) rotate(0 148.49166870117188 70)">
            <text
              x="148.49166870117188"
              y="24.668"
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
              y="59.668"
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
              y="94.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              No idea what to do
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
              with my life.
            </text>
          </g>
        </g>
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(1)}>
          <g
            transform="translate(594.0320997414783 170.08300396605046) rotate(0 183.3245154843812 102.62872939816407)"
            strokeLinecap="round"
          >
            <rect
              x="-0.4660784231129817"
              y="0"
              width="367.3364014362108"
              height="206.32676158081983"
              fill="transparent"
              data-hover-helper="true"
            />
            <path
              d="M0 0 C120.05 0.85, 239.68 0.67, 366.65 0 M0 0 C131.59 1.38, 262.95 1.39, 366.65 0 M366.65 0 C366.8 73.59, 367.06 151.94, 366.65 205.26 M366.65 0 C364.59 75.08, 364.46 150.2, 366.65 205.26 M366.65 205.26 C287.24 206.47, 207.41 206.88, 0 205.26 M366.65 205.26 C265.15 206.07, 163.32 206.69, 0 205.26 M0 205.26 C-1.12 141.29, 0.15 80.91, 0 0 M0 205.26 C1.2 159.85, 1.52 115.4, 0 0"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(606.2899495764455 202.7117333642127) rotate(0 171.06666564941406 70)">
            <text
              x="171.06666564941406"
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
              x="171.06666564941406"
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
              x="171.06666564941406"
              y="94.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Decide I want to become
            </text>
            <text
              x="171.06666564941406"
              y="129.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              a software engineer.
            </text>
          </g>
        </g>
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(2)}>
          <g
            transform="translate(1108.1991394959925 195.8904574240987) rotate(0 252.45547697661232 60.876243132721356)"
            strokeLinecap="round"
          >
            <rect
              x="-2.3174045856874024"
              y="-2.7384853804747133"
              width="510.3543248011753"
              height="127.51848538047471"
              fill="transparent"
              data-hover-helper="true"
            />
            <path
              d="M1.07 0.71 C193.19 -4.06, 386.56 -3.83, 506.2 1.08 M-0.26 -0.66 C110.75 2.07, 222.71 3.06, 504.67 0.19 M502.08 2.2 C509.06 22.03, 509.68 50.91, 505.12 122.99 M505.71 1.03 C502.5 37.47, 503.29 77.55, 503.09 121.79 M505.32 120.81 C390.55 123.87, 275.25 123.78, 0.41 120.65 M505.38 121.47 C335.71 125.88, 167.77 124.62, 0.39 121.63 M-2.29 124.78 C-2.21 86.84, -0.9 51.89, 0.06 1.96 M-1.31 122.43 C-3.13 93.19, -2.67 68.44, 1.61 0.31"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1127.354613420847 221.7667005568219) rotate(0 233.3000030517578 35)">
            <text
              x="233.3000030517578"
              y="24.668"
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
              y="59.668"
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
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(3)}>
          <g
            transform="translate(1121.658194187334 462.0104339753343) rotate(0 212.36666870117188 96.13282511476791)"
            strokeLinecap="round"
          >
            <rect x="-2.62" y="-1.82" width="428.96" height="196.14" fill="transparent" data-hover-helper="true" />
            <path
              d="M-0.48 1.69 C106.67 2.48, 211.89 2.73, 424.04 -1.73 M0.42 -0.32 C101.52 -2.19, 203.13 -1.42, 423.99 0.58 M425.86 0.21 C423.22 71.78, 420.74 138.85, 426.34 194.32 M424.05 -1.82 C421.6 40.32, 420.29 85.06, 425.24 191.09 M423.39 192.81 C290.5 191.51, 161.12 192.6, 1.24 191.51 M423.94 192.78 C322.42 193.72, 220.53 193.32, -0.6 193.06 M-2.62 192.33 C3.2 140.62, 3.1 97.36, -2.62 1.35 M-0.06 193.87 C4.04 152.88, 2.86 114.44, -0.82 -1.36"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1136.416525486162 470.6432590901022) rotate(0 197.60833740234375 87.5)">
            <text
              x="197.60833740234375"
              y="24.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Graduate with my MSc in
            </text>
            <text
              x="197.60833740234375"
              y="59.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Computer science and get a
            </text>
            <text
              x="197.60833740234375"
              y="94.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              job as a software engineer
            </text>
            <text
              x="197.60833740234375"
              y="129.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              working at Tata Consultancy
            </text>
            <text
              x="197.60833740234375"
              y="164.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Services.
            </text>
          </g>
        </g>
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(4)}>
          <g
            transform="translate(665.0976916654654 462.95960966557686) rotate(0 182.528037135481 212.80308612236877)"
            strokeLinecap="round"
          >
            <rect
              x="-1.595354857770163"
              y="-1.300210099837382"
              width="367.71544853345085"
              height="427.90116129592417"
              fill="transparent"
              data-hover-helper="true"
            />
            <path
              d="M0 0 C145.18 -0.95, 291.79 -1.46, 365.06 0 M0 0 C131.55 -1.48, 261.53 -1.97, 365.06 0 M365.06 0 C366.61 130.11, 366.33 261.44, 365.06 425.61 M365.06 0 C362.98 140.5, 363.79 281.79, 365.06 425.61 M365.06 425.61 C261.09 427.21, 156.09 426.62, 0 425.61 M365.06 425.61 C239.22 426.86, 113.76 426.07, 0 425.61 M0 425.61 C0.16 303.91, 0.1 180.49, 0 0 M0 425.61 C-1.99 302.69, -2.26 179.21, 0 0"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(681.3840600997744 483.2626957879438) rotate(0 166.24166870117188 192.5)">
            <text
              x="166.24166870117188"
              y="24.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Joined a smaller
            </text>
            <text
              x="166.24166870117188"
              y="59.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              consultancy called CACI,
            </text>
            <text
              x="166.24166870117188"
              y="94.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              I learnt so much here
            </text>
            <text
              x="166.24166870117188"
              y="129.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              about software
            </text>
            <text
              x="166.24166870117188"
              y="164.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              development, particularly
            </text>
            <text
              x="166.24166870117188"
              y="199.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              full stack web
            </text>
            <text
              x="166.24166870117188"
              y="234.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              development. I worked
            </text>
            <text
              x="166.24166870117188"
              y="269.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              with brilliant people and
            </text>
            <text
              x="166.24166870117188"
              y="304.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              progressed my skills
            </text>
            <text
              x="166.24166870117188"
              y="339.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              learning React,
            </text>
            <text
              x="166.24166870117188"
              y="374.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              TypeScript and Java.
            </text>
          </g>
        </g>
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(5)}>
          <g
            transform="translate(39.19698485204492 463.57889942427573) rotate(0 203.30389778675755 209.7646865442439)"
            strokeLinecap="round"
          >
            <rect
              x="-1.644609966122167"
              y="-2.3776761802916138"
              width="410.9549496915766"
              height="423.3776761802916"
              fill="transparent"
              data-hover-helper="true"
            />
            <path
              d="M-0.83 0.41 C87.57 -3.78, 173.29 -2.31, 407.6 -1.16 M0.9 0.75 C105.99 1.76, 213.01 0.67, 405.7 -0.68 M405.96 0.51 C405.76 91.64, 407.33 179.34, 407.78 421 M406.66 0.33 C410.62 95.53, 409.59 192.15, 407.16 418.65 M404.59 419.57 C316.45 416.57, 231.22 418.56, -1.31 419.81 M406.9 418.76 C308.53 417.69, 210.64 417.3, -0.4 418.87 M1.05 419.21 C-2.22 259.33, -3.05 97.42, 1.61 -1.03 M0.02 420.05 C-0.17 307.66, 1.2 194.09, 0.36 -1.06"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(51.37588263880241 498.3435859685196) rotate(0 191.12499999999994 175)">
            <text
              x="191.125"
              y="24.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Moved back to London and
            </text>
            <text
              x="191.125"
              y="59.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              joined a tech consultancy
            </text>
            <text
              x="191.125"
              y="94.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              called MadeTech. Continued
            </text>
            <text
              x="191.125"
              y="129.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              to work on full stack web
            </text>
            <text
              x="191.125"
              y="164.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              development projects with a
            </text>
            <text
              x="191.125"
              y="199.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              large focus on government
            </text>
            <text
              x="191.125"
              y="234.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              organisations. My proudest
            </text>
            <text
              x="191.125"
              y="269.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              work here would be working
            </text>
            <text
              x="191.125"
              y="304.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              alongside DLUHC on Homes
            </text>
            <text
              x="191.125"
              y="339.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              for Ukraine. &#x1f499;&#x1f49b;
            </text>
          </g>
        </g>
        <g strokeLinecap="round">
          <g transform="translate(458.65307656889263 272.8449447509811) rotate(0 66.43540926969058 -7.835233048333976)">
            <path
              d="M0 0 C10.78 -0.52, 42.51 -0.5, 64.66 -3.11 C86.8 -5.72, 121.5 -13.58, 132.87 -15.67 M0 0 C10.78 -0.52, 42.51 -0.5, 64.66 -3.11 C86.8 -5.72, 121.5 -13.58, 132.87 -15.67"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(458.65307656889263 272.8449447509811) rotate(0 66.43540926969058 -7.835233048333976)">
            <path
              d="M111.54 -2.64 C119.54 -7.53, 127.55 -12.42, 132.87 -15.67 M111.54 -2.64 C119.19 -7.31, 126.85 -11.99, 132.87 -15.67"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(458.65307656889263 272.8449447509811) rotate(0 66.43540926969058 -7.835233048333976)">
            <path
              d="M108.15 -19.4 C117.43 -18, 126.71 -16.6, 132.87 -15.67 M108.15 -19.4 C117.02 -18.06, 125.89 -16.72, 132.87 -15.67"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
        </g>
        <mask />
        <g strokeLinecap="round">
          <g transform="translate(1356.5459440199845 320.1869409443825) rotate(0 -9.280992085604566 70.41174651547408)">
            <path
              d="M-0.38 -0.04 C-2.53 10.92, -8.95 42.74, -11.82 66.27 C-14.7 89.8, -16.4 128.53, -17.62 141.16 M1.62 -1.11 C-0.25 9.45, -6.36 40.46, -9.61 64.43 C-12.86 88.39, -16.29 130.04, -17.89 142.65"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1356.5459440199845 320.1869409443825) rotate(0 -9.280992085604566 70.41174651547408)">
            <path
              d="M-23.95 118.39 C-21.57 126.23, -18.28 138.79, -17.89 142.65 M-23.95 118.39 C-22.46 126.02, -20.22 134.22, -17.89 142.65"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1356.5459440199845 320.1869409443825) rotate(0 -9.280992085604566 70.41174651547408)">
            <path
              d="M-6.94 120.18 C-11.17 127.27, -14.47 139.14, -17.89 142.65 M-6.94 120.18 C-11.02 127.39, -14.35 135, -17.89 142.65"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
        </g>
        <mask />
        <g strokeLinecap="round">
          <g transform="translate(962.4375317540746 271.02081672763234) rotate(0 71.80662037969444 -5.261535362496943)">
            <path
              d="M-0.37 0.36 C7.05 0.49, 20.2 3.96, 44.34 1.98 C68.48 -0.01, 128.11 -9.33, 144.48 -11.55 M1.64 -0.5 C8.94 -0.22, 19.78 2.32, 43.53 0.13 C67.29 -2.06, 127.71 -11.38, 144.17 -13.67"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(962.4375317540746 271.02081672763234) rotate(0 71.80662037969444 -5.261535362496943)">
            <path
              d="M122.15 -1.82 C128.9 -4.68, 135.46 -7.06, 144.17 -13.67 M122.15 -1.82 C130.36 -5.59, 137.66 -10.51, 144.17 -13.67"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(962.4375317540746 271.02081672763234) rotate(0 71.80662037969444 -5.261535362496943)">
            <path
              d="M119.69 -18.74 C127.3 -16.77, 134.56 -14.33, 144.17 -13.67 M119.69 -18.74 C128.58 -16.85, 136.7 -16.09, 144.17 -13.67"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
        </g>
        <mask />
        <g strokeLinecap="round">
          <g transform="translate(1120.658194187334 617.9682513615589) rotate(0 -44.37305749962593 5.82565503587648)">
            <path
              d="M-0.02 0.08 C-5.55 0.28, -18.24 0.14, -32.83 2.26 C-47.42 4.39, -78.06 11.13, -87.58 12.81 M-1.49 -0.93 C-7.22 -0.03, -19.49 1.61, -33.86 3.61 C-48.24 5.61, -78.32 9.98, -87.73 11.08"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1120.658194187334 617.9682513615589) rotate(0 -44.37305749962593 5.82565503587648)">
            <path
              d="M-65.55 -0.46 C-72.63 3.07, -80.68 9.09, -87.73 11.08 M-65.55 -0.46 C-73.5 4.48, -83.5 8.58, -87.73 11.08"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1120.658194187334 617.9682513615589) rotate(0 -44.37305749962593 5.82565503587648)">
            <path
              d="M-63.32 16.49 C-71.28 14.43, -80.07 14.86, -87.73 11.08 M-63.32 16.49 C-71.98 14.73, -82.87 12.1, -87.73 11.08"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
        </g>
        <mask />
        <g transform="translate(144.27328761010403 142.9377701176454) rotate(0 43.20000076293945 22.5)">
          <text
            x="0"
            y="34.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            2016
          </text>
        </g>
        <g transform="translate(1111.4016629742823 142.7892681207195) rotate(0 43.20000076293945 22.5)">
          <text
            x="0"
            y="34.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            2017
          </text>
        </g>
        <g transform="translate(667.5763835987209 416.439379112664) rotate(0 43.20000076293945 22.5)">
          <text
            x="0"
            y="34.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            2019
          </text>
        </g>
        <g transform="translate(39.42089153129393 414.0183750386568) rotate(0 43.20000076293945 22.5)">
          <text
            x="0"
            y="34.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            2021
          </text>
        </g>
        <g transform="translate(1458.8249760556075 414.3428127526531) rotate(0 43.20000076293945 22.5)">
          <text
            x="0"
            y="34.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            2018
          </text>
        </g>
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(6)}>
          <g
            transform="translate(10 1014.0648916612554) rotate(0 224.81028357129162 101.31766464398424)"
            strokeLinecap="round"
          >
            <rect
              x="-1.0276231456662837"
              y="-0.498391189618285"
              width="450.7493269109078"
              height="203.32739022827226"
              fill="transparent"
              data-hover-helper="true"
            />
            <path
              d="M0 0 C143.31 -0.63, 284.5 0.55, 449.62 0 M0 0 C166.77 -0.77, 333.14 -0.55, 449.62 0 M449.62 0 C449.5 76.1, 449.9 151.71, 449.62 202.64 M449.62 0 C448.19 43.66, 448.96 88.97, 449.62 202.64 M449.62 202.64 C276.74 202.74, 102.94 203.01, 0 202.64 M449.62 202.64 C351.73 200.97, 254.47 200.88, 0 202.64 M0 202.64 C0.21 130.86, -0.84 60.8, 0 0 M0 202.64 C-1.34 134, -1.4 66.12, 0 0"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(23.760280519533808 1045.3825563052378) rotate(0 211.0500030517578 70)">
            <text
              x="211.0500030517578"
              y="24.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Brief period of time at DAZN
            </text>
            <text
              x="211.0500030517578"
              y="59.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              (da zone) the sport streaming
            </text>
            <text
              x="211.0500030517578"
              y="94.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              service working on personalised
            </text>
            <text
              x="211.0500030517578"
              y="129.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              content feeds.
            </text>
          </g>
        </g>
        <g transform="translate(38.9493537334597 965.1814239007035) rotate(0 43.20000076293945 22.5)">
          <text
            x="0"
            y="34.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            2022
          </text>
        </g>
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(7)}>
          <g
            transform="translate(646.5098130136921 1022.8927952710146) rotate(0 212.36666870117188 98.42267188331061)"
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
          <g transform="translate(656.7348191172077 1033.8154671543234) rotate(0 202.14166259765625 87.5)">
            <text
              x="202.14166259765625"
              y="24.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Worked at Aviva on a new car
            </text>
            <text
              x="202.14166259765625"
              y="59.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              insurance platform, mostly
            </text>
            <text
              x="202.14166259765625"
              y="94.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              spent my time investigating
            </text>
            <text
              x="202.14166259765625"
              y="129.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              bugs customers were facing
            </text>
            <text
              x="202.14166259765625"
              y="164.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              and implementing fixes
            </text>
          </g>
        </g>
        <g className="group hover:cursor-pointer" onClick={() => setDialogIndex(8)}>
          <g
            transform="translate(1228.0291656396378 923.6765018548467) rotate(0 193.56519437487623 195.3919448821798)"
            strokeLinecap="round"
          >
            <rect
              x="-2.3655272059004404"
              y="-2.25"
              width="391.3509661344891"
              height="395.5870693219014"
              fill="transparent"
              data-hover-helper="true"
            />
            <path
              d="M-1.93 -1.45 C139.56 2.12, 284.03 0.77, 387.69 -2.25 M0.65 0.81 C137.39 4.21, 276.79 3.28, 387.49 0.25 M388.32 -1.93 C381.81 104.06, 382.93 208.02, 387.17 389.08 M386.45 0.15 C389.88 91.89, 389.82 184.85, 386.33 391.18 M386.29 389.38 C236.68 394.37, 80.57 394.63, -0.35 390.22 M388.02 390.22 C266.22 387.99, 145.3 388.2, 0.58 389.83 M0.78 388.47 C-4.39 253.52, -2.2 121.69, 0.36 -0.95 M-0.79 391.25 C1.93 289.64, 1.31 190.55, -0.64 1.02"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1234.8276974168577 961.5684467370265) rotate(0 186.76666259765625 157.5)">
            <text
              x="186.76666259765625"
              y="24.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Join BJSS where I have
            </text>
            <text
              x="186.76666259765625"
              y="59.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              worked across a variety of
            </text>
            <text
              x="186.76666259765625"
              y="94.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              projects.
            </text>
            <text
              x="186.76666259765625"
              y="129.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            />
            <text
              x="186.76666259765625"
              y="164.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Proud of the work I did
            </text>
            <text
              x="186.76666259765625"
              y="199.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              for BA recreating their
            </text>
            <text
              x="186.76666259765625"
              y="234.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              homepage and significantly
            </text>
            <text
              x="186.76666259765625"
              y="269.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              improving google PageSpeed
            </text>
            <text
              x="186.76666259765625"
              y="304.668"
              fill="#1e1e1e"
              direction="ltr"
              fontSize="28px"
              textAnchor="middle"
              dominantBaseline="alphabetic"
            >
              Insights.
            </text>
          </g>
        </g>
        <g transform="translate(1231.7819264434709 870.1030202443071) rotate(0 122.65833282470703 22.5)">
          <text
            x="0"
            y="34.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            2023 - Present
          </text>
        </g>
        <g strokeLinecap="round">
          <g transform="translate(664.0976916654656 594.643356086126) rotate(0 -108.6464556199528 31.670923083745947)">
            <path
              d="M0 0 C-18.57 9.08, -75.2 43.9, -111.42 54.46 C-147.64 65.01, -199.65 61.86, -217.29 63.34 M0 0 C-18.57 9.08, -75.2 43.9, -111.42 54.46 C-147.64 65.01, -199.65 61.86, -217.29 63.34"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(664.0976916654656 594.643356086126) rotate(0 -108.6464556199528 31.670923083745947)">
            <path
              d="M-194.01 54.22 C-199.09 56.21, -204.16 58.2, -217.29 63.34 M-194.01 54.22 C-199.19 56.25, -204.37 58.28, -217.29 63.34"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(664.0976916654656 594.643356086126) rotate(0 -108.6464556199528 31.670923083745947)">
            <path
              d="M-193.6 71.32 C-198.77 69.58, -203.93 67.84, -217.29 63.34 M-193.6 71.32 C-198.87 69.55, -204.14 67.77, -217.29 63.34"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
        </g>
        <mask />
        <g strokeLinecap="round">
          <g transform="translate(255.53735659868448 884.1082725127599) rotate(0 -5.694550546326127 63.707295374264504)">
            <path
              d="M0 0 C-1.9 11.25, -10.71 46.25, -11.39 67.48 C-12.07 88.72, -5.32 117.43, -4.1 127.41 M0 0 C-1.9 11.25, -10.71 46.25, -11.39 67.48 C-12.07 88.72, -5.32 117.43, -4.1 127.41"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(255.53735659868448 884.1082725127599) rotate(0 -5.694550546326127 63.707295374264504)">
            <path
              d="M-16.42 105.66 C-12.93 111.83, -9.44 118, -4.1 127.41 M-16.42 105.66 C-13.1 111.54, -9.77 117.41, -4.1 127.41"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(255.53735659868448 884.1082725127599) rotate(0 -5.694550546326127 63.707295374264504)">
            <path
              d="M0.44 102.83 C-0.85 109.8, -2.14 116.77, -4.1 127.41 M0.44 102.83 C-0.79 109.47, -2.01 116.11, -4.1 127.41"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
        </g>
        <mask />
        <g strokeLinecap="round">
          <g transform="translate(460.62056714258347 1115.5491042621943) rotate(0 92.21210065359901 -6.160807921050946)">
            <path
              d="M0 0 C14.81 -0.82, 58.11 -2.88, 88.85 -4.94 C119.58 -6.99, 168.49 -11.09, 184.42 -12.32 M0 0 C14.81 -0.82, 58.11 -2.88, 88.85 -4.94 C119.58 -6.99, 168.49 -11.09, 184.42 -12.32"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(460.62056714258347 1115.5491042621943) rotate(0 92.21210065359901 -6.160807921050946)">
            <path
              d="M161.69 -1.92 C167.05 -4.37, 172.41 -6.83, 184.42 -12.32 M161.69 -1.92 C169.88 -5.67, 178.07 -9.42, 184.42 -12.32"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(460.62056714258347 1115.5491042621943) rotate(0 92.21210065359901 -6.160807921050946)">
            <path
              d="M160.32 -18.97 C166.01 -17.4, 171.69 -15.84, 184.42 -12.32 M160.32 -18.97 C169.01 -16.57, 177.69 -14.18, 184.42 -12.32"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
        </g>
        <mask />
        <g strokeLinecap="round">
          <g transform="translate(1072.243150416036 1118.6367113122797) rotate(0 75.3621590217175 -3.2880321499142156)">
            <path
              d="M0 0 C13.49 -1.1, 55.81 -6.57, 80.93 -6.58 C106.05 -6.58, 139.09 -1.13, 150.72 -0.04 M0 0 C13.49 -1.1, 55.81 -6.57, 80.93 -6.58 C106.05 -6.58, 139.09 -1.13, 150.72 -0.04"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1072.243150416036 1118.6367113122797) rotate(0 75.3621590217175 -3.2880321499142156)">
            <path
              d="M126.37 5.59 C133.1 4.03, 139.83 2.48, 150.72 -0.04 M126.37 5.59 C133.56 3.93, 140.76 2.26, 150.72 -0.04"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
          <g transform="translate(1072.243150416036 1118.6367113122797) rotate(0 75.3621590217175 -3.2880321499142156)">
            <path
              d="M128.45 -11.38 C134.6 -8.25, 140.76 -5.12, 150.72 -0.04 M128.45 -11.38 C135.03 -8.03, 141.61 -4.68, 150.72 -0.04"
              stroke="var(--clr-primary-3)"
              fill="none"
              strokeWidth="4"
            />
          </g>
        </g>
        <mask />
        <g transform="translate(327.7216932581764 10) rotate(0 156.47500610351562 45)">
          <text
            x="0"
            y="34.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            Click any box{' '}
          </text>
          <text
            x="0"
            y="79.344"
            fill="#1e1e1e"
            direction="ltr"
            fontSize="36px"
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            for more context &#x1f5b1;&#xfe0f;
          </text>
        </g>
      </svg>
    </>
  );
}
