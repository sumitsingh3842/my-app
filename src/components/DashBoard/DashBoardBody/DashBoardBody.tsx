import React from 'react'
import DashBoardAnatomy from './DashBoardAnatomy'
import DashBoardCode from './DashBoardCode'
import DashBoardDiagram from './DashBoardDiagram'
import '../../../styles/components/DashBoard/DashBoardBody/DashBoardBody.css'
function DashBoardBody() {
  return (
    <div className='DashBoardBodyContainer'>
        <DashBoardAnatomy />
        <DashBoardDiagram />
        <DashBoardCode />
    </div>
  )
}

export default DashBoardBody