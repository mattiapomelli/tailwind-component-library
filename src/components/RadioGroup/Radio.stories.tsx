import { Meta } from '@storybook/react'

import Radio from './Radio'
import RadioGroup from './RadioGroup'

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta

const Template = (args) => <Radio {...args} />

export const Default = Template.bind({})

Default.args = {}

export const WithLabel = Template.bind({})

WithLabel.args = {
  label: 'Something',
}

const GroupTemplate = (args) => <RadioGroup {...args} />

export const Group = GroupTemplate.bind({})

Group.args = {
  options: ['option 1', 'option 2', 'option 3'],
  value: 'option 1',
}

export const GroupWithLabel = GroupTemplate.bind({})

GroupWithLabel.args = {
  options: ['option 1', 'option 2', 'option 3'],
  value: 'option 1',
  label: 'Category',
}
