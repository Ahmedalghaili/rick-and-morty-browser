import CharacterCard from './CharacterCard'

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

interface CharacterGridProps {
  characters: Character[]
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

