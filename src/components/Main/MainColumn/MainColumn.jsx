import Cards from './Cards/Cards'
const MainColumn = () => {
  return (
    <>
      <div className="main__column column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
        <Cards />
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Нужно сделать</p>
        </div>
        <Cards />
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>В работе</p>
        </div>
        <Cards />
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Тестирование</p>
        </div>
        <Cards />
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Готово</p>
        </div>
        <Cards />
      </div>
    </>
  )
}
export default MainColumn
