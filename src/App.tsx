import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
