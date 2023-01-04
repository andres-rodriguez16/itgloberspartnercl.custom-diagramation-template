import React, {ReactNode} from 'react'
import s from "./styles.css"

type Props = {
  elementOne : ReactNode,
  elementTwo : ReactNode
}

function CustomGridItemSmall ({elementOne, elementTwo} : Props) {
  return (
    <div className={s["grid__item--small"]}>
      {elementOne}
      {elementTwo}  
    </div>
  )
}

export default CustomGridItemSmall;