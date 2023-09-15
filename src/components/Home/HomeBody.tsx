import React from 'react'
import '../../styles/components/Home/HomeBody.css'
import HomeScreen from '../../media/images/codedino.png'
import Logo from '../../media/images/logo.webp'
function HomeBody() {
  return (
    <div className="home-body">
    <img className="logo" alt="Company Logo" src={HomeScreen} />
    <img className='logo2' alt="Logo2"  src={Logo} />
  </div>
  )
}

export default HomeBody