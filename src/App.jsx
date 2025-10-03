import './App.css'
import PopupExit from './components/Popups/PopupExit/PopupExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
function App() {
  return (
    <div className="wrapper">
      {/* pop-up start*/}
      <PopupExit />
      <PopNewCard />
      <PopBrowse />
      {/* pop-up end*/}
      <Header />
      <Main />
    </div>
  )
}

export default App
