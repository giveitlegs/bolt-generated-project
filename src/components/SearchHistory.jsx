import React from 'react'

    export default function SearchHistory({ history, onSelect }) {
      return (
        <div className="search-history">
          <h4>Recent Searches:</h4>
          {history.map(item => (
            <div
              key={item.id}
              className="history-item"
              onClick={() => onSelect({ id: item.id, attributes: { name: item.name } })}
            >
              {item.name}
              <span className="timestamp">
                {new Date(item.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      )
    }
