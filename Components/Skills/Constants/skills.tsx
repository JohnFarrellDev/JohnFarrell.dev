import { GitMerge } from 'lucide-react';
import { JavaScript } from '../../icons/JavaScript';
import { TypeScript } from '../../icons/TypeScript';
import { CSharp } from '../../icons/CSharp';
import { React } from '../../icons/React';
import { Node } from '../../icons/Node';

export const skills = [
  {
    id: 1,
    icon: <JavaScript />,
    title: 'JavaScript',
    description:
      'JavaScript is a language I have been using professionally for a few years. I really enjoy web development so as a result have grown very fond of JavaScript. I personally find the internet the best way to deploy applications that are easily available to millions of users.',
  },
  {
    id: 2,
    icon: <TypeScript />,
    title: 'TypeScript',
    description:
      'TypeScript for me is simply a better "version" of JavaScript. The static type checking and compile time analysis allows for certain bugs to be caught at compile time (by devs) instead of at runtime (by users). I also find the increased verbosity of the language actually increases how fast I can develop code as it acts as useful documentation.',
  },
  {
    id: 3,
    icon: <CSharp />,
    title: 'C#/.NET',
    description:
      'I find C# great for enterprise development when working as part of a team. C# enables good software development patterns' +
      ' that makes it relatively simple to produce useful applications. A common architecture for me is to use a frontend web framework as a UI which is supplemented by a backend .NET API. Using patterns such as clean architecture you can build a highly maintainable testable API.',
  },
  {
    id: 4,
    icon: <React />,
    title: 'React',
    description:
      'React has been my consistent web framework of choice. I have also used Angular and Vue professionally and have an interest in Svelte. I find modern functional React makes ' +
      'stateful web-development fairly easy. This site and all projects on it are built using next.js which is a framework built on top of React.',
  },
  {
    id: 5,
    icon: <Node />,
    title: 'Node',
    description:
      "I'm a big fan of the node ecosystem/community. Being able to use one language across the full web stack for a project is very advantageous. I find with node I can get a " +
      "project started extremely quickly. It's also nice that when working in a team everybody knows the languages used across the stack.",
  },
  {
    id: 6,
    icon: <GitMerge className="h-[36px] w-[36px]" />,
    title: 'Git',
    description:
      "Every project I've worked on professionally has used Git for version control, I also use Git for my personal projects, " +
      'you can of course check out my GitHub.',
    link: {
      url: 'https://github.com/JohnFarrellDev/',
      display: 'GitHub',
    },
  },
];
