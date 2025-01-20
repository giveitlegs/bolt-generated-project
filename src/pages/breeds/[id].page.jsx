import React, { useEffect, useState } from 'react'
    import { Helmet } from 'react-helmet-async'
    import { useParams } from 'react-router-dom'
    import { getBreedDetails, getBreedFacts, getSimilarBreeds } from '../../services/api'
    import Breadcrumbs from '../../components/Breadcrumbs'
    import SchemaMarkup from '../../components/SchemaMarkup'
    import RelatedBreeds from '../../components/RelatedBreeds'
    import AMPImage from '../../components/AMPImage'

    export default function BreedPage() {
      const { id } = useParams()
      const [breed, setBreed] = useState(null)
      const [facts, setFacts] = useState([])
      const [similarBreeds, setSimilarBreeds] = useState([])
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const fetchData = async () => {
          const [breedData, factsData] = await Promise.all([
            getBreedDetails(id),
            getBreedFacts(id)
          ])
          setBreed(breedData)
          setFacts(factsData)
          
          if (breedData) {
            const similar = await getSimilarBreeds(
              id,
              breedData.attributes.size,
              breedData.attributes.temperament
            )
            setSimilarBreeds(similar)
          }
          
          setLoading(false)
        }
        fetchData()
      }, [id])

      // ... rest of the component ...

      return (
        <>
          {/* ... existing head content ... */}

          <div className="container">
            {/* ... existing content ... */}

            {similarBreeds.length > 0 && (
              <RelatedBreeds breeds={similarBreeds} />
            )}
          </div>
        </>
      )
    }
