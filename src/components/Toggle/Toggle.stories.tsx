import { Meta } from '@storybook/react'

import Toggle from './Toggle'

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta

const Template = (args) => <Toggle {...args} />

export const Default = Template.bind({})

Default.args = {}

export const WithLabel = Template.bind({})

WithLabel.args = {
  label: 'Dark mode',
}
