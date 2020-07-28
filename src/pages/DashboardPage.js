import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>DashBoardia</h1>
    <p>This is a dashboard</p>

    <Link to="/posts" className="button">
    View Posts
    </Link>
  </section>
)

export default DashboardPage
