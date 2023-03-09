import { fireEvent, render } from '@testing-library/react'
import Pagination, { PaginationProps } from './Pagination'
import { describe, expect, vi } from 'vitest'

const defaultProps: PaginationProps = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: vi.fn(),
}

describe('Pagination component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Pagination {...defaultProps} />)
    expect(getByText('Prev')).toBeInTheDocument()
    expect(getByText('Next')).toBeInTheDocument()
  })

  it('should call onPageChange when Prev button is clicked', () => {
    const { getByText } = render(<Pagination {...defaultProps} />)
    fireEvent.click(getByText('Prev'))
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(0)
  })

  it('should call onPageChange when Next button is clicked', () => {
    const { getByText } = render(<Pagination {...defaultProps} />)
    fireEvent.click(getByText('Next'))
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2)
  })

})
