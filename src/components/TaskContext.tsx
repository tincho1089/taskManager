import { createContext, useContext, useEffect, useState } from 'react'
import { Task } from '../models'
import { getTasks, saveTask } from '../services/api'

interface TaskContextProps {
  tasks: Task[]
  onSubmit: (task: Task) => void
  deleteTask: (taskId: number) => void
  onEditTask: (task: Task) => void
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  closeModal: () => void
  currentTask: Task | null
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  onSubmit: () => ({}),
  deleteTask: () => ({}),
  onEditTask: () => ({}),
  isModalOpen: false,
  setIsModalOpen: () => ({}),
  closeModal: () => ({}),
  currentTask: null,
})

export const useTaskContext = () => useContext(TaskContext)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState<Task | null>(null)

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentTask(null)
  }

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const onEditTask = (Task: Task) => {
    const taskToEdit = tasks.find((task) => task.id === Task.id)
    if (taskToEdit) {
      setCurrentTask(Task)
      setIsModalOpen(true)
    }
  }

  const onSubmit = (data: Task) => {
    if (currentTask) {
      const updatedTasks = tasks.map((task) => (task.id === currentTask.id ? { ...data, id: task.id } : task))
      setTasks(updatedTasks)
    } else {
      const newTask: Task = { ...data, id: Date.now() }
      saveTask(newTask)
      setTasks([...tasks, newTask])
    }
    closeModal()
  }

  useEffect(() => {
    ;(async function () {
      setTasks(await getTasks())
    })()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, onSubmit, deleteTask, onEditTask, isModalOpen, setIsModalOpen, closeModal, currentTask }}>
      {children}
    </TaskContext.Provider>
  )
}
