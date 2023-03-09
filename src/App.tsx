import { TaskProvider } from './components/TaskContext'
import { TaskModal } from './components/TaskModal'
import TaskTable from './components/TaskTable'

function App() {
  return (
    <TaskProvider>
      <div className='min-h-screen bg-gray-100'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col'>
          <h1 className='text-3xl font-bold mb-6 self-center'>Task List</h1>
          <TaskTable />
          <TaskModal />
        </div>
      </div>
    </TaskProvider>
  )
}

export default App
