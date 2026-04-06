import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from './ContactForm';

export default {
  title: 'ContactForm',
  component: ContactForm,
} as Meta<typeof ContactForm>;

export const Default: StoryObj<typeof ContactForm> = {};
