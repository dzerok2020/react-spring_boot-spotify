import { PlayList, Music } from '../../types';
import { CardLikedSongs, CardList } from '../Card';
import './ListCardPlayList.css';

export interface ListCardPlayListProps {
  musics: Music[];
  playlists: PlayList[];
}

export const ListCardPlayList = ({ musics, playlists }: ListCardPlayListProps) => {
  return (
    <div className='list-card-play-list grid'>
      <div className='grid-item'>
        <CardLikedSongs musics={musics} />
      </div>
      {playlists.map(playlist => (
        <div key={playlist.id} className='card-item'>
          <CardList playlist={playlist} />
        </div>
      ))}
    </div>
  );
};
