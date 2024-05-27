import './App.css'
import { Provider } from './Provider'
import { Home } from './pages/Home'

function App() {
  return (
    <main>
      <Provider>
        <Home />
      </Provider>
    </main>
  )
}

export default App
