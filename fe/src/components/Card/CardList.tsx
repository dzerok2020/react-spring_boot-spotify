import { useRef, useState, useEffect } from 'react';
import { PlayList } from '../../types';
import './CardList.css';

export interface PlayListProps {
  playlist: PlayList;
}

export const CardList = ({ playlist }: PlayListProps) => {
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
    <div className='card-list'>
      <div
        ref={divRef}
        style={{ '--rows-height-card': `${width}px` } as React.CSSProperties}
        className='base-2/3'
      >
        {playlist.image === '' ? (
          <div className='card-svg'>
            <svg
              role='img'
              height='64'
              width='64'
              aria-hidden='true'
              data-testid='card-image-fallback'
              viewBox='0 0 24 24'
              data-encore-id='icon'
              className='Svg-sc-ytk21e-0 uPxdw'
            >
              <path d='M6 3h15v15.167a3.5 3.5 0 11-3.5-3.5H19V5H8v13.167a3.5 3.5 0 11-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 101.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 101.5 1.5v-1.5z'></path>
            </svg>
          </div>
        ) : (
          <img className='card-img' src={playlist.image} alt={playlist.title} />
        )}
      </div>
      <div className='base-1/3'>
        <h3 className='card-title'>{playlist.title}</h3>
        <span className='card-author'>By {playlist.author}</span>
      </div>
    </div>
  );
};
