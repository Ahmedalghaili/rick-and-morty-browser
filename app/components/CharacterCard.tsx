'use client'

import { useState } from 'react'
import CharacterModal from './CharacterModal'

interface Character {
  id: number
  name: string
  status: string
  species: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  image: string
}

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
          <p className="text-gray-600 mb-2">Status: {character.status}</p>
          <p className="text-gray-600">Last known location: {character.location.name}</p>
        </div>
      </div>

      <CharacterModal 
        character={character}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

