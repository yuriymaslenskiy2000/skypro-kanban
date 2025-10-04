import styled from 'styled-components'


export const SCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`

export const SCardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`

export const SCardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`

export const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $colorTheme }) => {
    switch ($colorTheme) {
      case 'orange':
            return '#FFE4C2'
        case "green":
            return "#B4FDD1"
        case "purple":
            return '#E9D4FF'
    }
  }};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $colorTheme }) => {
    switch ($colorTheme) {
      case 'orange':
        return '#FF6D00'
      case 'green':
        return '#06B16E'
      case 'purple':
        return '#9A48F1'
    }
    }};
  }
`
export const SCardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`
export const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const SCardTittle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`
export const SCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`
