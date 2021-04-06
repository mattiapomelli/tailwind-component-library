import { Meta } from '@storybook/react'

import InputField from './InputField'

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta

const Template = (args) => <InputField {...args} />

export const Empty = Template.bind({})

Empty.args = {
  placeholder: 'Name',
  type: 'text',
}

export const WithValue = Template.bind({})

WithValue.args = {
  value: 'Mattia',
}

const SearchIcon = () => {
  return (
    <svg viewBox="0 0 24 24">
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </g>
    </svg>
  )
}

const CancelIcon = () => {
  return (
    <svg viewBox="0 0 24 24">
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </g>
    </svg>
  )
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
