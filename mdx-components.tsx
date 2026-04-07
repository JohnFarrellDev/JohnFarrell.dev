import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={props.src} alt={props.alt ?? ''} style={{ maxWidth: '100%', height: 'auto' }} />
    ),
  };
}
