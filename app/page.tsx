'use client'

import { useState, useEffect } from 'react'
import CharacterGrid from './components/CharacterGrid'
import SearchBar from './components/SearchBar'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchCharacters()
  }, [searchTerm])

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
      )
      const data = await response.json()
      setCharacters(data.results.slice(0, 10)) // Limit to 10 characters
    } catch (error) {
      console.error('Error fetching characters:', error)
      setCharacters([])
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Rick & Morty Characters</h1>
      <SearchBar onSearch={handleSearch} />
      <CharacterGrid characters={characters} />
    </div>
  )
}

