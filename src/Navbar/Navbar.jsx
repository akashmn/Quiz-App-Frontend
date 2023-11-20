import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [active, setActive] = useState('home')

  return (
    <div className="navbar">
        <div className="logo">QUIZINGO</div>
        <div className="menu">
            <div className="home"><a href="#" onClick={()=> setActive('home')} className={active === 'home' ? 'active' : '' }>Home</a></div>
            <div className="leaderboard"><a href="#" onClick={()=> setActive('leaderboard')} className={active === 'leaderboard' ? 'active' : '' }>Leaderboard</a></div>
        </div>
        <div className="logout">Logout</div>
    </div>
  )
}

export default Navbar