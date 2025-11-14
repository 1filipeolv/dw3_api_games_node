'use client';

import { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { movieService } from '@/services/api';
import styles from './MovieList.module.css';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await movieService.getAllMovies();
        setMovies(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar os filmes. Verifique se o backend está rodando.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.filmReel}>
            <div className={styles.reel}></div>
            <div className={styles.reel}></div>
          </div>
          <p>Carregando catálogo...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <span className={styles.errorIcon}>🎬</span>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🎥</span>
          <p>Nenhum filme encontrado no catálogo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.statsBar}>
        <span className={styles.stat}>
          <span className={styles.statIcon}>🎬</span>
          <span className={styles.statValue}>{movies.length}</span>
          <span className={styles.statLabel}>Filmes</span>
        </span>
      </div>
      
      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}