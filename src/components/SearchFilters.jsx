import React from 'react'

    export default function SearchFilters({ filters, setFilters }) {
      const filterOptions = {
        sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
        temperaments: [
          'Affectionate', 'Alert', 'Energetic', 'Friendly', 'Gentle',
          'Intelligent', 'Loyal', 'Playful', 'Protective', 'Social'
        ],
        groups: [
          'Toy', 'Working', 'Herding', 'Hound', 'Terrier',
          'Sporting', 'Non-Sporting', 'Mixed', 'Other'
        ],
        coatTypes: [
          'Short', 'Medium', 'Long', 'Curly', 'Wire',
          'Smooth', 'Double', 'Silky', 'Hairless'
        ],
        energyLevels: ['Low', 'Medium', 'High'],
        goodWith: ['Children', 'Other Dogs', 'Strangers', 'Cats']
      }

      const handleFilterChange = (type, value) => {
        setFilters(prev => ({
          ...prev,
          [type]: prev[type].includes(value) 
            ? prev[type].filter(v => v !== value)
            : [...prev[type], value]
        }))
      }

      return (
        <div className="search-filters">
          <div className="filter-group">
            <h4>Size</h4>
            {filterOptions.sizes.map(size => (
              <label key={size}>
                <input
                  type="checkbox"
                  checked={filters.sizes.includes(size)}
                  onChange={() => handleFilterChange('sizes', size)}
                />
                {size}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Temperament</h4>
            {filterOptions.temperaments.map(temp => (
              <label key={temp}>
                <input
                  type="checkbox"
                  checked={filters.temperaments.includes(temp)}
                  onChange={() => handleFilterChange('temperaments', temp)}
                />
                {temp}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Group</h4>
            {filterOptions.groups.map(group => (
              <label key={group}>
                <input
                  type="checkbox"
                  checked={filters.groups.includes(group)}
                  onChange={() => handleFilterChange('groups', group)}
                />
                {group}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Coat Type</h4>
            {filterOptions.coatTypes.map(coat => (
              <label key={coat}>
                <input
                  type="checkbox"
                  checked={filters.coatTypes.includes(coat)}
                  onChange={() => handleFilterChange('coatTypes', coat)}
                />
                {coat}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Energy Level</h4>
            {filterOptions.energyLevels.map(level => (
              <label key={level}>
                <input
                  type="checkbox"
                  checked={filters.energyLevels.includes(level)}
                  onChange={() => handleFilterChange('energyLevels', level)}
                />
                {level}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Good With</h4>
            {filterOptions.goodWith.map(item => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.goodWith.includes(item)}
                  onChange={() => handleFilterChange('goodWith', item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      )
    }
