// bitFlyer - SPOTTED Inc. Coding Test - GitHub Repositories Search
// Gabriel Mazzi Ferreira Franco

import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import RepositoryList from './components/RepositoryList';
import { searchRepos, type Repository } from './api/search';

const PER_PAGE = 10;

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch repositories when query or page changes
  useEffect(() => {
    if (!query) {
      setRepositories([]);
      setTotalPages(0);
      return;
    }

    let mounted = true;
    setLoading(true);
    setError(null);

    // Fetch repositories from GitHub API
    searchRepos(query, page, PER_PAGE)
      .then((res) => {
        if (!mounted)
          return;

        setRepositories(res.items);
        const capped = Math.min(res.total_count, 1000); // GitHub caps search results
        setTotalPages(Math.max(1, Math.ceil(capped / PER_PAGE)));
      })
      .catch((err) => {
        if (!mounted)
          return;

        setError(err.message || 'Erro ao buscar');
      })
      .finally(() => {
        if (!mounted)
          return;

        setLoading(false);
      })

    return () => {
      mounted = false;
    }
  }, [query, page])

  // Handle new search queries
  function handleSearch(q: string) {
    setQuery(q);
    setPage(1);
  }

  return (
    <div style={{ maxWidth: 900, margin: '28px auto', padding: '0 16px' }}>
      <h1>GitHub Repositories Search</h1>
      <h4>bitFlyer Coding Test - Gabriel Franco</h4>

      <SearchBar onSearch={handleSearch} initial={query} />

      {error &&
        <div style={{ color: 'crimson' }}>
          {error}
        </div>
      }

      {loading ?
        <div>Loading...</div>
        : <RepositoryList repositories={repositories} hasSearched={!!query} />
      }

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onPageChange={(p) => setPage(p)} />
      )}
    </div>
  )
};

export default App;