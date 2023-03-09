import { render, screen } from '@testing-library/react'
import React from 'react'
import { TaskProvider, useTaskContext } from './TaskContext'

describe('TaskProvider', () => {
  it('should render children', () => {
    const child = <div>Test</div>
    render(<TaskProvider>{child}</TaskProvider>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('should provide context values to its children', () => {
    const child = () => {
      const { tasks, onSubmit, deleteTask, onEditTask, isModalOpen, setIsModalOpen, closeModal, currentTask } = useTaskContext()
      expect(tasks).toEqual([])
      expect(onSubmit).toBeDefined()
      expect(deleteTask).toBeDefined()
      expect(onEditTask).toBeDefined()
      expect(isModalOpen).toBe(false)
      expect(setIsModalOpen).toBeDefined()
      expect(closeModal).toBeDefined()
      expect(currentTask).toBeNull()
      return null
    }
    render(<TaskProvider><child /></TaskProvider>)
  })
})
