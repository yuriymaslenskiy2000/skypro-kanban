import { useEffect, useState } from 'react';
import MainColumn from './MainColumn/MainColumn'
import LoaderCards from './MainColumn/Cards/LoaderCards/LoaderCards';
import { SMain, SMainBlock, SMainContent } from './Main.styled';
import { SContainer } from '../../GlobalStyle.styled';
const Main = ({ cardList }) => {
    const [isLoadingCard, setIsLoadingCard] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoadingCard(false)
      },2000)
    }, [])

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {isLoadingCard ? <LoaderCards /> : <MainColumn cardList={cardList} />}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  )
}
export default Main
