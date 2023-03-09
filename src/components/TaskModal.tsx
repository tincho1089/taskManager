import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Task } from '../models'
import { useTaskContext } from './TaskContext'

export function TaskModal() {
  const { onSubmit, isModalOpen, currentTask, closeModal } = useTaskContext()
  const { register, handleSubmit, reset, setValue } = useForm<Task>()

  useEffect(() => {
    if (currentTask) {
      setValue('title', currentTask.title)
      setValue('description', currentTask.description)
    } else {
      reset()
    }
  }, [currentTask, reset, setValue, isModalOpen])

  const handleFormSubmit = (data: Task) => {
    onSubmit(data)
    closeModal()
  }

  return (
    <>
      {isModalOpen ? (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>

            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>

            <div
              className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
            >
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='w-full'>
                      <div className='mb-4'>
                        <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
                          Title
                        </label>
                        <input
                          type='text'
                          id='title'
                          {...register('title', { required: true })}
                          className='border rounded-lg px-3 py-2 mt-1 mb-2 w-full'
                        />
                      </div>
                      <div className='mb-6'>
                        <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>
                          Description
                        </label>
                        <textarea
                          id='description'
                          {...register('description', { required: true })}
                          className='border rounded-lg px-3 py-2 mt-1 mb-2 w-full'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <button
                    type='submit'
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm'
                  >
                    Save
                  </button>
                  <button
                    type='button'
                    onClick={() => closeModal()}
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
