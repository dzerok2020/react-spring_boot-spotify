import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardGenre } from '../components/Card';

export default {
  title: 'Components/CardGenre',
  component: CardGenre,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardGenre>;

const Template: ComponentStory<typeof CardGenre> = args => <CardGenre {...args} />;

export const Default = Template.bind({});
Default.args = {
  genre: {
    id: 1,
    name: 'podcasts',
    backgroundColor: 'rgb(39, 133, 106)',
    image: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
    url: '/genre/podcasts-web',
  },
};
