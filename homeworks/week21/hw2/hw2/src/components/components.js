import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Block = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${(props) =>
    props.indexX === 19 || props.indexY === 19 ? "transparent" : "#ccc"};
  border: 1px solid
    ${(props) =>
      props.indexX === 19 || props.indexY === 19 ? "transparent" : "black"};
  position: relative;
`;
export const Title = styled.h1``;
export const StateInfo = styled.div`
  margin-bottom: 20px;
`;
export const ClickBlock = styled.div`
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
