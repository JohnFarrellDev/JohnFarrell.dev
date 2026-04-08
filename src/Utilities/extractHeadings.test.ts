import { describe, expect, it } from 'vitest';

import { extractHeadingsFromContent } from './extractHeadings';

describe('extractHeadingsFromContent', () => {
  it('should extract h2 headings with slugified ids', () => {
    const content = `
# Title

Some intro text.

## First Section

Content here.

## Second Section

More content.
`;

    expect(extractHeadingsFromContent(content)).toEqual([
      { display: 'First Section', url: '#first-section' },
      { display: 'Second Section', url: '#second-section' },
    ]);
  });

  it('should nest h3 headings under their parent h2', () => {
    const content = `
## Getting Started

### Installation

### Configuration

## Advanced Usage

### Plugins
`;

    expect(extractHeadingsFromContent(content)).toEqual([
      {
        display: 'Getting Started',
        url: '#getting-started',
        nestedContent: [
          { display: 'Installation', url: '#installation' },
          { display: 'Configuration', url: '#configuration' },
        ],
      },
      {
        display: 'Advanced Usage',
        url: '#advanced-usage',
        nestedContent: [{ display: 'Plugins', url: '#plugins' }],
      },
    ]);
  });

  it('should ignore h3 headings that appear before any h2', () => {
    const content = `
### Orphan Heading

## First Section
`;

    expect(extractHeadingsFromContent(content)).toEqual([{ display: 'First Section', url: '#first-section' }]);
  });

  it('should not extract h1 or h4+ headings', () => {
    const content = `
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
`;

    expect(extractHeadingsFromContent(content)).toEqual([
      {
        display: 'H2 Heading',
        url: '#h2-heading',
        nestedContent: [{ display: 'H3 Heading', url: '#h3-heading' }],
      },
    ]);
  });

  it('should return an empty array when there are no headings', () => {
    expect(extractHeadingsFromContent('Just some text with no headings.')).toEqual([]);
  });

  it('should handle special characters in headings', () => {
    expect(extractHeadingsFromContent(`## Return YouTube Dislikes`)).toEqual([
      { display: 'Return YouTube Dislikes', url: '#return-youtube-dislikes' },
    ]);
  });

  it('should handle headings with punctuation', () => {
    expect(extractHeadingsFromContent(`## What's New? (2024)`)).toEqual([
      { display: "What's New? (2024)", url: '#what-s-new-2024' },
    ]);
  });

  it('should handle h2 with no nested h3', () => {
    const content = `
## Section One

Some text.

## Section Two

### Sub Section

## Section Three
`;

    expect(extractHeadingsFromContent(content)).toEqual([
      { display: 'Section One', url: '#section-one' },
      {
        display: 'Section Two',
        url: '#section-two',
        nestedContent: [{ display: 'Sub Section', url: '#sub-section' }],
      },
      { display: 'Section Three', url: '#section-three' },
    ]);
  });
});
