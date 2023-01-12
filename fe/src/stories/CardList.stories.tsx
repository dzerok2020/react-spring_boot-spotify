import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardList } from '../components/Card';

export default {
  title: 'Components/CardList',
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = arg => <CardList {...arg} />;

export const Default = Template.bind({});
Default.args = {
  playlist: {
    id: 1,
    title: 'My Playlist #1',
    author: 'Dzerok',
    image: '',
    url: '',
  },
};
