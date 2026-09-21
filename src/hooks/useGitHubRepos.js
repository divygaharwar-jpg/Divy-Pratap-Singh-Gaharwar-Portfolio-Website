import { useState, useEffect } from 'react';

const FALLBACK_REPOS = [
  {
    id: 101,
    name: "gemini-builder-hackathon",
    description: "Web application prototype built during the Gemini Builder Hackathon sprint.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/DivyPratapSingh/gemini-builder-hackathon",
    topics: ["javascript", "web", "hackathon"]
  },
  {
    id: 102,
    name: "summer-of-code-project",
    description: "Interactive frontend application developed during Summer of Code.",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/DivyPratapSingh/summer-of-code-project",
    topics: ["html", "css", "javascript"]
  },
  {
    id: 103,
    name: "hackbros-26",
    description: "Collaborative web platform prototype engineered for HackBros 26.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/DivyPratapSingh/hackbros-26",
    topics: ["frontend", "hackathon", "web"]
  },
  {
    id: 104,
    name: "portfolio-website",
    description: "Modern developer portfolio built with React.js, Vite, Tailwind CSS, and Framer Motion.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/DivyPratapSingh/portfolio-website",
    topics: ["react", "portfolio", "vite"]
  }
];

export function useGitHubRepos(username = "DivyPratapSingh") {
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(Boolean(username));
  const [error, setError] = useState(null);
  const [isFallback, setIsFallback] = useState(!username);

  useEffect(() => {
    if (!username) return;

    let isMounted = true;
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
            setIsFallback(false);
          } else {
            setRepos(FALLBACK_REPOS);
            setIsFallback(true);
          }
        }
      } catch (err) {
        if (isMounted) {
          console.warn("Using fallback GitHub repo data due to fetch error:", err.message);
          setError(err.message);
          setRepos(FALLBACK_REPOS);
          setIsFallback(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { repos, loading, error, isFallback };
}
