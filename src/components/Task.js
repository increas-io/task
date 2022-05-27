import React from "react"
import "./style.scss"

export default function Task() {
  return (
    <>
      <div className="task p-0 m-0 pl-32 relative">
        <div className="w-2/4">
          <h1 className="text-8xl font-bold title">Create this component</h1>
          <p className="descr pt-16 w-2/4 text-3xl font-sans ">
            Use component &lt;Task&gt; to create layout and style.scss to write
            your css, additionally you can use Tailind CSS
          </p>
          <p className="descr pt-20 font-sans text-2xl">increas.io</p>
        </div>
        <div className="w-2/4">
          <div className="rounded-full pink-round absolute"></div>
          <div className="rounded-full yellow-round absolute"></div>
        </div>
      </div>
    </>
  )
}
