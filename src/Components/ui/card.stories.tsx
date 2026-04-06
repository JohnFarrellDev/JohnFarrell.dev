import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

export default {
  title: 'UI/Card',
  component: Card,
} as Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description providing additional context.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card body content. You can place any content here.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">Footer content</p>
      </CardFooter>
    </Card>
  ),
};

export const HeaderOnly: StoryObj<typeof Card> = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>Just a header with no body.</CardDescription>
      </CardHeader>
    </Card>
  ),
};
