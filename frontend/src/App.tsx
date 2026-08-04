import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  <BrowserRouter>
    <AuthProvider>
      <LoginPage/>
    </AuthProvider>
  </BrowserRouter>
}

export default App
