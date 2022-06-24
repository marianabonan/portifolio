import styled from "styled-components";

export const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
`;

export const BoxContato = styled.div`
  width: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  text-align: center;
  align-items: center;
  top: 55px;
  background-color: #1c0055;
  padding: 15px;
  border-radius: 15px;
  h3 {
    color: #ffffff;
    font-size: 30px;
  }

  span {
    color: #e5d8ff;
    font-size: 15px;
    margin: 5%;
  }
  button {
    border: 2px solid #4a00e0;
    background-color: transparent;
    color: #ffffff;
    border-radius: 15px;
    height: 35px;
    width: 203px;
    font-size: 15px;
  }
  @media (min-width: 610px) {
    h3 {
      font-size: 35px;
    }
    span {
      font-size: 20px;
      margin: 2%;
    }
  }
  @media (min-width: 1240px) {
    flex-direction: row;
    justify-content: space-around;
    height: 150px;
    h3 {
      font-size: 40px;
    }
    span {
      font-size: 18px;
      margin: 0;
      width: 500px;
    }
  }
  @media (min-width: 1700px) {
    flex-direction: row;
    justify-content: space-around;
    height: 150px;
    h3 {
      font-size: 55px;
    }
    span {
      font-size: 18px;
      margin: 0;
      width: 500px;
    }
    button {
      height: 55px;
      width: 250px;
      font-size: 20px;
    }
  }
`;
