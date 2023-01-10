import { useRef, useState, useEffect } from 'react';
import { Genre } from '../../types';
import { CardGenre } from '../Card';
import './ListCardGenre.css';

interface ListCardGenreProps {
  genres: Genre[];
}

export const ListCardGenre = ({ genres }: ListCardGenreProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  function handleSetWidth() {
    if (divRef.current) {
      divRef.current.lastElementChild
        ? setWidth(divRef.current.lastElementChild.clientWidth)
        : setWidth(0);
    }
  }

  useEffect(() => {
    handleSetWidth();
    const handleResize = () => {
      handleSetWidth();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={divRef}
      className='list-card-genre grid'
      style={{ '--rows-height': `${width}px` } as React.CSSProperties}
    >
      {genres.map(genre => (
        <CardGenre key={genre.id} genre={genre} />
      ))}
    </div>
  );
};
