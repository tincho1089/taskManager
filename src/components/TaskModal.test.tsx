import { fireEvent, render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { describe, expect, vi } from 'vitest'
import { useTaskContext } from './TaskContext'
import { TaskModal } from './TaskModal'

vi.mock('./TaskContext', () => ({
  useTaskContext: vi.fn(),
}))

vi.mock('react-hook-form', () => ({
  useForm: vi.fn(),
}))

describe('TaskModal', () => {
  const mockCloseModal = vi.fn()
  const mockOnSubmit = vi.fn()

  const mockUseForm = useForm as vi.mockFn<typeof useForm>
  const mockRegister = vi.fn()
  const mockHandleSubmit = vi.fn()

  const mockUseTaskContext = useTaskContext as vi.mockFn<typeof useTaskContext>

  const mockTask = {
    title: 'Test task',
    description: 'This is a test task',
  }

  beforeEach(() => {
    mockUseForm.mockReturnValue({
      register: mockRegister,
      handleSubmit: mockHandleSubmit,
      reset: vi.fn(),
      setValue: vi.fn(),
    })
    mockUseTaskContext.mockReturnValue({
      onSubmit: mockOnSubmit,
      closeModal: mockCloseModal,
      isModalOpen: true,
      currentTask: mockTask,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders the task modal', () => {
    render(<TaskModal />)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByLabelText('Title')).toBeInTheDocument()
    expect(screen.getByLabelText('Description')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  })


  it('submits the form when clicking the save button', () => {
    render(<TaskModal />)
    fireEvent.click(screen.getByRole('button', { name: 'Save' }))
    expect(mockHandleSubmit).toHaveBeenCalled()
  })

  it('closes the modal when clicking the cancel button', () => {
    render(<TaskModal />)

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(mockCloseModal).toHaveBeenCalled()
  })
})
