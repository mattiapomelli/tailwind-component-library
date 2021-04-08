import { Meta } from '@storybook/react'

import InputField from './InputField'
import CancelIcon from '../../icons/close.svg'
import SearchIcon from '../../icons/search.svg'

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta

const Template = (args) => <InputField {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Name',
  type: 'text',
}

export const WithValue = Template.bind({})

WithValue.args = {
  value: 'Mattia',
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  placeholder: 'Search...',
  icon: <SearchIcon />,
}

export const WithRightIcon = Template.bind({})

WithRightIcon.args = {
  placeholder: 'Search...',
  rightIcon: <SearchIcon />,
}

export const WithBothIcons = Template.bind({})

WithBothIcons.args = {
  placeholder: 'Search...',
  icon: <SearchIcon />,
  rightIcon: <CancelIcon />,
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  label: 'Name',
}

export const FullWidth = Template.bind({})

FullWidth.args = {
  placeholder: 'Name',
  fullWidth: true,
}

export const WithValidation = Template.bind({})

WithValidation.args = {
  placeholder: 'Name',
  required: true,
  type: 'email',
  hint: 'Must be a valid email',
  onValidityChange: (valid) => console.log(valid),
}

export const WithMaxLength = Template.bind({})

WithMaxLength.args = {
  maxLength: 10,
}
