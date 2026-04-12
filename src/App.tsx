import { BrowserRouter } from 'react-router-dom'
import { createAppRouter } from '@/routing/createAppRouter'

function App() {
  return <BrowserRouter>{createAppRouter()}</BrowserRouter>
}

export default App
