import fs from 'fs';
import path from 'path';

interface Heading {
  display: string;
  url: string;
  nestedContent?: Heading[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function extractHeadingsFromContent(content: string) {
  const headingRegex = /^(#{2,3}) (.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length;
    const text = match[2];
    const heading: Heading = { display: text, url: `#${slugify(text)}` };

    if (depth === 2) {
      headings.push(heading);
    } else if (depth === 3 && headings.length > 0) {
      const parent = headings[headings.length - 1];
      parent.nestedContent ??= [];
      parent.nestedContent.push(heading);
    }
  }

  return headings;
}

export function extractHeadings(mdxPath: string) {
  const fullPath = path.join(process.cwd(), mdxPath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return extractHeadingsFromContent(content);
}
