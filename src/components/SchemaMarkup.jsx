import React from 'react'
    import { Breed } from 'schema-dts'

    export default function SchemaMarkup({ breed, facts }) {
      const { attributes } = breed
      const breedSchema = {
        "@context": "https://schema.org",
        "@type": "Breed",
        "name": attributes.name,
        "scientificName": attributes.scientific_name,
        "description": attributes.description,
        "image": `https://source.unsplash.com/400x300/?${attributes.name.replace(' ', '-')}-dog`,
        "alternateName": attributes.other_names || attributes.name,
        "characteristics": {
          "lifeSpan": attributes.life_span,
          "size": attributes.size,
          "weight": attributes.weight,
          "height": attributes.height,
          "temperament": attributes.temperament,
          "grooming": attributes.grooming,
          "exercise": attributes.exercise_recommendations
        },
        "faqs": facts.slice(0, 6).map(fact => ({
          "@type": "Question",
          "name": fact.attributes.body,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": fact.attributes.answer
          }
        })),
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://dogdirectory.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Breeds",
              "item": "https://dogdirectory.com/breeds"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": attributes.name,
              "item": `https://dogdirectory.com/breeds/${breed.id}`
            }
          ]
        }
      }

      return (
        <script type="application/ld+json">
          {JSON.stringify(breedSchema)}
        </script>
      )
    }
