import { Link } from 'react-router-dom'
import {
  SContainerSignup,
  SModal,
  SModalBlock,
  SModalBtn,
  SModalFormGroup,
  SModalFormLogin,
  SModalInput,
  SModalTtl,
  SWrapper,
} from './SignUp.styled'
export const SignUp = () => {
  return (
    <SWrapper>
      <SContainerSignup>
        <SModal>
          <SModalBlock>
            <SModalTtl>
              <h2>Регистрация</h2>
            </SModalTtl>
            <SModalFormLogin action="#">
              <SModalInput type="text" name="first-name" id="first-name" placeholder="Имя" />
              <SModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта" />
              <SModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <SModalBtn>
                <Link to="/sign-in">Зарегистрироваться</Link>
              </SModalBtn>
              <SModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                </p>
              </SModalFormGroup>
            </SModalFormLogin>
          </SModalBlock>
        </SModal>
      </SContainerSignup>
    </SWrapper>
  )
}
