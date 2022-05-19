import React from 'react'
import "./style.scss"

export default function Task() {
    return (
        <div className="task">
          <div className="task__content">
            <h1 className="task__content--h1">
                Create this component
            </h1>
            <p className="task__content--text">
              Use component &#8249;Task&#8250; to create layout
              and style.scss to write your css, additionaly you
              can use Tailwind.CSS.
            </p>
            <p className="task__content--text">
              increas.io
            </p>
          </div>
          <div className="task__blur">
            <div className="task__blur--content">
            </div>          
          </div>
        </div>
    )
}
