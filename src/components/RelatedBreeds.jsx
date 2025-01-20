import React from 'react'
    import { Link } from 'react-router-dom'
    import AMPImage from './AMPImage'

    export default function RelatedBreeds({ breeds }) {
      return (
        <section className="related-breeds">
          <h3>Similar Breeds You Might Like</h3>
          <div className="breeds-grid">
            {breeds.map(breed => (
              <div key={breed.id} className="breed-card">
                <Link to={`/breeds/${breed.id}`}>
                  <AMPImage
                    src={`https://source.unsplash.com/300x200/?${breed.attributes.name.replace(' ', '-')}-dog`}
                    alt={`${breed.attributes.name} dog`}
                    width={300}
                    height={200}
                  />
                  <h4>{breed.attributes.name}</h4>
                  <p>{breed.attributes.description.substring(0, 100)}...</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )
    }
