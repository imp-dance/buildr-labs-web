import * as React from "react";
import { SVGProps } from "react";
import styles from "./BuildrLogo.module.scss";

export const BuildrLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="320"
    height="441"
    fill="none"
    viewBox="0 0 320 441"
    className={styles.buildrLogo}
    {...props}
  >
    <g clipPath="url(#clip0_8_126)">
      <g>
        <path
          id="LEFTTOP"
          fill="currentColor"
          d="M0 0.5H100V120.5H0z"
          className={styles.leftTop}
        ></path>
      </g>
      <g>
        <path
          fill="currentColor"
          id="MIDTOP"
          d="M100 120.5H220V220.5H100z"
          className={styles.midTop}
        ></path>
      </g>
      <g>
        <path
          fill="currentColor"
          id="RIGHTTOP"
          d="M220 120.5H320V220.5H220z"
          className={styles.rightTop}
        ></path>
      </g>
      <g>
        <path
          fill="currentColor"
          d="M0 220.5H100V340.5H0z"
          id="LEFTMID"
          className={styles.leftMid}
        ></path>
      </g>
      <g>
        <path
          fill="currentColor"
          d="M220 220.5H320V340.5H220z"
          id="RIGHTMID"
          className={styles.rightMid}
        ></path>
      </g>
      <g>
        <path
          fill="currentColor"
          d="M0 340.5H100V440.5H0z"
          id="LEFTBOT"
          className={styles.leftBot}
        ></path>
      </g>
      <g>
        <path
          fill="currentColor"
          d="M100 340.5H220V440.5H100z"
          className={styles.midBot}
        ></path>
      </g>
      <g>
        <path
          fill="currentColor"
          d="M220 340.5H320V440.5H220z"
          id="RIGHTBOT"
          className={styles.rightBot}
        ></path>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_8_126">
        <path
          fill="transparent"
          d="M0 0H320V440H0z"
          transform="translate(0 .5)"
          className={styles.midBot}
        ></path>
      </clipPath>
    </defs>
  </svg>
);
