import { useState } from "react";
import "./styles.css";

export default function App() {
  const [turn, setTurn] = useState(true);
  const [player, setPlayer] = useState("0");
  const [winner, setWinner] = useState(null);

  function handleClick(boxid) {
    if (winner !== null) return;
    let current = document.getElementById(boxid).innerText;
    document.getElementById(boxid).disabled = true;
    if (current === "") {
      document.getElementById(boxid).innerText = player;
      setWinner(calculateWinner());
      if (!turn) {
        setPlayer("0");
        setTurn(true);
      } else {
        setPlayer("X");
        setTurn(false);
      }
    } else {
      return;
    }
  }
  function calculateWinner() {
    const squares = document.getElementsByClassName("box");
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a].innerText &&
        squares[a].innerText === squares[b].innerText &&
        squares[a].innerText === squares[c].innerText
      ) {
        squares[a].classList.add("winner");
        squares[b].classList.add("winner");
        squares[c].classList.add("winner");
        return squares[a].innerText;
      }
    }
    let countBlank = 0;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerText !== "") countBlank++;
    }
    if (countBlank === 9) {
      return "tie";
    }
    return null;
  }

  function resetButtons() {
    const squares = document.getElementsByClassName("box");
    setWinner(null);
    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.remove("winner");
      squares[i].disabled = false;
      squares[i].innerText = "";
    }
  }
  return (
    <>
      <div className="App">
        <div className="tictac">
          <button
            className="box"
            id="box1"
            onClick={() => handleClick("box1")}
          ></button>
          <button
            className="box"
            id="box2"
            onClick={() => handleClick("box2")}
          ></button>
          <button
            className="box"
            id="box3"
            onClick={() => handleClick("box3")}
          ></button>

          <button
            className="box"
            id="box4"
            onClick={() => handleClick("box4")}
          ></button>
          <button
            className="box"
            id="box5"
            onClick={() => handleClick("box5")}
          ></button>
          <button
            className="box"
            id="box6"
            onClick={() => handleClick("box6")}
          ></button>

          <button
            className="box"
            id="box7"
            onClick={() => handleClick("box7")}
          ></button>
          <button
            className="box"
            id="box8"
            onClick={() => handleClick("box8")}
          ></button>
          <button
            className="box"
            id="box9"
            onClick={() => handleClick("box9")}
          ></button>
        </div>
      </div>
      <div>
        {(winner !== null || winner === "tie") && (
          <>
            <p>Winner: {winner}</p>
            <button onClick={() => resetButtons()}>Reset</button>
          </>
        )}
      </div>
    </>
  );
}
