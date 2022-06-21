import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5%;
`;

export const Box = styled.div`
  display: none;
  @media (min-width: 786px) {
    display: flex;
    justify-content: space-between;

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
