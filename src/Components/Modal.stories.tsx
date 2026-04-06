import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
} as Meta<typeof Modal>;

export const Open: StoryObj<typeof Modal> = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Title title="Example Modal" />
      <Modal.Content>
        <p>This is the modal body content. You can place any content here.</p>
      </Modal.Content>
      <Modal.Footer>
        <button onClick={args.onClose}>Close</button>
      </Modal.Footer>
    </Modal>
  ),
};

export const Closed: StoryObj<typeof Modal> = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
  render: (args) => (
    <div>
      <p>The modal is closed. Set isOpen to true to show it.</p>
      <Modal {...args}>
        <Modal.Title title="Example Modal" />
        <Modal.Content>
          <p>Modal content here.</p>
        </Modal.Content>
      </Modal>
    </div>
  ),
};
