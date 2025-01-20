export const checkNetwork = async () => {
      try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 5000)
        
        await fetch('https://httpbin.org/get', {
          signal: controller.signal
        })
        
        clearTimeout(timeout)
        return true
      } catch (error) {
        return false
      }
    }

    export const withRetry = async (fn, retries = 3, delay = 1000) => {
      try {
        return await fn()
      } catch (error) {
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, delay))
          return withRetry(fn, retries - 1, delay * 2)
        }
        throw error
      }
    }
