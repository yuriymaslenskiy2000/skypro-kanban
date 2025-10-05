import { Link, useNavigate } from 'react-router-dom'
import {
  SContainerSignIn,
  SModal,
  SModalBlock,
  SModalBtn,
  SModalFormGroup,
  SModalFormLogin,
  SModalInput,
  SModalTtl,
  SWrapper,
} from './Login.styled'
export const Login = ({ setAuth }) => {
  const navigate = useNavigate()
  const loginAuth = (e) => {
    e.preventDefault()
    setAuth(true)
    navigate('/')
  }

  return (
    <>
      <SWrapper>
        <SContainerSignIn>
          <SModal>
            <SModalBlock>
              <SModalTtl>
                <h2>Вход</h2>
              </SModalTtl>
              <SModalFormLogin action="#">
                <SModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                <SModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <SModalBtn onClick={(e) => loginAuth(e)}>
                  <Link to="/">Войти</Link>
                </SModalBtn>
                <SModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/register">Регистрируйтесь здесь</Link>
                </SModalFormGroup>
              </SModalFormLogin>
            </SModalBlock>
          </SModal>
        </SContainerSignIn>
      </SWrapper>
    </>
  )
}
