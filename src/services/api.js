// Add this to the existing api.js
    let apiStatus = {
      primary: { healthy: true, lastCheck: Date.now() },
      fallback1: { healthy: true, lastCheck: Date.now() },
      fallback2: { healthy: true, lastCheck: Date.now() }
    }

    const updateApiStatus = (source, healthy) => {
      apiStatus[source] = {
        healthy,
        lastCheck: Date.now(),
        lastResponseTime: Date.now() - apiStatus[source].lastCheck
      }
    }

    export const getApiStatus = () => apiStatus
