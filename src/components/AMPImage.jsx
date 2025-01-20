import React from 'react'
    import { AmpImg } from 'react-amphtml'

    export default function AMPImage({ src, alt, width, height }) {
      const optimizedSrc = src.replace('unsplash.com', 'images.unsplash.com')
        + '&auto=format&fit=crop&w=' + width + '&h=' + height + '&q=80'
      
      return (
        <AmpImg
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
          className="amp-image"
        />
      )
    }
