import type { MDXComponents } from 'mdx/types';

import { SectionTitle } from '@/Components/SectionTitle/SectionTitle';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: (props) => (
      <SectionTitle
        id={slugify(props.children)}
        as="h2"
        className="font-semibold underline decoration-blue-400 decoration-2 mt-8 p-0 text-2xl md:text-3xl"
      >
        {props.children}
      </SectionTitle>
    ),
    img: (props) => <img src={props.src} alt={props.alt ?? ''} style={{ maxWidth: '100%', height: 'auto' }} />,
    p: (props) => <p className="mt-5 max-w-[70ch] text-lg text-pretty text-gray-900">{props.children}</p>,
    a: (props) => (
      <a className="inline-block" href={props.href}>
        {props.children}
      </a>
    ),
  };
}
