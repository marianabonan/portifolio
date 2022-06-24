import styled from "styled-components";

export const BoxProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #fcfcfc;
  text-align: left;
  margin-top: 20px;
  border-radius: 40px;
  img {
    padding: 15px;
    border-radius: 40px;
    height: 200px;
  }

  p {
    padding-top: 15px;
    padding-left: 15px;
    color: #4a00e0;
    font-size: 24px;
    font-weight: bold;
  }
  span {
    padding: 15px;
    color: #cbcbcb;
    font-size: 15px;
  }
`;
