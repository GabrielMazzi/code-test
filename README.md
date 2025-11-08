# bitFlyer Coding Test - GitHub Repository Search

## 📋 About the Project

This is a technical test developed for the **bitFlyer** selection process. The project consists of a web application for searching GitHub repositories using the official GitHub API.

**Candidate:** Gabriel Mazzi Ferreira Franco

## 🚀 Technologies Used

- **React 19** - Library for building user interfaces
- **TypeScript** - JavaScript superset with static typing
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Design system and UI components
- **GitHub REST API** - Repository search API

## ✨ Features

- 🔍 Search GitHub repositories by keywords
- 📄 Paginated list of results (10 per page)
- ⭐ Display repository information:
  - Full name
  - Description (limited to 200 characters)
  - Star count
  - Primary language
- 🔗 Direct link to each repository
- 📱 Responsive interface with Material-UI components
- ⚡ GitHub Token authentication support (optional)

## 🛠️ How to Run the Project

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation and Execution

1. Clone the repository:
```bash
git clone https://github.com/GabrielMazzi/coding-test.git
cd coding-test
```

2. Install dependencies:
```bash
npm install
```

3. Run the project in development mode:
```bash
npm run dev
```

4. Access in the browser:
```
http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

## 🔑 GitHub Token Configuration (Optional)

The GitHub API allows searches without authentication, but with a reduced rate limit. To increase this limit, you can configure a Personal Access Token:

1. Generate a token at: [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)

2. Create a `.env` file in the project root:
```env
VITE_GITHUB_TOKEN=your_token_here
```

3. Restart the development server

> **Note:** The token is optional and the application works without it, but with a lower request limit.

## 📁 Project Structure

```
src/
├── api/
│   └── search.ts          # GitHub API service calls
├── components/
│   ├── List.tsx           # Repository list (Material-UI)
│   ├── Pagination.tsx     # Pagination component
│   └── SearchBar.tsx      # Search bar with icon
├── App.tsx                # Main component
├── App.css                # Global styles
└── main.tsx               # Application entry point
```

## 🧪 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Generates production build
- `npm run preview` - Preview production build
- `npm run lint` - Runs ESLint linter

## 🎯 Technical Decisions

### Why Material-UI?
- Consistent and professional design system
- Accessible and responsive components by default
- Facilitates maintenance and scalability
- Good integration with React and TypeScript

### Why Vite?
- Extremely fast build
- Efficient Hot Module Replacement (HMR)
- Minimal configuration
- Native TypeScript support

### Architecture
- Clear separation between API logic (`api/search.ts`) and UI components
- Reusable and modular components
- Strong typing with TypeScript to prevent errors

## 📝 Requirements Met

✅ Repository search via GitHub API  
✅ Paginated list of results  
✅ Clean and responsive interface  
✅ TypeScript with complete typing  
✅ Proper componentization  
✅ Error handling and loading states  
✅ Clean and well-documented code  

## 👤 Author

**Gabriel Mazzi Ferreira Franco**
- GitHub: [@GabrielMazzi](https://github.com/GabrielMazzi)

---

**Developed as part of the bitFlyer selection process**
