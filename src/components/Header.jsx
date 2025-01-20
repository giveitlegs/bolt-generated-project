import React from 'react'
    import { Link } from 'react-router-dom'
    import Search from './Search'

    export default function Header() {
      return (
        <header className="header">
          <div className="container">
            <Link to="/" className="logo">Dog Directory</Link>
            <nav>
              <Link to="/breeds">All Breeds</Link>
            </nav>
            <Search />
          </div>
        </header>
      )
    }
