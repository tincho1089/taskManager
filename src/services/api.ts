import axios from 'axios'
import { Task } from '../models'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_BASE_URL}/todos`)
  return response.data
}

export const saveTask = async (task: Task): Promise<Task> => {
  const response = await axios.post(`${API_BASE_URL}/todos`, task)
  return response.data
}
