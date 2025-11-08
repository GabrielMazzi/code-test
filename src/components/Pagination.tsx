import type { FC } from 'react';
import Button from '@mui/material/Button';

type Props = {
    page: number;
    totalPages: number;
    onPageChange: (p: number) => void;
}

const range = (from: number, to: number) => {
    const out: number[] = [];
    for (let i = from; i <= to; i++) out.push(i);
    return out;
}

const Pagination: FC<Props> = ({ page, totalPages, onPageChange }) => {
    // Define the number of visible page buttons
    const visible = 5;
    // Calculate the range of pages to display
    const half = Math.floor(visible / 2);
    // If the current page is near the start, adjust the end
    let start = Math.max(1, page - half);
    // If the current page is near the end, adjust the start
    const end = Math.min(totalPages, start + visible - 1);

    // Adjust start if we are at the end
    if (end - start + 1 < visible) {
        start = Math.max(1, end - visible + 1);
    }

    // Create an array of page numbers to display
    const pages = range(start, end);

    return (
        <nav className='navigation'>
            <Button onClick={() => onPageChange(1)} disabled={page === 1} variant="text" size="small">
                « First
            </Button>
            <Button onClick={() => onPageChange(page - 1)} disabled={page === 1} variant="text" size="small">
                ‹ Previous
            </Button>

            {pages.map((p) => (
                <Button
                    key={p}
                    onClick={() => onPageChange(p)}
                    variant={p === page ? 'contained' : 'text'}
                    size="small"
                >
                    {p}
                </Button>
            ))}

            <Button onClick={() => onPageChange(page + 1)} disabled={page === totalPages} variant="text" size="small">
                Next ›
            </Button>
            <Button onClick={() => onPageChange(totalPages)} disabled={page === totalPages} variant="text" size="small">
                Last »
            </Button>
        </nav>
    )
};

export default Pagination;