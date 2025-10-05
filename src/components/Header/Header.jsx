import { useState } from 'react'
import {
  SHeaderUserLink,
  StyledHeader,
  StyledHeaderBlock,
  StyledHeaderBtnMain,
  StyledHeaderLogo,
  StyledHeaderNav,
} from './Header.styled.js'
import HeaderPopUser from '../Popups/HeaderPopUser/HeaderPopUser.jsx'
import { SContainer } from '../../GlobalStyle.styled.js'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen((prevState) => !prevState)
  }
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <SContainer>
        <StyledHeaderBlock>
          <StyledHeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </StyledHeaderLogo>
          <StyledHeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </StyledHeaderLogo>
          <StyledHeaderNav>
            <StyledHeaderBtnMain>
              <a onClick={() => navigate('/add-task')} href="#popNewCard">
                Создать новую задачу
              </a>
            </StyledHeaderBtnMain>
            <SHeaderUserLink onClick={openModal} href="#user-set-target">
              Ivan Ivanov
            </SHeaderUserLink>
            {isOpen && <HeaderPopUser />}
          </StyledHeaderNav>
        </StyledHeaderBlock>
      </SContainer>
    </StyledHeader>
  )
}
export default Header
