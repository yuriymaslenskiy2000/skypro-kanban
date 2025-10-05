import { Link, useNavigate } from 'react-router-dom';

const PopupExit = ({setAuth}) => {
  const navigate = useNavigate();
  const logoutExit = (e) => {
    e.preventDefault();
    setAuth(false)
    navigate("/sign-in")
  }
    return (
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button onClick={(e)=> logoutExit(e)} className="pop-exit__exit-yes _hover01" id="exitYes">
                  <Link to='/sign-in'>Да, выйти</Link>
                </button>
                <button className="pop-exit__exit-no _hover03" id="exitNo">
                  <Link to="/">Нет, остаться</Link>
                  {'{'}' '{'}'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default PopupExit;
