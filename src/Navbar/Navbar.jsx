import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">QUIZINGO</div>
        <div className="menu">
            <div className="home"><a href="">Home</a></div>
            <div className="leaderboard"><a href="">Leaderboard</a></div>
        </div>
        <div className="logout">Logout</div>
    </div>
  )
}

export default Navbar