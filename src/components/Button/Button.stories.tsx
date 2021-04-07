import { Meta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template = (args) => <Button {...args}>Get started</Button>

export const Primary = Template.bind({})

Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})

Secondary.args = {
  color: 'secondary',
}

const MyIcon = () => {
  return (
    <svg viewBox="0 0 24 24">
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </g>
    </svg>
  )
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  icon: <MyIcon />,
}

export const WithRightIcon = Template.bind({})

WithRightIcon.args = {
  rightIcon: <MyIcon />,
}

export const Disabled = Template.bind({})

Disabled.args = {
  disabled: true,
}

export const Loading = Template.bind({})

Loading.args = {
  loading: true,
}
