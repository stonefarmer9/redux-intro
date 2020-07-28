import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav>
    <section>
      <Link to="/">DashBoardia</Link>
      <Link to="/posts">Posts</Link>
    </section>
  </nav>
)
