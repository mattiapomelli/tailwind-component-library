import { Meta } from '@storybook/react'

import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

Default.args = {}

export const WithLabel = Template.bind({})

WithLabel.args = {
  label: 'Agree terms',
}
