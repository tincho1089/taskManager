import { Fragment, useState, useEffect } from 'react'
import Pagination from './Pagination'
import { useTaskContext } from './TaskContext'

function TaskTable() {
  const { tasks, deleteTask, onEditTask, setIsModalOpen } = useTaskContext()
  const [currentPage, setCurrentPage] = useState(1)
  const [tasksPerPage] = useState(10) // define la cantidad de tareas por página

  // Calcula la cantidad de páginas
  const totalPages = Math.ceil(tasks.length / tasksPerPage)

  // Calcula qué tareas se deben mostrar en la página actual
  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask)

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [tasksPerPage])

  return (
    <Fragment>
      <div className='mt-6 flex justify-end'>
        <button className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-5' onClick={() => setIsModalOpen(true)}>
          Add Task
        </button>
      </div>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>#</th>
            <th className='border px-4 py-2'>Title</th>
            <th className='border px-4 py-2'>Description</th>
            <th className='border px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task) => (
            <tr key={task.id}>
              <td className='border px-4 py-2'>{task.id}</td>
              <td className='border px-4 py-2'>{task.title}</td>
              <td className='border px-4 py-2'>{task.description}</td>
              <td className='border px-4 py-2'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
                  onClick={() => onEditTask(task)}
                >
                  Edit
                </button>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Fragment>
  )
}

export default TaskTable
