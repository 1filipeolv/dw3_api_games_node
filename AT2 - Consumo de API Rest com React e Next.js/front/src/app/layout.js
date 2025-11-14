import './globals.css';

export const metadata = {
  title: 'CineVault - Catálogo Premium de Filmes',
  description: 'Explore nossa coleção exclusiva de filmes com design cinematográfico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}