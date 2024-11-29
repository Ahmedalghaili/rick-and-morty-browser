interface Character {
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
  
  interface CharacterModalProps {
    character: Character
    isOpen: boolean
    onClose: () => void
  }
  
  export default function CharacterModal({ character, isOpen, onClose }: CharacterModalProps) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full overflow-hidden">
          <div className="relative">
            <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
            
            <div className={`mb-4 p-2 text-center text-white rounded ${
              character.status.toLowerCase() === 'alive' ? 'bg-green-600' : 
              character.status.toLowerCase() === 'dead' ? 'bg-red-600' : 
              'bg-gray-600'
            }`}>
              {character.status}
            </div>
  
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Gender:</span>
                <span>{character.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Location:</span>
                <span>{character.location.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Origin:</span>
                <span>{character.origin.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Species:</span>
                <span>{character.species}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  