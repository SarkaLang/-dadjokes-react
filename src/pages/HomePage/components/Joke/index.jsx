import './style.css'
import { useState } from 'react'

export const Joke = ({userAvatar, userName, text, likes, dislikes}) => {

  const [countPlus, setCountPlus] = useState(likes || 0)
  const [countMinus, setCountMinus] = useState(dislikes || 0)


  const changeCountUp = () => {
    setCountPlus(countPlus + 1)
  }

  const changeCountDown = () => {
    setCountMinus(countMinus - 1)
  }

  return (
    <>
    <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={`http://localhost:4000${userAvatar}`}/>
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">
          {text}
        </p>
      </div>
       <div className="joke__likes">
       <button id="btn-up" className="btn-like btn-like--up" onClick={changeCountUp}></button>
       <span id="likes-up" className="likes-count likes-count--up">{countPlus}</span>
       <button id="btn-down" className="btn-like btn-like--down" onClick={changeCountDown}></button>
       <span id="likes-down" className="likes-count likes-count--down">{countMinus}</span>
     </div>
     </>
  )
}
