import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListCardPlayList } from '../components/ListCard';

export default {
  title: 'Components/ListCardPlayList',
  component: ListCardPlayList,
} as ComponentMeta<typeof ListCardPlayList>;

const Template: ComponentStory<typeof ListCardPlayList> = arg => <ListCardPlayList {...arg} />;
export const Default = Template.bind({});
Default.args = {
  musics: [
    {
      id: 1,
      title: 'The Best of 2020',
      author: 'Spotify',
      image: 'https://i.scdn.co/image/ab67706f00000003a0b4f2b0b1c2c3d4e5f6f7f8',
      url: '/playlist/37i9dQZF1DXcBWIGoYBM5M',
    },
    {
      id: 2,
      title: 'The Best of 2019',
      author: 'Spotify',
      image: 'https://i.scdn.co/image/ab67706f00000003a0b4f2b0b1c2c3d4e5f6f7f8',
      url: '/playlist/37i9dQZF1DXcBWIGoYBM5M',
    },
    {
      id: 3,
      title: 'to all of you',
      author: 'Taylor Swift',
      image: 'https://i.scdn.co/image/ab67706f00000003a0b4f2b0b1c2c3d4e5f6f7f8',
      url: '/playlist/37i9dQZF1DXcBWIGoYBM5M',
    },
  ],
  playlists: [
    {
      id: 1,
      title: 'My Playlist #1',
      author: 'Dzerok',
      image: '',
      url: '',
    },
    {
      id: 2,
      title: 'My Playlist #2',
      author: 'Dzerok',
      image:
        'https://images.macrumors.com/t/8k-7BpnxpJjF0uXF-JQmDnaejPY=/800x0/article-new/2018/05/apple-music-note-800x420.jpg',
      url: '',
    },
    {
      id: 3,
      title: 'My Playlist #3',
      author: 'Dzerok',
      image: '',
      url: '',
    },
    {
      id: 4,
      title: 'My Playlist #4',
      author: 'Dzerok',
      image: '',
      url: '',
    },
  ],
};
