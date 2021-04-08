import { Meta } from '@storybook/react'

import TextArea from './TextArea'

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta

const Template = (args) => <TextArea {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Describe yourself...',
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  label: 'Description',
}

export const FullWidth = Template.bind({})

FullWidth.args = {
  placeholder: 'Description',
  fullWidth: true,
}

export const WithValidation = Template.bind({})

WithValidation.args = {
  placeholder: 'Description',
  required: true,
  hint: 'This field is required',
}

export const WithMaxLength = Template.bind({})

WithMaxLength.args = {
  placeholder: 'Description',
  maxLength: 10,
}

export const CustomSize = Template.bind({})

CustomSize.args = {
  rows: 10,
  cols: 50,
}
