import React, { useState, useEffect, useRef } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { getAllBreeds } from '../services/api'
    import SearchFilters from './SearchFilters'
    import VoiceSearch from './VoiceSearch'
    import SearchHistory from './SearchHistory'
    import { trackSearch } from '../utils/analytics'

    export default function Search() {
      const [query, setQuery] = useState('')
      const [results, setResults] = useState([])
      const [isLoading, setIsLoading] = useState(false)
      const [showFilters, setShowFilters] = useState(false)
      const [filters, setFilters] = useState({
        size: '',
        temperament: '',
        group: ''
      })
      const [history, setHistory] = useState(
        JSON.parse(localStorage.getItem('searchHistory')) || []
      )
      const [isVoiceSearch, setIsVoiceSearch] = useState(false)
      const navigate = useNavigate()
      const inputRef = useRef(null)

      useEffect(() => {
        const searchBreeds = async () => {
          if (query.length < 2) {
            setResults([])
            return
          }

          setIsLoading(true)
          try {
            const breeds = await getAllBreeds()
            const filtered = breeds.filter(breed => {
              const matchesQuery = breed.attributes.name.toLowerCase().includes(query.toLowerCase())
              const matchesFilters = (
                (!filters.size || breed.attributes.size === filters.size) &&
                (!filters.temperament || breed.attributes.temperament.includes(filters.temperament)) &&
                (!filters.group || breed.attributes.group === filters.group)
              )
              return matchesQuery && matchesFilters
            })
            
            setResults(filtered.slice(0, 5))
            trackSearch(query, filtered.length)
          } catch (error) {
            console.error('Search error:', error)
          } finally {
            setIsLoading(false)
          }
        }

        const debounceTimer = setTimeout(searchBreeds, 300)
        return () => clearTimeout(debounceTimer)
      }, [query, filters])

      const handleSelect = (breed) => {
        navigate(`/breeds/${breed.id}`)
        addToHistory(breed)
        setQuery('')
        setResults([])
      }

      const addToHistory = (breed) => {
        const newHistory = [
          {
            id: breed.id,
            name: breed.attributes.name,
            timestamp: Date.now()
          },
          ...history.filter(item => item.id !== breed.id)
        ].slice(0, 5)
        
        setHistory(newHistory)
        localStorage.setItem('searchHistory', JSON.stringify(newHistory))
      }

      const handleVoiceResult = (transcript) => {
        setQuery(transcript)
        inputRef.current.focus()
      }

      return (
        <div className="search-container">
          <div className="search-input-container">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search breeds..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <VoiceSearch 
              onResult={handleVoiceResult}
              isActive={isVoiceSearch}
              setIsActive={setIsVoiceSearch}
            />
            <button 
              className="filter-button"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </button>
          </div>

          {showFilters && (
            <SearchFilters 
              filters={filters}
              setFilters={setFilters}
            />
          )}

          {isLoading && <div className="search-loading">Loading...</div>}

          {results.length > 0 && (
            <div className="search-results">
              {results.map(breed => (
                <div
                  key={breed.id}
                  className="search-result"
                  onClick={() => handleSelect(breed)}
                >
                  {breed.attributes.name}
                </div>
              ))}
            </div>
          )}

          {!query && history.length > 0 && (
            <SearchHistory 
              history={history}
              onSelect={handleSelect}
            />
          )}
        </div>
      )
    }
