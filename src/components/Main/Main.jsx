import { useEffect, useState } from 'react';
import MainColumn from './MainColumn/MainColumn'
import LoaderCards from './MainColumn/Cards/LoaderCards/LoaderCards';
const Main = ({ cardList }) => {
    const [isLoadingCard, setIsLoadingCard] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoadingCard(false)
      },2000)
    }, [])

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {isLoadingCard ? <LoaderCards /> : <MainColumn cardList={cardList} />}
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main
