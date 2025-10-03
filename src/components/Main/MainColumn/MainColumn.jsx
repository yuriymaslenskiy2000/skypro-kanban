
import Cards from './Cards/Cards'
const MainColumn = ({ cardList }) => {
  return (
    <>
      {cardList.map((item) => (
        <div className="main__column" key={item.id}>
          <div className="column__title">
            <p>{item.status}</p>
          </div>
          <Cards colorTheme={item.color } theme={item.theme} date={item.date} />
        </div>
      ))}
    </>
  )
}
export default MainColumn
