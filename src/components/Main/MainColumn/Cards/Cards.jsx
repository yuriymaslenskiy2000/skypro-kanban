import CardDate from './CardDate'
import { SCardBtn, SCardContent, SCardGroup, SCards, SCardsCard, SCardsItem, SCardTheme, SCardTittle,} from './Cards.styled'

const Cards = ({ theme, date, colorTheme }) => {
  return (
    <SCards>
      <SCardsItem>
        <SCardsCard>
          <SCardGroup>
            {/* <div className={`card__theme ${colorTheme}`}>
              {console.log(colorTheme)}
              <p className={colorTheme}>{theme}</p>
            </div> */}
            <SCardTheme $colorTheme={colorTheme}>
              <p>{theme}</p>
            </SCardTheme>
            <a href="#popBrowse" target="_self">
              <SCardBtn>
                <div />
                <div />
                <div />
              </SCardBtn>
            </a>
          </SCardGroup>
          <SCardContent>
            <a href="" target="_blank">
              <SCardTittle>Название задачи</SCardTittle>
            </a>
            <CardDate date={date} />
          </SCardContent>
        </SCardsCard>
      </SCardsItem>
    </SCards>
  )
}
export default Cards
