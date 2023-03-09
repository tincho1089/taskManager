export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  prevPageText?: string
  nextPageText?: string
}

function Pagination({ currentPage, totalPages, onPageChange, prevPageText = 'Prev', nextPageText = 'Next' }: PaginationProps) {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1)
  }

  const handleNextClick = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <nav className='flex justify-center'>
      <ul className='pagination flex flex-row flex-1 justify-between mt-1'>
        <li className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className='pagination-link bg-orange-400 text-white' onClick={handlePrevClick}>
            {prevPageText}
          </button>
        </li>
        <li className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className='pagination-link bg-orange-400 text-white ' onClick={handleNextClick}>
            {nextPageText}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
