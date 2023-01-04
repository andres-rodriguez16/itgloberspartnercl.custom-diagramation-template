import React, { ReactNode } from 'react'
import customGridSchemas from './schemas/custom-grid-schemas'
import CustomGridItemBig from './CustomGridItemBig'
import CustomGridItemsmall from './CustomGridItemSmall'
import s from"./styles.css"


type Props = {
  gridType : number,
  children : [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

function CustomGrid({gridType = 1, children}: Props) {
  console.log(gridType, "gridType")
  const gridTypeClass = `grid__${gridType}`
  return ( 
  <div className={s[gridTypeClass]}>
    <CustomGridItemBig
    element = {children[0]}
    />
    <CustomGridItemsmall
    elementOne = {children[1]}
    elementTwo = {children[2]}
    />
    <CustomGridItemsmall
    elementOne = {children[3]}
    elementTwo = {children[4]}
    />
  </div>
  )
}

CustomGrid.schema = customGridSchemas
export default CustomGrid 