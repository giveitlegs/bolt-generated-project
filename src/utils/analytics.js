export function trackSearch(query, resultCount) {
      const searchData = {
        query,
        resultCount,
        timestamp: Date.now(),
        path: window.location.pathname
      }

      // Save to localStorage
      const searchHistory = JSON.parse(localStorage.getItem('searchAnalytics') || '[]')
      searchHistory.push(searchData)
      localStorage.setItem('searchAnalytics', JSON.stringify(searchHistory))

      // Send to analytics endpoint (if available)
      if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
        fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(searchData)
        })
      }
    }

    export function getSearchAnalytics() {
      return JSON.parse(localStorage.getItem('searchAnalytics') || '[]')
    }
