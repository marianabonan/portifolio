import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5%;
  height: 80px;
  @media (min-width: 768px) {
    margin: 3%;
  }
`;

export const Box = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 30px;

    button {
      font-size: 20px;
      margin-left: 20px;
      border: none;
      background-color: transparent;
    }

    button:hover {
      cursor: pointer;
    }
  }
`;
