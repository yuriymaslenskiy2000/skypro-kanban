import PopupExit from '../components/Popups/PopupExit/PopupExit'
import PopNewCard from '../components/Popups/PopNewCard/PopNewCard'
import PopBrowse from '../components/Popups/PopBrowse/PopBrowse'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import { cardList } from '../data.js'
import { GlobalStyle, SWrapper } from '../GlobalStyle.styled.js'
import { Outlet } from 'react-router-dom'
export const MainApp = () => {
  return (
    <>
      <GlobalStyle />
      <SWrapper>
        {/* pop-up start*/}
        <Outlet />
        {/* pop-up end*/}
        <Header />
        <Main cardList={cardList} />
      </SWrapper>
    </>
  )
}
