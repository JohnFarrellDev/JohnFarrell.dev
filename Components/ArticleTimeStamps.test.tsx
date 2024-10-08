import { render, screen } from '@testing-library/react';
import { ArticleTimeStamps } from './ArticleTimeStamps';
import { describe, it, expect } from 'vitest';

describe('TableOfContents', () => {
  it('should only display created at when last updated not provided', () => {
    render(<ArticleTimeStamps createdAt={new Date('2022-05-29T19:28:53.185Z')} />);
    const createdAt = screen.getByText('Published: May 29, 2022');
    const lastUpdated = screen.queryByText('Last Updated:');

    expect(createdAt).toBeInTheDocument();
    expect(lastUpdated).toBeNull();
  });

  it('should  display created at and last updated when both are provided', () => {
    render(
      <ArticleTimeStamps
        createdAt={new Date('2022-05-29T19:28:53.185Z')}
        lastUpdated={new Date('2022-05-30T19:28:53.185Z')}
      />
    );
    const createdAt = screen.getByText('Published: May 29, 2022');
    const lastUpdated = screen.getByText('Last Updated: May 30, 2022');

    expect(createdAt).toBeInTheDocument();
    expect(lastUpdated).toBeInTheDocument();
  });
});
