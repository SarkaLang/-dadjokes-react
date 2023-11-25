import './style.css';
import { useState } from 'react'

export const HomePage = () => {
  // stavy pro hodnotu plus a mínus
  const [countPlus, setCountPlus] = useState(0)
  const [countMinus, setCountMinus] = useState(0)

  // funkce pro přičítání a odečítná
  const changeCountUp = () => {
    setCountPlus(countPlus + 1)
  }

  const changeCountDown = () => {
    setCountMinus(countMinus - 1)
  }



  return (
    <div className="container">
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png" />
          <p className="user-name">Neroxx</p>
        </div>

        <p className="joke__text">
          The secret service isn't allowed to yell "Get down!" anymore when
          the president is about to be attacked. Now they have to yell
          "Donald, duck!"
        </p>
      </div>
      <div className="joke__likes">
        <button id="btn-up" className="btn-like btn-like--up" onClick={changeCountUp}></button>
        <span id="likes-up" className="likes-count likes-count--up">{countPlus}</span>
        <button id="btn-down" className="btn-like btn-like--down" onClick={changeCountDown}></button>
        <span id="likes-down" className="likes-count likes-count--down">{countMinus}</span>
      </div>
    </div>
  </div>
  );
};
