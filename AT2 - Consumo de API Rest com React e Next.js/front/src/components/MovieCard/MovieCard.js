import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const formatDuration = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>{movie.title}</h3>
          <span className={styles.year}>{movie.year}</span>
        </div>
      </div>
      
      <div className={styles.cardBody}>
        {movie.descriptions && (
          <>
            {movie.descriptions.genre && (
              <div className={styles.infoRow}>
                <span className={styles.label}>🎭 Gênero</span>
                <span className={styles.value}>{movie.descriptions.genre}</span>
              </div>
            )}
            
            {movie.descriptions.director && (
              <div className={styles.infoRow}>
                <span className={styles.label}>🎬 Diretor</span>
                <span className={styles.value}>{movie.descriptions.director}</span>
              </div>
            )}
            
            {movie.descriptions.duration && (
              <div className={styles.infoRow}>
                <span className={styles.label}>⏱️ Duração</span>
                <span className={styles.value}>{formatDuration(movie.descriptions.duration)}</span>
              </div>
            )}
            
            {movie.descriptions.rating && (
              <div className={styles.rating}>
                <div className={styles.ratingContainer}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, index) => (
                      <span 
                        key={index}
                        className={index < Math.floor(movie.descriptions.rating) ? styles.starFilled : styles.starEmpty}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className={styles.ratingValue}>
                    {movie.descriptions.rating.toFixed(1)}/5.0
                  </span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      
      <div className={styles.cardFooter}>
        <div className={styles.viewButton}>
          <span>Ver Detalhes</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </div>
  );
}