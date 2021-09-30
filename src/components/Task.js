import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import "./style.scss"

export default function Task() {
    return (
      <>
        <div className="flex w-full">
          <div className="w-2/4">
            <h1 className="mt-20 ml-28 text-8xl font-bold">Component</h1>
            <p className="mt-20 ml-28 text-3xl text-gray-500">My component &#60;Task&#62;</p>
          </div>
          <div class="flex flex-col">
            <div className="gradient-one filter blur-2xl" />
            <div className="gradient-two filter blur-3xl" />
          </div>
        </div>
      </>
    )
}