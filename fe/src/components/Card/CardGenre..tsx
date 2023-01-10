import { Genre } from '../../types';
import './CardGenre.css';

interface CardGenreProps {
  genre: Genre;
  backgroundColor?: string;
}

export function CardGenre({ genre, backgroundColor }: CardGenreProps) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor ? backgroundColor : genre.backgroundColor,
      }}
      className='card-category'
    >
      <img className='card-image' src={genre.image} alt={genre.name} />
      <h3 className='card-name'>{genre.name}</h3>
    </div>
  );
}
