import React from 'react'
import DashBoardBody from '../components/DashBoard/DashBoardBody/DashBoardBody'
import DashBoardMenuBar from '../components/DashBoard/DashBoardMenuBar';
import Loading from '../components/Loading/Loading';
import '../styles/screens/DashBoard.css'
export default function DashBoard() {
  
  return (
    <div className='DashBoardContainer'>
    <DashBoardMenuBar />
    <DashBoardBody />
    </div>  
  )
}