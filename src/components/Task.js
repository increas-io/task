import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import "./style.scss"

export default function Task() {
  return (
    <div className="container">
      <div className="task p-0 m-0 pl-32 relative items-center justify-items-center z-10 mt-20 w-full">
        <div className="w-3/5 md:w-full z-40">
          <h1 className="font-extrabold title ">
            Create this component
          </h1>
          <p className="descr pt-16 font-sans ">
            Use component &lt;Task&gt; to create layout and style.scss to write
            your css, additionally you can use Tailind CSS
          </p>
          <p className="descr-bottom pt-20 font-sans">increas.io</p>
        </div>
        <div className="w-2/5 md:w-full isolate">
          <div className="rounded-full pink-round top-12 right-24 absolute z-30 w-4/12 h-2/3"></div>
          <StaticImage className="p-0 m-0 img top-12 right-24 absolute z-40" src="../images/Mask.png" alt="Task Image" />
          <div className="rounded-full rose-round right-80 top-16 absolute z-10 w-1/4 h-2/3"></div>
          <div className="rounded-full right-56 top-72 yellow-round absolute z-20 h-2/3"></div>
        </div>
      </div>
    </div>
  )
}
