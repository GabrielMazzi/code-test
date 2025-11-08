import { useState } from 'react';
import type { FormEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

type Props = {
    onSearch: (q: string) => void
    initial?: string
}

export default function SearchBar({ onSearch, initial = '' }: Props) {
    const [value, setValue] = useState(initial);

    function submit(e?: FormEvent) {
        e?.preventDefault();
        const trimmed = value.trim();
        if (trimmed) onSearch(trimmed);
    }

    return (
        <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search for repositories on GitHub (ex: react)"
                style={{ flex: 1, padding: '8px 12px' }}
                aria-label="search"
            />
            <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
                Search
            </Button>
        </form>
    )
};