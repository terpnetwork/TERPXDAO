import { ComponentMeta, ComponentStory } from '@storybook/react'

import { InputLabel } from './InputLabel'

export default {
  title: 'DAO DAO / packages / stateless / components / inputs / InputLabel',
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>

const Template: ComponentStory<typeof InputLabel> = (args) => (
  <InputLabel {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'Input name',
  tooltip: 'I am a tooltip.',
}
