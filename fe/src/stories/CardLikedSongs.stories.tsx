import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardLikedSongs } from '../components/Card';

export default {
  title: 'Components/CardLikedSongs',
  component: CardLikedSongs,
} as ComponentMeta<typeof CardLikedSongs>;

const Template: ComponentStory<typeof CardLikedSongs> = args => <CardLikedSongs {...args} />;

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
};
