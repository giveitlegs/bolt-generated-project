const cache = new Map()

    export function memoize(fn) {
      return async function(...args) {
        const key = JSON.stringify(args)
        
        if (cache.has(key)) {
          return cache.get(key)
        }

        try {
          const result = await fn(...args)
          cache.set(key, result)
          return result
        } catch (error) {
          console.error('Cache error:', error)
          throw error
        }
      }
    }

    export function clearCache() {
      cache.clear()
    }
