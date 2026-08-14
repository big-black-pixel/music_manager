
import './App.css'
import { observer } from 'mobx-react-lite'
import { SearchField } from './components/elements/search-field/SearchField'

const App = observer(() => {


  return (
    <>
      <div>
        <SearchField />
        <img 
        src="/banner.jpg" 
        alt='photo'
        className="rounded-xl" />
      </div>
    </>
  )
})

export default App
