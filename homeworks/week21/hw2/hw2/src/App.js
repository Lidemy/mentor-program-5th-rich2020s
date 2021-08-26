import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Block = styled.div`
  height: 45px;
  width: 45px;
  background-color: #ccc;
  border: 1px solid black;
  position: relative;
`;
const Title = styled.h1``;
const StateInfo = styled.div`
  margin-bottom: 20px;
`;
const HiddenBlock = styled(Block)`
  background-color: transparent;
  border: 1px solid transparent;
`;
const ClickBlock = styled.div`
  position: absolute;
  top: -52.5%;
  left: -52.5%;
  border: ${(props) => (props.color === null ? "0" : "1px")} solid black;
  border-radius: 50%;
  transform: scale(0.75);
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.color === null ? "transparent" : props.color};
  :hover {
    background-color: ${(props) =>
      props.winner === null
        ? props.color === null
          ? props.blackIsNext
            ? "black"
            : "white"
          : props.color
        : ""};
    border: ${(props) => (props.winner ? "0px" : "1px")} solid black;
  }
`;
function hasWinner(x, y, board, dataSize) {
  if (x === "" || y === "") return;
  function columnHasWinner() {
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (y + i >= dataSize) break;
      if (board[y][x] === board[y + i][x] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (y - i < 0) break;
      if (board[y][x] === board[y - i][x] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) return true;
    return false;
  }
  function rowHasWinner() {
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (x + i >= dataSize) break;
      if (board[y][x] === board[y][x + i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i < 0) break;
      if (board[y][x] === board[y][x - i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) return true;
    return false;
  }
  function backSlashHasWinner() {
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (x + i >= dataSize || y + i >= dataSize) break;
      if (board[y][x] === board[y + i][x + i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i < 0 || y - i < 0) break;
      if (board[y][x] === board[y - i][x - i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) return true;
    return false;
  }
  function slashHasWinner() {
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (x + i >= 20 || y - i < 0) break;
      if (board[y][x] === board[y - i][x + i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i < 0 || y + i >= dataSize) break;
      if (board[y][x] === board[y + i][x - i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) return true;
    return false;
  }
  if (
    rowHasWinner() ||
    columnHasWinner() ||
    backSlashHasWinner() ||
    slashHasWinner()
  )
    return true;
  return false;
}

let blackIsNext = true;
function App() {
  const size = 19;
  const dataSize = size + 1;
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [winner, setWinner] = useState(null);
  const [nextInfo, setNextInfo] = useState("");
  const [board, setBoard] = useState(
    Array(dataSize).fill(Array(dataSize).fill(null))
  );
  useEffect(() => {
    blackIsNext ? setNextInfo("換黑子") : setNextInfo("換白子");
    if (hasWinner(x, y, board, dataSize) === true) {
      setWinner(board[y][x]);
      setNextInfo(winner === "black" ? "黑子贏了！" : "白子贏了！");
    }
  }, [board, x, y, dataSize, winner]);
  useEffect(() => {}, [board]);

  function handleClick(indexX, indexY, value) {
    if (value !== null) return;
    if (winner !== null) return;
    setY(indexY);
    setX(indexX);
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[indexY][indexX] = blackIsNext ? "black" : "white";
    setBoard(newBoard);
    blackIsNext = !blackIsNext;
  }
  return (
    <Container>
      <Title>五子棋</Title>
      <StateInfo id="state">{nextInfo}</StateInfo>
      {board.map((row, indexY) => {
        return (
          <div key={indexY} style={{ display: "flex" }}>
            {row.map((block, indexX) => {
              if (indexX === 19 || indexY === 19) {
                return (
                  <HiddenBlock key={indexX}>
                    <ClickBlock
                      color={block}
                      onClick={() => handleClick(indexX, indexY, block)}
                      blackIsNext={blackIsNext}
                      winner={winner}
                    />
                  </HiddenBlock>
                );
              }
              return (
                <Block key={indexX}>
                  <ClickBlock
                    color={block}
                    onClick={() => handleClick(indexX, indexY, block)}
                    blackIsNext={blackIsNext}
                    winner={winner}
                  />
                </Block>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}

export default App;
