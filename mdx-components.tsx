import type { MDXComponents } from 'mdx/types';

import React from 'react';

import { CodeBlock } from '@/Components/CodeBlock/CodeBlock';
import { SectionTitle } from '@/Components/SectionTitle/SectionTitle';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseCodeMeta(content: string) {
  const metaPrefix = '// @meta ';
  const firstLine = content.split('\n')[0];

  if (!firstLine.startsWith(metaPrefix)) {
    return { content, canHide: false, fileName: undefined, githubLink: undefined };
  }

  const metaString = firstLine.slice(metaPrefix.length);
  const strippedContent = content.split('\n').slice(1).join('\n');

  const canHide = metaString.includes('canHide');
  const fileNameMatch = metaString.match(/fileName="([^"]+)"/);
  const githubLinkMatch = metaString.match(/githubLink="([^"]+)"/);

  return {
    content: strippedContent,
    canHide,
    fileName: fileNameMatch?.[1],
    githubLink: githubLinkMatch?.[1],
  };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: (props) => (
      <SectionTitle
        id={slugify(props.children)}
        as="h2"
        className="mt-8 p-0 text-2xl font-semibold underline decoration-blue-400 decoration-2 md:text-3xl"
      >
        {props.children}
      </SectionTitle>
    ),
    h3: (props) => (
      <SectionTitle
        id={slugify(props.children)}
        as="h3"
        className="mt-8 p-0 text-xl font-semibold underline decoration-blue-400 decoration-2 md:text-2xl"
      >
        {props.children}
      </SectionTitle>
    ),
    pre: (props) => {
      const codeElement = React.Children.only(props.children) as React.ReactElement<{
        children: string;
      }>;
      const rawContent = codeElement.props.children;
      const { content, canHide, fileName, githubLink } = parseCodeMeta(rawContent);

      return (
        <CodeBlock canHide={canHide} fileName={fileName} githubLink={githubLink}>
          {content}
        </CodeBlock>
      );
    },
    img: (props) => <img src={props.src} alt={props.alt ?? ''} style={{ maxWidth: '100%', height: 'auto' }} />,
    p: (props) => <p className="mt-5 max-w-[70ch] text-lg text-pretty text-gray-900">{props.children}</p>,
    a: (props) => (
      <a className="inline-block" href={props.href}>
        {props.children}
      </a>
    ),
  };
}
