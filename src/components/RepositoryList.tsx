import type { Repository } from '../api/search';
import MuiList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
    repositories: Repository[];
    hasSearched?: boolean;
};

export default function RepositoryList({ repositories, hasSearched = false }: Props) {
    //if no search has been made yet
    if (!repositories.length && !hasSearched)
        return null;

    //if no repositories found
    if (!repositories.length)
        return <div>No repositories found.</div>;

    //list of repositories
    return (
        <MuiList sx={{ padding: 0 }}>
            {repositories.map((repository) => (
                <ListItem
                    key={repository.id}
                    sx={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        borderBottom: '1px solid #eee',
                        py: 1.5
                    }}
                >
                    <Link
                        href={repository.html_url}
                        target="_blank"
                        rel="noreferrer"
                        sx={{ fontWeight: 600, textDecoration: 'none', mb: 0.5 }}
                    >
                        {repository.full_name}
                    </Link>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                        {repository.description && repository.description.length > 200
                            ? `${repository.description.substring(0, 200)}(...)`
                            : repository.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <Typography variant="caption">
                            ⭐ {repository.stargazers_count}
                        </Typography>
                        <Typography variant="caption">
                            •
                        </Typography>
                        <Typography variant="caption">
                            {repository.language ?? '—'}
                        </Typography>
                    </Box>
                </ListItem>
            ))}
        </MuiList>
    );
};