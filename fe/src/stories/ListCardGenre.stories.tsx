import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListCardGenre } from '../components/ListCard';

export default {
  title: 'Components/ListCardGenre',
  component: ListCardGenre,
} as ComponentMeta<typeof ListCardGenre>;

const Template: ComponentStory<typeof ListCardGenre> = args => <ListCardGenre {...args} />;
export const Default = Template.bind({});
Default.args = {
  genres: [
    {
      id: 1,
      name: 'Podcasts',
      image: '	https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
      backgroundColor: 'rgb(39, 133, 106)',
      url: '/genre/podcasts-web',
    },
    {
      id: 2,
      name: 'Adventure',
      image: 'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
      backgroundColor: 'rgb(30, 50, 100)',
      url: '/genre/12',
    },
    {
      id: 3,
      name: 'Animation',
      image: 'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
      backgroundColor: 'rgb(141, 103, 171)',
      url: '/genre/16',
    },
    {
      id: 4,
      name: 'Comedy',
      image: 'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
      backgroundColor: 'rgb(232, 17, 91)',
      url: '/genre/35',
    },
    {
      id: 5,
      name: 'Crime',
      image: 'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
      backgroundColor: 'rgb(156, 240, 225)',
      url: '/genre/80',
    },
  ],
};
