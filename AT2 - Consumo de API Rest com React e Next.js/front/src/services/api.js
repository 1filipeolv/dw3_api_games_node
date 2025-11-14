const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const movieService = {
  async getAllMovies() {
    try {
      const response = await fetch(`${API_URL}/movies`);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar filmes');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  },

  async getMovieById(id) {
    try {
      const response = await fetch(`${API_URL}/movies/${id}`);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar filme');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  }
};