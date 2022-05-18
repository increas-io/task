import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./style.scss"

export default function Task() {
  return (
    <>
      <div className="container mx-auto">
        <div className="task p-0 m-0 flex-col-reverse md:flex-row">
          <div className="">
            <h1 className="text-7xl font-bold font-sanse">
              Create this component
            </h1>
            <p className=" my-10 text-2xl text-gray-600 w-310">
              Use component &lt;Task&gt; to create layout and style.scss to
              write your css, additionally you can use Tailwind CSS.
            </p>
            <h4 className=" text-xl text-gray-600 w-310">increas.io</h4>
          </div>

          {/* <StaticImage
          className="p-0 m-0"
          src="../images/Task.svg"
          alt="Task Image"
        /> */}

          <StaticImage
            className="p-0 m-0"
            src="../images/img.PNG"
            alt="hero picture"
          />
        </div>
      </div>
    </>
  )
}
