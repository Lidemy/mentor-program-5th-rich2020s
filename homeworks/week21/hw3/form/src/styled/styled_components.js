import styled from "styled-components";

export const Page = styled.div`
  border-top: solid 6px #fad312;
  width: 645px;
  height: 1085px;
  margin: 126px auto;
  background: white;
  display: flex;
  justify-content: flex-start;
  box-shadow: 1.8px 2.4px 5px 0 rgb(0 0 0 / 30%);
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
`;
export const FormTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 18px;
`;
export const FormInfo = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
`;
export const FormAlert = styled(FormInfo)`
  font-size: 18px;
  color: red;
`;
export const ActualForm = styled.form`
  margin-bottom: 14px;
`;
export const Footer = styled.div`
  width: 100%;
  height: 60px;
  background: black;
  font-size: 13px;
  color: #999999;
  border-top: 3px solid #fad312;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  background: #fad312;
  width: 92px;
  height: 40px;
  border: 1px solid white;
  border-radius: 3px;
`;
