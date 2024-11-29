
# Rick and Morty Character Browser

This is a Next.js application that allows users to browse and search for characters from the **Rick and Morty** TV show. It uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch character data.

## Features

- **Grid Display**: Browse characters in a visually appealing grid layout.
- **Search Functionality**: Search for characters by name with instant filtering.
- **Character Details**: View detailed information about each character in a modal.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

- **Framework**: Next.js 13 with App Router
- **Frontend**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ahmedalghaili/rick-and-morty-browser.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd rick-and-morty-browser
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
rick-and-morty-browser/
├──app/
│   ├── components/
│   │   ├── CharacterCard.tsx
│   │   ├── CharacterGrid.tsx
│   │   ├── CharacterModal.tsx
│   │   └── SearchBar.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── pages/            # Application pages
├── public/           # Static assets like images
├── styles/           # Tailwind and global styles
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies and scripts
```

## Deployment

This application can be deployed on platforms like Vercel for quick and easy hosting. After deployment, update this README with the live link.

## Contributing

Contributions are welcome! If you’d like to add new features or fix bugs:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.
