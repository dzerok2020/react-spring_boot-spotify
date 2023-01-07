import { ComponentStory, ComponentMeta } from '@storybook/react';

import Root from './root';

export default {
  title: 'Components/App',
  component: Root,
} as ComponentMeta<typeof Root>;

const Template: ComponentStory<typeof Root> = (args: any) => <Root {...args} />;

export const Default = Template.bind({});
