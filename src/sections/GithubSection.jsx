import React, { useState, useEffect } from 'react';
import { ExternalLink, GitBranch, Star, BookOpen, Clock, AlertCircle, ArrowUpRight } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import { portfolioData } from '../data/portfolioData';

export default function GithubSection() {
  const { personal } = portfolioData;
  const [profile, setProfile] = useState({
    login: personal.githubUsername,
    avatar_url: 'https://avatars.githubusercontent.com/u/233211129?v=4',
    public_repos: 1,
    html_url: personal.githubUrl,
    created_at: '2025-09-19T05:24:53Z'
  });
  const [repos, setRepos] = useState([
    {
      name: 'student-management-system',
      html_url: 'https://github.com/etachi001-cloud/student-management-system',
      description: 'Full-stack Student Management System with React, Node.js, MongoDB',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${personal.githubUsername}`),
          fetch(`https://api.github.com/users/${personal.githubUsername}/repos?sort=updated`)
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();
          if (isMounted) {
            setProfile(userData);
            if (Array.isArray(reposData) && reposData.length > 0) {
              setRepos(reposData);
            }
          }
        }
      } catch (err) {
        // Fallback to verified local defaults without broken UI
        console.info('GitHub live fetch fallback used:', err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, [personal.githubUsername]);

  return (
    <section id="github" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GithubIcon size={14} />
            <span>Open Source & Code</span>
          </div>
          <h2 className="section-title">
            GitHub <span className="text-gradient-purple">Activity</span>
          </h2>
          <p className="section-subtitle">
            Direct visibility into my public repository commits, source code architectures, and developer profile.
          </p>
        </div>

        {/* GitHub Grid */}
        <div className="github-grid">
          {/* Left: GitHub Profile Card */}
          <div className="github-profile-card glass-card">
            <div className="github-user-row">
              <img
                src={profile.avatar_url}
                alt={`${personal.name} GitHub Avatar`}
                className="github-avatar"
                onError={(e) => {
                  e.target.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                  {personal.name}
                </h3>
                <div style={{ fontSize: '0.88rem', color: 'var(--purple-300)', fontFamily: 'var(--font-mono)' }}>
                  @{profile.login || personal.githubUsername}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
              Building projects across Python, Data systems, and Web Engineering. Check out my repositories for code implementation details.
            </p>

            {/* Profile Statistics Grid */}
            <div className="github-stats-grid">
              <div className="github-stat-pill">
                <span className="github-stat-num">{profile.public_repos || 1}</span>
                <span className="github-stat-lbl">Public Repos</span>
              </div>

              <div className="github-stat-pill">
                <span className="github-stat-num">Active</span>
                <span className="github-stat-lbl">Commit Status</span>
              </div>
            </div>

            {/* Direct Profile CTA */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: 'auto' }}
            >
              <GithubIcon size={16} />
              <span>Visit GitHub Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Right: Featured / Public Repository Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {repos.map((repo) => (
              <div key={repo.name} className="repo-card glass-card glass-card-interactive">
                <div>
                  <div className="repo-header">
                    <div className="repo-name">
                      <BookOpen size={18} color="var(--purple-400)" />
                      <span>{repo.name}</span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <span>Code</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  <p className="repo-desc" style={{ marginTop: '0.75rem' }}>
                    {repo.description || 'Full-stack Student Management System with modern web technologies.'}
                  </p>
                </div>

                <div className="repo-footer">
                  <div className="repo-lang">
                    <span className="lang-dot" />
                    <span>{repo.language || 'JavaScript / Python'}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: '#94a3b8' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Star size={14} /> {repo.stargazers_count || 0}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <GitBranch size={14} /> {repo.forks_count || 0}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Extensible note */}
            <div
              className="glass-card"
              style={{
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                color: '#94a3b8'
              }}
            >
              <span>More open-source repositories being created and pushed regularly.</span>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--purple-300)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}
              >
                <span>Explore all</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
