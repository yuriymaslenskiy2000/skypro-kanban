
import Cards from './Cards/Cards'
import { SMainColumn, SMainColumnTitle } from './MainColumn.styled'
const MainColumn = ({ cardList }) => {
  return (
    <>
      {cardList.map((item) => (
      <SMainColumn key={item.id}>
          <SMainColumnTitle>
            <p>{item.status}</p>
          </SMainColumnTitle>
          <Cards colorTheme={item.color } theme={item.theme} date={item.date} />
        </SMainColumn>
      ))}
    </>
  )
}
export default MainColumn
