import React, { useEffect, useState } from 'react'
    import { Helmet } from 'react-helmet-async'
    import { Link } from 'react-router-dom'
    import { getAllBreeds } from '../../services/api'

    export default function BreedsPage() {
      const [breeds, setBreeds] = useState([])
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const fetchBreeds = async () => {
          const data = await getAllBreeds()
          setBreeds(data)
          setLoading(false)
        }
        fetchBreeds()
      }, [])

      return (
        <>
          <Helmet>
            <title>All Dog Breeds - Dog Directory</title>
            <meta name="description" content="Explore our comprehensive directory of all dog breeds with detailed information, images, and care tips for each breed." />
          </Helmet>
          
          <div className="container">
            <h1>All Dog Breeds</h1>
            {loading ? (
              <p>Loading breeds...</p>
            ) : (
              <div className="breeds-grid">
                {breeds.map(breed => (
                  <div key={breed.id} className="breed-card">
                    <Link to={`/breeds/${breed.id}`}>
                      <h2>{breed.attributes.name}</h2>
                      <p>{breed.attributes.description}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )
    }
