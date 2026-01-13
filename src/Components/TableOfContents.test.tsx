import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { TableOfContents } from './TableOfContents';

describe('TableOfContents', () => {
  const user = userEvent.setup();

  const hideText = 'hide';
  const showText = 'show';

  it('should display table of content header information', () => {
    render(<TableOfContents content={[]} />);

    const contentsHeader = screen.getByText('Contents');
    const hide = screen.getByText(hideText);

    expect(contentsHeader).toBeInTheDocument();
    expect(hide).toBeInTheDocument();
  });

  it('should be able to display a table of content with no nested content', () => {
    const content = [
      { display: 'Test one', url: '#test-one' },
      { display: 'Test two', url: '#test-two' },
    ];

    render(<TableOfContents content={content} />);

    const firstContentIndex = screen.getByText('1');
    const firstContent = screen.getByText(content[0].display);
    const firstContentLink = firstContentIndex.closest('a')!.hash;

    const secondContentIndex = screen.getByText('2');
    const secondContent = screen.getByText(content[1].display);
    const secondContentLink = secondContentIndex.closest('a')!.hash;

    expect(firstContentIndex).toBeInTheDocument();
    expect(firstContent).toBeInTheDocument();
    expect(firstContentLink).toBe(content[0].url);

    expect(secondContentIndex).toBeInTheDocument();
    expect(secondContent).toBeInTheDocument();
    expect(secondContentLink).toBe(content[1].url);
  });

  it('should be able to display nested content', () => {
    const content = [
      { display: 'test-one', url: '#test-one' },
      {
        display: 'test-two',
        url: '#test-two',
        nestedContent: [
          {
            display: 'test-two-one',
            url: '#test-two-one',
            nestedContent: [{ display: 'test-two-one-one', url: '#test-two-one-one' }],
          },
        ],
      },
    ];

    render(<TableOfContents content={content} />);

    const firstContentIndex = screen.getByText('1');
    const firstContent = screen.getByText(content[0].display);
    const firstContentLink = new URL(firstContentIndex.closest('a')!.href).hash;

    const secondContentIndex = screen.getByText('2');
    const secondContent = screen.getByText(content[1].display);
    const secondContentLink = new URL(secondContentIndex.closest('a')!.href).hash;

    const secondContentNestedFirstIndex = screen.getByText('2.1');
    const secondContentNestedFirst = screen.getByText(content[1].nestedContent![0].display);
    const secondContentNestedFirstLink = new URL(secondContentNestedFirstIndex.closest('a')!.href).hash;

    const secondContentDoubleNestedFirstIndex = screen.getByText('2.1.1');
    const secondContentDoubleNestedFirst = screen.getByText('test-two-one-one');
    const secondContentDoubleNestedFirstLink = new URL(secondContentDoubleNestedFirstIndex.closest('a')!.href).hash;

    expect(firstContentIndex).toBeInTheDocument();
    expect(firstContent).toBeInTheDocument();
    expect(firstContentLink).toBe('#test-one');

    expect(secondContentIndex).toBeInTheDocument();
    expect(secondContent).toBeInTheDocument();
    expect(secondContentLink).toBe('#test-two');

    expect(secondContentNestedFirstIndex).toBeInTheDocument();
    expect(secondContentNestedFirst).toBeInTheDocument();
    expect(secondContentNestedFirstLink).toBe('#test-two-one');

    expect(secondContentDoubleNestedFirstIndex).toBeInTheDocument();
    expect(secondContentDoubleNestedFirst).toBeInTheDocument();
    expect(secondContentDoubleNestedFirstLink).toBe('#test-two-one-one');
  });

  it('should continuously increment the last digit as more content is added', () => {
    const content = [
      { display: 'test-one', url: '#test-one' },
      {
        display: 'test-two',
        url: '#test-two',
        nestedContent: [
          {
            display: 'test-two-one',
            url: '#test-two-one',
          },
          {
            display: 'test-two-two',
            url: '#test-two-two',
          },
          {
            display: 'test-two-three',
            url: '#test-two-three',
          },
        ],
      },
    ];

    render(<TableOfContents content={content} />);

    const firstContentIndex = screen.getByText('1');
    const firstContent = screen.getByText(content[0].display);
    const firstContentLink = new URL(firstContentIndex.closest('a')!.href).hash;

    const secondContentIndex = screen.getByText('2');
    const secondContent = screen.getByText(content[1].display);
    const secondContentLink = new URL(secondContentIndex.closest('a')!.href).hash;

    const secondContentNestedFirstIndex = screen.getByText('2.1');
    const secondContentNestedFirst = screen.getByText(content[1].nestedContent![0].display);
    const secondContentNestedFirstLink = new URL(secondContentNestedFirstIndex.closest('a')!.href).hash;

    const secondContentNestedSecondIndex = screen.getByText('2.2');
    const secondContentDoubleNestedFirst = screen.getByText(content[1].nestedContent![1].display);
    const secondContentDoubleNestedFirstLink = new URL(secondContentNestedSecondIndex.closest('a')!.href).hash;

    const secondContentNestedThirdIndex = screen.getByText('2.3');
    const secondContentDoubleNestedSecond = screen.getByText(content[1].nestedContent![2].display);
    const secondContentDoubleNestedSecondLink = new URL(secondContentNestedThirdIndex.closest('a')!.href).hash;

    expect(firstContentIndex).toBeInTheDocument();
    expect(firstContent).toBeInTheDocument();
    expect(firstContentLink).toBe(content[0].url);

    expect(secondContentIndex).toBeInTheDocument();
    expect(secondContent).toBeInTheDocument();
    expect(secondContentLink).toBe(content[1].url);

    expect(secondContentNestedFirstIndex).toBeInTheDocument();
    expect(secondContentNestedFirst).toBeInTheDocument();
    expect(secondContentNestedFirstLink).toBe(content[1].nestedContent![0].url);

    expect(secondContentNestedSecondIndex).toBeInTheDocument();
    expect(secondContentDoubleNestedFirst).toBeInTheDocument();
    expect(secondContentDoubleNestedFirstLink).toBe(content[1].nestedContent![1].url);

    expect(secondContentNestedThirdIndex).toBeInTheDocument();
    expect(secondContentDoubleNestedSecond).toBeInTheDocument();
    expect(secondContentDoubleNestedSecondLink).toBe(content[1].nestedContent![2].url);
  });

  it('should on init show the content and text to hide content', () => {
    const content = [{ display: 'test-one', url: '#test-one' }];

    render(<TableOfContents content={content} />);

    const hideContent = screen.getByText(hideText);
    const pieceOfContent = screen.getByText(content[0].display);

    expect(hideContent).toBeInTheDocument();
    expect(pieceOfContent).toBeInTheDocument();
  });

  it('should hide and then show the content on click of hide/show content', async () => {
    const content = [{ display: 'test-one', url: '#test-one' }];

    render(<TableOfContents content={content} />);

    let showHideContent = screen.getByText(hideText);
    let pieceOfContent = screen.queryByText(content[0].display);
    expect(showHideContent).toBeInTheDocument();
    expect(pieceOfContent).toBeInTheDocument();

    await user.click(showHideContent);

    showHideContent = screen.getByText(showText);
    expect(showHideContent).toBeInTheDocument();
    pieceOfContent = screen.queryByText(content[0].display);
    expect(pieceOfContent).not.toBeInTheDocument();

    await user.click(showHideContent);

    showHideContent = screen.getByText(hideText);
    pieceOfContent = screen.queryByText(content[0].display);
    expect(showHideContent).toBeInTheDocument();
    expect(pieceOfContent).toBeInTheDocument();
  });
});
