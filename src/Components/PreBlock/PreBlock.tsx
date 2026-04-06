interface PreBlockProps {
  lines: string[];
}

export function PreBlock({ lines }: PreBlockProps) {
  return <pre className="w-fit bg-gray-100 p-2 whitespace-pre-wrap">{lines.join('\n')}</pre>;
}
