import React, { useState, useEffect } from 'react'
    import { useInView } from 'react-intersection-observer'

    export default function LazyLoad({ children }) {
      const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px'
      })

      return (
        <div ref={ref}>
          {inView ? children : <div style={{ height: '200px' }} />}
        </div>
      )
    }
