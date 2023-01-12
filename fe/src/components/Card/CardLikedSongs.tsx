import { AiFillPlayCircle } from 'react-icons/ai';
import { Music } from '../../types';
import './CardLikedSongs.css';

export interface CardLikedSongsProps {
  musics: Music[];
}

export const CardLikedSongs = ({ musics }: CardLikedSongsProps) => {
  const lastMusic = musics.slice(-1)[0];
  return (
    <div className='card-liked-song'>
      <div className='card-liked-song__item'>
        <div className='item-top'>
          {musics.map(music => (
            <span key={music.id} className='card-liked-song__author'>
              {music.author}{' '}
              <span className='card-liked-song__title'>
                {`${music.title}${lastMusic.id === music.id ? '' : ' • '}`}
              </span>
            </span>
          ))}
        </div>
        <div className='item-bot'>
          <h2 className='card-liked-song-title'>Liked Songs</h2>
          <span>{musics.length} liked songs</span>
        </div>
        <AiFillPlayCircle size={70} className='card-liked-song-button' color='#1ed760' />
      </div>
    </div>
  );
};
