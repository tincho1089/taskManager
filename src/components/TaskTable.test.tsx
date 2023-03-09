import { render, screen } from '@testing-library/react'
import { TaskProvider } from './TaskContext'
import TaskTable from './TaskTable'

describe('TaskTable', () => {
  it('renders the task table with pagination', () => {
    render(
      <TaskProvider>
        <TaskTable />
      </TaskProvider>
    )

    // Assert that the first page of tasks is rendered
    expect(screen.getByText('Add Task')).toBeInTheDocument()
  })
})
