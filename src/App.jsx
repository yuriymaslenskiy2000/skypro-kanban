import './App.css'
import PopupExit from './components/Popups/PopupExit/PopupExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { cardList } from './data.js'
import { GlobalStyle, SWrapper } from './GlobalStyle.styled.js'
function App() {
  return (
    <>
      <GlobalStyle/>
      <SWrapper>
        {/* pop-up start*/}
        <PopupExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        <Header />
        <Main cardList={cardList} />
      </SWrapper>
    </>
  )
}

export default App
