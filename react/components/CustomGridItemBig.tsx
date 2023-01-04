import React, {ReactNode} from 'react'
import s from "./styles.css"


type Props = {
  element : ReactNode
}

function CustomGridItemBig({element} : Props) {
  return (
    <div className={s["grid__item--big"]} >{element}</div>
  )
}

export default CustomGridItemBig