import { Meta } from '@storybook/react'

import Modal from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta

const Template = (args) => <Modal {...args}>Ciao</Modal>

export const Default = Template.bind({})

Default.args = {
  open: true,
}
