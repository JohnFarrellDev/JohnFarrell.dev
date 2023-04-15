import { render, screen } from '@testing-library/react'
import { TableOfContents } from '.'
import userEvent from '@testing-library/user-event'

describe('TableOfContents', () => {
  it('should display table of content header information', () => {
    render(<TableOfContents content={[]} />)

    const contentsHeader = screen.getByText('Contents')
    const hide = screen.getByText('[hide]')

    expect(contentsHeader).toBeInTheDocument()
    expect(hide).toBeInTheDocument()
  })

  it('should be able to display a table of content with no nested content', () => {
    render(
      <TableOfContents
        content={[
          { display: 'Test one', url: '#test-one' },
          { display: 'Test two', url: '#test-two' },
        ]}
      />
    )

    const firstContentIndex = screen.getByText('1')
    const firstContent = screen.getByText('Test one')
    const firstContentLink = new URL(
      (screen.getByText('1').closest('a') as HTMLAnchorElement).href
    ).hash

    const secondContentIndex = screen.getByText('2')
    const secondContent = screen.getByText('Test two')
    const secondContentLink = new URL(
      (screen.getByText('2').closest('a') as HTMLAnchorElement).href
    ).hash

    expect(firstContentIndex).toBeInTheDocument()
    expect(firstContent).toBeInTheDocument()
    expect(firstContentLink).toBe('#test-one')

    expect(secondContentIndex).toBeInTheDocument()
    expect(secondContent).toBeInTheDocument()
    expect(secondContentLink).toBe('#test-two')
  })

  it('should be able to display nested content', () => {
    render(
      <TableOfContents
        content={[
          { display: 'test-one', url: '#test-one' },
          {
            display: 'test-two',
            url: '#test-two',
            nestedContent: [
              {
                display: 'test-two-one',
                url: '#test-two-one',
                nestedContent: [
                  { display: 'test-two-one-one', url: '#test-two-one-one' },
                ],
              },
            ],
          },
        ]}
      />
    )

    const firstContentIndex = screen.getByText('1')
    const firstContent = screen.getByText('test-one')
    const firstContentLink = new URL(
      (screen.getByText('1').closest('a') as HTMLAnchorElement).href
    ).hash

    const secondContentIndex = screen.getByText('2')
    const secondContent = screen.getByText('test-two')
    const secondContentLink = new URL(
      (screen.getByText('2').closest('a') as HTMLAnchorElement).href
    ).hash

    const secondContentNestedFirstIndex = screen.getByText('2.1')
    const secondContentNestedFirst = screen.getByText('test-two-one')
    const secondContentNestedFirstLink = new URL(
      (screen.getByText('2.1').closest('a') as HTMLAnchorElement).href
    ).hash

    const secondContentDoubleNestedFirstIndex = screen.getByText('2.1.1')
    const secondContentDoubleNestedFirst = screen.getByText('test-two-one-one')
    const secondContentDoubleNestedFirstLink = new URL(
      (screen.getByText('2.1.1').closest('a') as HTMLAnchorElement).href
    ).hash

    expect(firstContentIndex).toBeInTheDocument()
    expect(firstContent).toBeInTheDocument()
    expect(firstContentLink).toBe('#test-one')

    expect(secondContentIndex).toBeInTheDocument()
    expect(secondContent).toBeInTheDocument()
    expect(secondContentLink).toBe('#test-two')

    expect(secondContentNestedFirstIndex).toBeInTheDocument()
    expect(secondContentNestedFirst).toBeInTheDocument()
    expect(secondContentNestedFirstLink).toBe('#test-two-one')

    expect(secondContentDoubleNestedFirstIndex).toBeInTheDocument()
    expect(secondContentDoubleNestedFirst).toBeInTheDocument()
    expect(secondContentDoubleNestedFirstLink).toBe('#test-two-one-one')
  })

  it('should continuously increment the last digit as more content is added', () => {
    render(
      <TableOfContents
        content={[
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
        ]}
      />
    )

    const firstContentIndex = screen.getByText('1')
    const firstContent = screen.getByText('test-one')
    const firstContentLink = new URL(
      (screen.getByText('1').closest('a') as HTMLAnchorElement).href
    ).hash

    const secondContentIndex = screen.getByText('2')
    const secondContent = screen.getByText('test-two')
    const secondContentLink = new URL(
      (screen.getByText('2').closest('a') as HTMLAnchorElement).href
    ).hash

    const secondContentNestedFirstIndex = screen.getByText('2.1')
    const secondContentNestedFirst = screen.getByText('test-two-one')
    const secondContentNestedFirstLink = new URL(
      (screen.getByText('2.1').closest('a') as HTMLAnchorElement).href
    ).hash

    const secondContentNestedSecondIndex = screen.getByText('2.2')
    const secondContentDoubleNestedFirst = screen.getByText('test-two-two')
    const secondContentDoubleNestedFirstLink = new URL(
      (screen.getByText('2.2').closest('a') as HTMLAnchorElement).href
    ).hash

    const secondContentNestedThirdIndex = screen.getByText('2.3')
    const secondContentDoubleNestedSecond = screen.getByText('test-two-three')
    const secondContentDoubleNestedSecondLink = new URL(
      (screen.getByText('2.3').closest('a') as HTMLAnchorElement).href
    ).hash

    expect(firstContentIndex).toBeInTheDocument()
    expect(firstContent).toBeInTheDocument()
    expect(firstContentLink).toBe('#test-one')

    expect(secondContentIndex).toBeInTheDocument()
    expect(secondContent).toBeInTheDocument()
    expect(secondContentLink).toBe('#test-two')

    expect(secondContentNestedFirstIndex).toBeInTheDocument()
    expect(secondContentNestedFirst).toBeInTheDocument()
    expect(secondContentNestedFirstLink).toBe('#test-two-one')

    expect(secondContentNestedSecondIndex).toBeInTheDocument()
    expect(secondContentDoubleNestedFirst).toBeInTheDocument()
    expect(secondContentDoubleNestedFirstLink).toBe('#test-two-two')

    expect(secondContentNestedThirdIndex).toBeInTheDocument()
    expect(secondContentDoubleNestedSecond).toBeInTheDocument()
    expect(secondContentDoubleNestedSecondLink).toBe('#test-two-three')
  })

  it('should on init show the content and text to hide content', () => {
    render(
      <TableOfContents content={[{ display: 'test-one', url: '#test-one' }]} />
    )

    const hideContent = screen.getByText('[hide]')
    const content = screen.getByText('test-one')

    expect(hideContent).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('should hide and then show the content on click of hide/show content', async () => {
    const user = userEvent.setup()
    render(
      <TableOfContents content={[{ display: 'test-one', url: '#test-one' }]} />
    )

    let showHideContent = screen.getByText('[hide]')
    let content = screen.queryByText('test-one')
    expect(showHideContent).toBeInTheDocument()
    expect(content).toBeInTheDocument()

    await user.click(showHideContent)

    showHideContent = screen.getByText('[show]')
    expect(showHideContent).toBeInTheDocument()
    content = screen.queryByText('test-one')
    expect(content).toBeNull()

    await user.click(showHideContent)

    showHideContent = screen.getByText('[hide]')
    content = screen.queryByText('test-one')
    expect(showHideContent).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
