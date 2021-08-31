import { useState, useEffect } from "react";
import hasWinner from "./hasWinner";
import { Container, Block, Title, StateInfo, ClickBlock } from "./components";

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
              return (
                <Block key={indexX} indexX={indexX} indexY={indexY}>
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
