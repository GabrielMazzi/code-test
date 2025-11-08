export type Repository = {
    id: number;
    full_name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
};

export type SearchResult = {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
};

// GitHub API base URL
const api = 'https://api.github.com';

export async function searchRepos(query: string, page = 1, per_page = 10): Promise<SearchResult> {
    // Get GitHub token from environment variables
    const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;

    // Build query parameters
    const params = new URLSearchParams({
        q: query,
        page: String(page),
        per_page: String(per_page),
        sort: 'stars'
    });

    // Make the API request
    const res = await fetch(`${api}/search/repositories?${params.toString()}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            ...(token ? { Authorization: `token ${token}` } : {})
        }
    });

    // Handle non-OK responses
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`GitHub API error ${res.status}: ${text}`);
    }

    // Parse and return the JSON response
    const data = await res.json();

    // Type assertion
    return data as SearchResult;
}