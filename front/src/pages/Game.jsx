import React, { useState } from 'react'

const Game = () => {
  const [field, setField] = useState({
    square: Array(9).fill(null),
    count: 0,
    x: 0,
    o: 0,
    first: '',
    disabled: '',
    zIndex: -1,

  })
  const winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const isWinner = () => {
    let s = '';
    if (field.first === 'cross') {
      s = (field.count % 2 === 0) ? 'x' : 'o';
    }
    else if (field.first === 'zero') {
      s = (field.count % 2 === 0) ? 'o' : 'x';
    }

    for (let i = 0; i < 8; i++) {
      let line = winnerLine[i];
      if (field.square[line[0]] === s
        && field.square[line[1]] === s
        && field.square[line[2]] === s) {
        //TASK 4. Добавьте глобальный счет - т.е. количество побед крестиков и ноликов - в течении нескольких партий.
        setField({...field, [s]: field[s] + 1,winner: 'win', zIndex: 0, square: Array(9).fill(null), count: 0 });
        alert(s.toUpperCase() + ' ПОБЕДИТЕЛЬ!!!!')
        if (field.count === 8) {
          return;
        }
      }
    }
    if (field.count === 8) {
      isDraw();
    }
  }

  const isDraw = () => {
    if (!field.square.includes(null)) {
      alert('НИЧЬЯ!!!');
      setField({ ...field, square: Array(9).fill(null), count: 0, zIndex: 0 });
    }
  }

  const clickHandler = (e) => {

    //номер квадрата, по которому кликнули
    let data = e.target.getAttribute('data');
    let currentSquare = field.square;
    if (currentSquare[data] === null && field.first === 'cross') {
      currentSquare[data] = (field.count % 2 === 0) ? 'x' : 'o';

      setField({ ...field, count: field.count + 1, square: currentSquare, disabled: 'disabled' });
    }
    else if (currentSquare[data] === null && field.first === 'zero') {
      currentSquare[data] = ( field.count % 2 !== 0) ? 'x' : 'o';
      setField({ ...field, count: field.count + 1, square: currentSquare, disabled: 'disabled' });
    }
    else if (currentSquare[data] === null && field.first === '') {
      alert('КТО БУДЕТ ПЕРВЫМ ХОДИТЬ?');
    }
    else {
      alert('ТАК НЕЛЬЗЯ!!')
    }

    isWinner();
  }

  //TASK 4. Добавьте кнопку - начать новую игру, которая обнуляет и очищает поле.
  const restartGame = () => {
    setField({ ...field, square: Array(9).fill(null), count: 0, disabled: '', winner: '', zIndex: -1 });
  }

  const gameChange = (e) => {
    setField({ ...field, first: e.target.getAttribute("attr") })
  }

  return (
    <div className="wrapper">
      <div className="tic-tac-toe">
        <div className="gameOver" style={{ zIndex: field.zIndex }}>GAME OVER</div>
        <div className="ttt-grid" onClick={clickHandler} data='0'>{field.square[0]}</div>
        <div className="ttt-grid" onClick={clickHandler} data='1'>{field.square[1]}</div>
        <div className="ttt-grid" onClick={clickHandler} data='2'>{field.square[2]}</div>
        <div className="ttt-grid" onClick={clickHandler} data='3'>{field.square[3]}</div>
        <div className="ttt-grid" onClick={clickHandler} data='4'>{field.square[4]}</div>
        <div className="ttt-grid" onClick={clickHandler} data='5'>{field.square[5]}</div>
        <div className="ttt-grid" onClick={clickHandler} data='6'>{field.square[6]}</div>
        <div className="ttt-grid" onClick={clickHandler} data='7'>{field.square[7]}</div>
        <div className="ttt-grid" onClick={clickHandler} data='8'>{field.square[8]}</div>
      </div>
      <button className="btn-restart" onClick={restartGame}>NEW GAME</button>
      <div className="change">
        <p>ПЕРВЫХ ХОД ДЕЛАЕТ:</p>
        <input type="radio" name="first" attr="cross" disabled={field.disabled} onClick={gameChange} /> КРЕСТИК
        <input type="radio" name="first" attr="zero" disabled={field.disabled} onClick={gameChange} />НОЛИК
      </div>

      <div>
        <div>
          <div>
            <div className='title__win'>ПОБЕДЫ</div>
          </div>
          <div className='count'>
            <div className='title'>Х:</div>
            <div>{field.x}</div>
          </div>
          <div className='count'>
            <div className='title'>0:</div>
            <div>{field.o}</div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Game