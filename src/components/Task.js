import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./style.scss"
import copy from "../copy"

export default function Task() {
  return (
    <>
      <div className="task p-0 m-0">
        <svg
          width="100%"
          height="100%"
          fill="none"
          style={{ position: "absolute" }}
        >
          <g clip-path="url(#clip0)">
            <g filter="url(#filter0_f)">
              <circle
                cx="1026.61"
                cy="499.206"
                r="314.606"
                fill="url(#paint0_linear)"
              />
            </g>
            <g filter="url(#filter1_f)">
              <circle
                cx="1134.8"
                cy="377.2"
                r="230.2"
                fill="url(#paint1_linear)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="512"
              y="-15.4007"
              width="1029.21"
              height="1029.21"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur"
              />
            </filter>
            <filter
              id="filter1_f"
              x="804.6"
              y="47"
              width="660.4"
              height="660.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="1026.61"
              y1="184.599"
              x2="1026.61"
              y2="813.812"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF7BCA" />
              <stop offset="1" stop-color="#FFC56F" stop-opacity="0.46" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="1134.8"
              y1="147"
              x2="1134.8"
              y2="607.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F22FB0" />
              <stop offset="1" stop-color="#F58A25" stop-opacity="0" />
              <stop offset="1" stop-color="#7061A3" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="1440" height="900" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="text-container flex flex-col w-1/2 pl-32">
          <h1 className="font-extrabold text-8xl leading-none">
            {copy.taskHeader}
          </h1>
          <p className="mt-12 w-1/2 text-3xl font-medium text-gray-300 task__content">
            {copy.taskContent}
          </p>
          <small className="mt-16 text-xl text-gray-300">
            {copy.taskSmall}
          </small>
        </div>
      </div>
      <StaticImage
        className="p-0 m-0"
        src="../images/Task.svg"
        alt="Task Image"
      />
    </>
  )
}
