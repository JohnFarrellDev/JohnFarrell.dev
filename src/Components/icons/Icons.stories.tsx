import type { Meta, StoryObj } from '@storybook/react';

import { BlueSky } from './BlueSky';
import { Chevron } from './Chevron';
import { CSharp } from './CSharp';
import { GitHub } from './GitHub';
import { House } from './House';
import { JavaScript } from './JavaScript';
import { LinkedIn } from './LinkedIn';
import { Mail } from './Mail';
import { NewsPaper } from './NewsPaper';
import { Node } from './Node';
import { Person } from './Person';
import { React as ReactIcon } from './React';
import { TypeScript } from './TypeScript';
import { Wrench } from './Wrench';
import { Youtube } from './Youtube';

// Use a simple wrapper component to show all icons
function AllIconsGrid() {
  const icons = [
    { name: 'BlueSky', Icon: BlueSky },
    { name: 'GitHub', Icon: GitHub },
    { name: 'LinkedIn', Icon: LinkedIn },
    { name: 'House', Icon: House },
    { name: 'Person', Icon: Person },
    { name: 'Mail', Icon: Mail },
    { name: 'Wrench', Icon: Wrench },
    { name: 'NewsPaper', Icon: NewsPaper },
    { name: 'React', Icon: ReactIcon },
    { name: 'TypeScript', Icon: TypeScript },
    { name: 'JavaScript', Icon: JavaScript },
    { name: 'CSharp', Icon: CSharp },
    { name: 'Node', Icon: Node },
    { name: 'Chevron', Icon: Chevron },
    { name: 'Youtube', Icon: Youtube },
  ];

  return (
    <div className="flex flex-wrap gap-8 p-4">
      {icons.map(({ name, Icon }) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon width={32} height={32} />
          <span className="text-sm text-gray-600">{name}</span>
        </div>
      ))}
    </div>
  );
}

export default {
  title: 'Icons/AllIcons',
  component: AllIconsGrid,
} as Meta<typeof AllIconsGrid>;

export const Default: StoryObj<typeof AllIconsGrid> = {};
