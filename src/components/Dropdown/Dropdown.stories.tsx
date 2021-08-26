import { Meta } from '@storybook/react'

import Dropdown from './Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})

Default.args = {
  selectedIndex: 0,
  items: ['item 1', 'item 2', 'item 3'],
}

export const WithIcon = Template.bind({})

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

WithIcon.args = {
  selectedIndex: 0,
  items: ['item 1', 'item 2', 'item 3'],
  icon: <GlobeIcon />,
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  selectedIndex: 0,
  items: ['item 1', 'item 2', 'item 3'],
  label: 'Category',
  id: 'dropdown',
}

export const FullWidth = Template.bind({})

FullWidth.args = {
  selectedIndex: 0,
  items: ['item 1', 'item 2', 'item 3'],
  fullWidth: true,
}
