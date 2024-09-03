interface PreBlockProps {
  lines: string[]
}

export function PreBlock({ lines }: PreBlockProps) {
  return <pre className="w-fit whitespace-pre-wrap bg-grey-900 p-2">{lines.join('\n')}</pre>
}
