import { render, fireEvent, screen } from '@testing-library/react'
import { ShowMoreText } from './ShowMoreText'

describe('ShowMoreText', () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const length = 20

  it('should render truncated text with "Show more" button if text length is greater than length prop', () => {
    render(<ShowMoreText text={text} length={length} />)
    const truncatedText = `${text.slice(0, length)}...`
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    expect(screen.getByText('Show more')).toBeInTheDocument()
  })

  it('should render full text if text length is less than or equal to length prop', () => {
    render(<ShowMoreText text={text} length={100} />)
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.queryByText('Show more')).toBeNull()
  })

  it('should toggle between expanded and truncated text when "Show more" button is clicked', () => {
    render(<ShowMoreText text={text} length={length} />)
    const truncatedText = `${text.slice(0, length)}...`
    const showMoreButton = screen.getByText('Show more')
    fireEvent.click(showMoreButton)
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(showMoreButton.textContent).toBe('Show less')
    fireEvent.click(showMoreButton)
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    expect(showMoreButton.textContent).toBe('Show more')
  })
})
