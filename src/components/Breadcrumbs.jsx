import React from 'react'
    import { Link } from 'react-router-dom'

    export default function Breadcrumbs({ items }) {
      return (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            {items.map((item, index) => (
              <li key={index}>
                {item.path ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < items.length - 1 && ' > '}
              </li>
            ))}
          </ol>
        </nav>
      )
    }
