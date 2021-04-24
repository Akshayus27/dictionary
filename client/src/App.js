import './App.css'
import {WordList} from './components/WordList'
import {SearchBar} from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <WordList />
    </div>
  )
}

export default App
