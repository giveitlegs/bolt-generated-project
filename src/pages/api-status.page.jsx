import React, { useEffect, useState } from 'react'
    import { Helmet } from 'react-helmet-async'
    import { getApiStatus } from '../services/api'

    export default function ApiStatusPage() {
      const [status, setStatus] = useState(getApiStatus())
      const [lastUpdated, setLastUpdated] = useState(Date.now())

      useEffect(() => {
        const interval = setInterval(() => {
          setStatus(getApiStatus())
          setLastUpdated(Date.now())
        }, 5000)

        return () => clearInterval(interval)
      }, [])

      return (
        <>
          <Helmet>
            <title>API Status Dashboard - Dog Directory</title>
          </Helmet>
          
          <div className="container">
            <h1>API Status Dashboard</h1>
            <p>Last updated: {new Date(lastUpdated).toLocaleTimeString()}</p>
            
            <div className="status-grid">
              {Object.entries(status).map(([source, data]) => (
                <div key={source} className={`status-card ${data.healthy ? 'healthy' : 'unhealthy'}`}>
                  <h2>{source.toUpperCase()} API</h2>
                  <div className="status-details">
                    <p>Status: <strong>{data.healthy ? 'Healthy' : 'Unhealthy'}</strong></p>
                    <p>Last Check: {new Date(data.lastCheck).toLocaleTimeString()}</p>
                    <p>Response Time: {data.lastResponseTime || 'N/A'}ms</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )
    }
