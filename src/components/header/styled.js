import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #ffff;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const Box = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 30px;
    align-items: flex-start;

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
