import React from "react"

import "./style.scss"

export default function Task() {
  return (
    <>
      <div className="wrapper">
        <div className="task p-0 m-0">
          <div className="main-wrapper">
            <span className="heading">
              Create this <br /> component
            </span>

            <div className="text-wrapper">
              <span>
                Use component &lt;Task&gt; to <br /> create layout and
                style.scss to
                <br />
                write your css, additionally <br /> you can use Tailwind CSS.
              </span>

              <p>increas.io</p>
            </div>
          </div>
        </div>
        <div className="radial-gradient"></div>
      </div>

      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;900&display=swap"
          rel="stylesheet"
        />
      </>
    </>
  )
}
