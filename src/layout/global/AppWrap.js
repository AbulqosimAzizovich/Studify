import React from 'react'
import classNames from "classnames"

function AppWrap({className,...props}) {
  const compClass = classNames({
    "nk-wrap": true,
    [`${className}`]: className,
  });
  return (
    <div className={compClass}>
        {props.children}
    </div>
  )
}

export default AppWrap